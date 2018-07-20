const db = require('../controllers/db');

module.exports = async function fetchUserInfos(req, res) {
  const user = await db.oneOrNone(
    `-- fetchUserInfo/getLoggedInUserData
    SELECT users.*
    FROM sessions
    JOIN users
      ON (sessions.user_id = users.id)
    WHERE sessions.session_id = $1
    AND sessions.logged_out_at IS NULL
    AND sessions.extra_secret = $2
  `,
    [req.session.id, req.session.extra_secret]
  );
  console.log('USER FROM FETCH :', user);
  return res.json(user);
};
