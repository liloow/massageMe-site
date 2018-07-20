module.exports = f => {
  return (req, res, next) => {
    return Promise.resolve(f(req, res, next)).catch(next);
  };
};
