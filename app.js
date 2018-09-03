'use strict';
const fs = require('fs');
const path = require('path');
const morgan = require('morgan');
const express = require('express');
const auth = require('./routes/auth');
const index = require('./routes/index');
const bodyParser = require('body-parser');
const locals = require('./middlewares/locals');
const cookieSession = require('cookie-session');
const sessionId = require('./middlewares/sessionId');
const history = require('express-history-api-fallback');
const {createBundleRenderer} = require('vue-server-renderer');
const fetchUserInfos = require('./middlewares/fetchUserInfos');
// const securityHeaders = require('./middlewares/securityHeaders');
const cors = require('cors');
const colors = require('colors');
const db = require('./controllers/db');
const traceEvents = require('trace_events');
const compression = require('compression');
const tracing = traceEvents.createTracing({
  categories: ['async.hooks', 'v8'],
});

if (process.env.NODE_ENV !== 'production') tracing.enable();

function reportQueryError(err, req, level, httpStatus) {
  console.log(
    colors.orange(err, level, {
      httpStatus: httpStatus,
    })
  );
}

const app = express();

function createRenderer(bundle, options) {
  return createBundleRenderer(
    bundle,
    Object.assign(options, {
      runInNewContext: false,
    })
  );
}

let renderer;
const templatePath = path.resolve(__dirname, './src/index.template.html');

const bundle = require('./dist/vue-ssr-server-bundle.json');
const template = fs.readFileSync(templatePath, 'utf-8');
const clientManifest = require('./dist/vue-ssr-client-manifest.json');

renderer = createRenderer(bundle, {
  template,
  clientManifest,
});

app.use(compression());
app.set('trust proxy', [
  // self
  '127.0.0.1/32',
]);

db.proc('version')
  .then(data => console.log('\n Good work, DB is up! \n'.bold.yellow))
  .catch(error => console.log(error));

/* ========================================================================== */
/*                                CONTAINERS                                  */
/* ========================================================================== */

// Disable cache to fix IE bug
app.use(function(req, res, next) {
  res.set({'Cache-Control': 'no-cache'});
  next();
});

if (process.env.NODE_ENV === 'production' || process.env.DEBUG_COOKIE_SESSION) {
  console.log('SECRET_KEY_BASE starts by ' + process.env.SECRET_KEY_BASE.slice(0, 4));
}
const session = cookieSession({
  name: 'session',
  keys: [process.env.SECRET_KEY_BASE],
  maxAge: 1000 * 3600 * 24 * 365, // 1 year
});

app.session = session;
app.use(session);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
if (process.env.NODE_ENV === 'DEV') {
  app.use(
    cors({
      origin: true,
      credentials: true,
    })
  );
}

/* ========================================================================== */
/*                               MIDDLEWARES                                  */
/* ========================================================================== */

// Add HSTS and other security headers
// app.use(securityHeaders);

// Initialize session id
app.use(sessionId.middleware);

// resolve user identity
app.use(fetchUserInfos);

// Parse JSON AJAX requests (secure because they are CORS-protected)
app.use(bodyParser.json());

app.use(locals);

// app.use((req, res, next) => {
//   // console.log('USERS =>', req.user);
//   return next();
// });

/* ========================================================================== */
/*                               MIDDLEWARES                                  */
/* ========================================================================== */

morgan.token('id', function(req, res) {
  if (req && req.request_pseudo_unique_number != null) {
    return String(req.request_pseudo_unique_number);
  } else {
    return 'null';
  }
});
morgan.token('user_id', function(req, res) {
  if (req && req.current_user && req.current_user.id != null) {
    return req.current_user.id;
  } else {
    return 'null';
  }
});
morgan.token('session_id', function(req, res) {
  if (req && req.session && req.session.id != null) {
    return req.session.id;
  } else {
    return 'null';
  }
});
morgan.token('doctrine_custom_error_code', function(req, res) {
  if (res && res.doctrine_custom_error_code != null) {
    return res.doctrine_custom_error_code;
  } else {
    return '-';
  }
});
let logConfigBefore;
let logConfigAfter;
if (app.get('env') === 'production' || process.env.DEBUG_PRODUCTION_LOGS) {
  const commonLogPart =
    ':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" ":referrer" "session_id=:session_id';
  logConfigBefore = morgan.compile('[BEFORE :id] ' + commonLogPart);
  logConfigAfter = morgan.compile(
    '[AFTER  :id] ' +
      commonLogPart +
      ' user_id=:user_id status=:status ":response-time ms" length=:res[content-length] :doctrine_custom_error_code'
  );
} else {
  logConfigAfter = 'dev';
}
if (logConfigBefore) {
  app.use(
    morgan(logConfigBefore, {
      immediate: true,
    })
  );
}
if (logConfigAfter) {
  app.use(
    morgan(logConfigAfter, {
      immediate: false,
    })
  );
}

/* ========================================================================== */
/*                                   PATHS                                    */
/* ========================================================================== */
app.use('/', auth);
app.use('/', index);

const clientRoot = path.join(__dirname, 'dist');
app.use('/', express.static(clientRoot));
// app.use('/', express.static(path.resolve(__dirname, './dist/ ')));
app.use(history('index.html', {root: clientRoot}));

app.get('*', (req, res) => {
  res.setHeader('Content-Type', 'text/html');
  const context = {
    title: 'Vue HN 2.0', // default title
    url: req.url,
  };

  renderer.renderToString(context, (err, html) => {
    if (err) {
      if (err.code === 404) {
        res.status(404).end('Page not found');
      } else {
        res.status(500).end('Internal Server Error');
      }
    } else {
      res.end(html);
    }
  });
});
/* ========================================================================== */
/*                               ERROR HANDLER                                */
/* ========================================================================== */

// catch 404 and forward to error handler
// app.use((req, res, next) => {
//   const err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });

// Error handler
app.use(function(err, req, res, next) {
  // No HTTP error code specified? Make it an error 500
  const errorStatus = err.status || 500;

  // Set HTTP status code
  res.status(errorStatus);

  // Never index error pages in Google
  res.locals.index_in_google = false;

  if (errorStatus === 422 && err.message && /^[A-Z_]+$/.test(err.message)) {
    // HTTP status 422 Unprocessable Entity
    // Convention: If we have an error with a status of 422, it is an error to send to the AJAX client
    // where the error message is a sort of error code (for example 'TOO_MANY_RESULTS_REQUESTED').
    // The client is then supposed to translate in human-friendly format the error string.
    res.json({
      error: err.message,
    });
    res.customCode = err.message;
  } else if (errorStatus >= 400 && errorStatus < 500 && errorStatus !== 422) {
    // HTTP status 4XX

    // Log error in console, except boring errors

    reportQueryError(err, req, 1, errorStatus);

    // Client error: show generic error message
    res.status(errorStatus).send('Error');
  } else {
    // HTTP status 5XX
    console.log(colors.red(err));
    // Report server error (it is our fault)
    // reportQueryError(err, req, 0, errorStatus);
    res.status(errorStatus).json(err.detail);
  }
});

module.exports = app;
