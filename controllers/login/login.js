const bcrypt = require('bcrypt');
const db = require('../db');
const sessionId = require('../../middlewares/sessionId');

async function createSession(req, userID) {
  return await db.one(
    `
      INSERT INTO sessions(session_id, user_id, ip, extra_secret)
      VALUES($1, $2, $3, $4)
      RETURNING id`,
    [req.session.id, userID, req.ip, req.session.extra_secret]
  );
}

// async function saveHashInDedicatedTable(user, password) {
//   return await db.none(`INSERT INTO passwd (password) VALUES ($1) WHERE user_id=$2`, [
//     password,
//     user.id,
//   ]).data;
//   // 'passwords_user_id_key',
// }

// async function invalidateAllPasswordResetCodes(userID) {
//   db.none(
//     `
//     UPDATE password_reset_codes
//     SET
//       updated_at = now(),
//       deleted_at = now()
//     WHERE user_id = $1
//     AND deleted_at IS NULL
//   `,
//     [userID]
//   );
// }

// let loginID = await db.one(
//   `INSERT INTO logins(user_id, ip)
//    VALUES($1)
//    RETURNING id`,
//   [login],
//   login => login.id
// )

// async function postLoginTasks(req, user) {
//   // validateAllPasswordResetCodes(user.id);
//   if (!req.session.extra_secret) {
//     await sessionId.getNewSessionId(req, true);
//     await createSession(req, user.id);
//   }
//   return 'done';
// }

// async function fetchUserInfos(req, res) {
//   const user = await db.oneOrNone(
//     `-- fetchUserInfo/getLoggedInUserData
//     SELECT users.*
//     FROM sessions
//     JOIN users
//       ON (sessions.user_id = users.id)
//     WHERE sessions.session_id = $1
//     AND sessions.logged_out_at IS NULL
//     AND sessions.extra_secret = $2
//   `,
//     [req.session.id, req.session.extra_secret]
//   );
//   req.user = user;
//   return;
// }

module.exports = async function login(req, res) {
  console.log(req.body);
  const {email, password, persist} = req.body;
  if (!email) return res.status(400).json('email is required');
  if (!password) return res.status(400).json('password is required');

  let user = await db.one(
    `
    -- find email in DB
    SELECT *
    FROM public.users
    WHERE email = $1
    `,
    [email]
  );
  if (!user) return res.status(422).json('No account linked to this email');
  let storedHash = await db.one(
    `
    -- compare hash
    SELECT hash
    FROM public.passwd
    WHERE user_id = $1
    `,
    [user.id],
    r => r.hash
  );
  let success = await bcrypt.compare(req.body.password, storedHash);
  if (!success) return res.status(422).json('Wrong password');
  req.user = user;
  await sessionId.getNewSessionId(req, true, persist);
  await createSession(req, user.id);
  // await fetchUserInfos(req, res);
  return res.json({session: req.session, userInfos: req.user});
};
// await postLoginTasks(req, user);
