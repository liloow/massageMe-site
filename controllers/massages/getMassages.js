const db = require('../db');

module.exports = async function getMassages(req, res, next) {
  const massages = await db.many(`--getMassages
    SELECT *
    FROM public.massages
  `);
  return res.json(massages);
};
