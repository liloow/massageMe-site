const db = require('../db');

module.exports = async function getMassages(req, res, next) {
  const {fullname, bio, phone, postalCodeCoverage, profilePic, email, birthdate} = req.body;

  await db.none(
    `--addTherapist
    INSERT INTO public.massages (fullname, bio, phone, postal_code_coverage, profile_pic, email, birthdate)
    VALUES ($1, $2, $3, $4, $5, $6, $7)
  `,
    [fullname, bio, phone, postalCodeCoverage, profilePic, email, birthdate]
  );
  return res.json(massages);
};
