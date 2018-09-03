const db = require('../db');
const {hashPass} = require('../utils');

const params = param => {
  const notNull = ['fullname', 'email', 'phone', 'password']; // Params which must be defined
  const canBeNull = []; // Params which must appear
  return notNull.every(p => Boolean(param[p])) && canBeNull.every(p => p !== undefined);
};

module.exports = async function createUser(req, res) {
  if (!params(req.body)) return res.status(400).json('Parameters do not meet requirements');
  const {password, email, phone, fullname} = req.body;
  // if (!password || !email || !fullname) return res.status(400).json('Missing fields');
  console.log('yo');
  const userID = await db.task('getInsertUserId', async t => {
    const userExist = Boolean(
      await t.oneOrNone(
        `
        SELECT id
        FROM public.users
        WHERE email = $1
      `,
        [email]
      )
    );
    if (userExist) {
      res.status(422).json('This email is already used');
      return null;
    }
    return await t.oneOrNone(
      `
        INSERT INTO public.users(fullname, email, phone)
        VALUES ($1, $2, $3)
        RETURNING id
        `,
      [fullname, email, phone],
      u => u.id
    );
  });
  if (userID) {
    console.log(userID);
    const hash = await hashPass(password);
    await db.none(
      `
        INSERT INTO passwd(user_id, hash)
        VALUES ($1, $2)
        `,
      [userID, hash]
    );
    return res.json('New acccount created');
  }
};
