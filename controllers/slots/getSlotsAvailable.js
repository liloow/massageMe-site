const db = require('../db');
const {toCamelCase} = require('../utils');

module.exports = async function getSlots(req, res, next) {
  const {raw} = req.query;
  const [year, month, day] = [...raw];
  let slots = await db.query(
    `--getSlotsAvailable
    SELECT
      array_agg(therapist)          as therapists,
      full_date,
      EXTRACT(DAY FROM full_date)   as day,
      EXTRACT(MONTH FROM full_date) as month,
      EXTRACT(YEAR FROM full_date)  as YEAR,
      to_char(full_date, 'HH24:MI') as time
    FROM public.slots_available AS sa
      LEFT JOIN public.slots_prebooked AS sp ON (sp.slot = sa.full_date AND sp.therapist_id = sa.therapist)
    WHERE EXTRACT(MONTH FROM date) = $2
    ${day ? 'AND EXTRACT(DAY FROM date) = $1' : ''}
          AND EXTRACT(YEAR FROM date) = $3
          AND full_date > now()
          AND booked IS FALSE
          AND (sp.prebooked_at ISNULL
              OR (EXTRACT(EPOCH FROM (now() - sp.prebooked_at)) > 60 * 10
              OR lock_released = false))
    GROUP BY full_date
  `,
    [Number(day), Number(month) + 1, Number(year)]
  );
  const camel = slots.map(slot => {
    const temp = {};
    for (let key of Object.keys(slot)) {
      temp[toCamelCase(key)] = slot[key];
    }
    return temp;
  });

  console.log(slots);
  return res.json(camel);
};
