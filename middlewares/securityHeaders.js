// Enable HSTS security system.

module.exports = function(req, res, next) {
  // Policy: We send the full referrer only when the destination page is on Doctrine. Otherwise we send only the origin, ie. only https://www.doctrine.fr/.
  res.setHeader('Referrer-Policy', 'origin-when-cross-origin');
  res.setHeader('X-Referrer-Policy', 'origin-when-cross-origin');

  // See https://developer.mozilla.org/fr/docs/Web/HTTP/Headers/X-XSS-Protection
  res.setHeader('X-XSS-Protection', '1; mode=block');

  // Deny websites from putting Doctrine in a frame
  res.setHeader('X-Frame-Options', 'DENY');

  // See https://developer.mozilla.org/fr/docs/Web/HTTP/Headers/X-Content-Type-Options
  res.setHeader('X-Content-Type-Options', 'nosniff');

  // Add HSTS header (tells the browser to use HTTPS only)
  // if (req.protocol === 'https' && req.hostname) {
  //   res.setHeader('Strict-Transport-Security', 'max-age=31536000');
  //   return next();
  // } else {
  //   return next();
  // }
};
