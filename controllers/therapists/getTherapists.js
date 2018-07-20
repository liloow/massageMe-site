const db = require('../db');

module.exports = async function getMassages(req, res, next) {
  const therapists = await db.many(`--getTherapists
    SELECT *
    FROM therapists.therapists
  `);
  return res.json(therapists);
};
