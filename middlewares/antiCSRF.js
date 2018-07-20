module.exports = function(req, res, next) {
  if (process.env.DEBUG_MIDDLEWARES) {
    console.log('anti CSRF');
  }
  if (req.method === 'POST') {
    if (req.is('application/json')) {
      next();
    } else if (req.is('multipart/form-data') && ALLOWED_FOR_SENDING_FILES.indexOf(req.path) >= 0) {
      next();
    } else {
      const error = new Error('Forbidden content-type for POST request');
      error.status = 400;
      error.boring = true;
      return next(error);
    }
  } else {
    next();
  }
};
