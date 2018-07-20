module.exports = function setLocals(req, res, next) {
  res.locals.user = req.user;
  res.locals.session = req.session;
  return next();
};
