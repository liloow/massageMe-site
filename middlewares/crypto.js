const crypto = require('crypto');

exports.getRandomBytes = async function(cb) {
  if (cb) {
    crypto.randomBytes(16, (err, buf) => {
      if (err) return cb(err);
      return cb(null, buf.toString('hex'));
    });
  } else return await crypto.randomBytes(16).toString('hex');
};
