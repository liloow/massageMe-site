const crypto = require('crypto');

exports.getRandomBytes = async function(cb) {
  if (typeof cb === 'function') {
    crypto.randomBytes(16, (err, buf) => {
      if (err) return cb(err);
      return cb(null, buf.toString('hex'));
    });
  } else return await crypto.randomBytes(cb || 16).toString('hex');
};
