const db = require('../db');

module.exports = async function getSlots(req, res, next) {
  console.log(req);
  const userId = req.user ? req.user.id : req.ip;
  const {therapistId, fullDate} = req.body;

  const timestamp = await db.task('getInsertUserId', async t => {
    await db.none(
      `
        UPDATE slots_prebooked
        SET lock_released = TRUE
        WHERE user_id = $1
            AND lock_released IS FALSE
      `,
      [userId]
    );
    return await db.one(
      `
        INSERT INTO slots_prebooked
        (user_id, slot, therapist_id)
        VALUES ($1,$2,$3)
        RETURNING prebooked_at
      `,
      [userId, fullDate, therapistId],
      d => d.prebooked_at
    );
  });
  return res.json(timestamp);
};
