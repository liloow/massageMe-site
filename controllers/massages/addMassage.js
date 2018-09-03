const db = require('../db');

module.exports = async function getMassages(req, res) {
  const {name, description, price, imgUrl} = req.body;

  await db.none(
    `--addMassages
    INSERT INTO public.massages (name, description, price, img_url)
    VALUES ($1, $2, $3, $4)
  `,
    [name, description, price, imgUrl]
  );
  return res.json(massages);
};
