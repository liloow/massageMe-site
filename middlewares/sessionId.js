const {getRandomBytes} = require('../controllers/utils/crypto');

exports.middleware = function(req, res, next) {
  if (req.session.id != null) return next();
  else {
    getRandomBytes((err, hash) => {
      if (err) return next(err);
      req.session.id = hash;
      console.log('New session id : ' + req.session.id + ' for ' + req.ip);
    });
  }
  next();
};

exports.getNewSessionId = async (req, extraSecret, persist) => {
  req.session.id = await getRandomBytes();
  console.log('Generated new session id ' + req.session.id + ' for ' + req.ip);

  req.session.extra_secret = await getRandomBytes();
  console.log('New Extra secret  : ' + req.session.extra_secret + ' for ' + req.ip);
  if (persist) req.session.maxAge = 60 * 60 * 24 * 365;
  return;
};
