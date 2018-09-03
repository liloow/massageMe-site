const db = require('../db');

module.exports = async function markSessionLoggedOut(req, res) {
  await db.none(
    `-- Terminate User Session
    UPDATE sessions
    SET logged_out_at =  now()
    WHERE sessions.session_id = $1
  `,
    [req.session.id, req.session.extra_secret]
  );
  return res.json('See you soon!');
};
