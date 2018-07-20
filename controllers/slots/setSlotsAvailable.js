const db = require('../db');
const {DateTime} = require('luxon');
const pg = require('pg-promise')({
  capSQL: true,
});

module.exports = async function getMassages(req, res, next) {
  const {therapistId, availableOn} = req.body;
  const slots = [];
  availableOn.forEach(day => {
    const date = DateTime.fromISO(day.start).toISODate();
    const start = DateTime.fromISO(day.start);
    const end = DateTime.fromISO(day.end);
    const numberOfSlots = end.diff(start, ['hours']).values.hours;
    for (let i = 0; i < numberOfSlots; i++) {
      slots.push({
        therapist: therapistId,
        full_date: start.plus({hours: i}),
        date,
        time: start.plus({hours: i}).toISOTime(),
      });
    }
  });

  const cs = new pg.helpers.ColumnSet([
    'therapist',
    'full_date',
    'date',
    'time',
    {name: 'updated_at', def: 'now()'},
  ]);
  const sql =
    pg.helpers.insert(slots, cs, {table: 'slots_available', schema: 'public'}) +
    ' ON CONFLICT ON CONSTRAINT therapist_fulldate DO UPDATE SET ' +
    cs.assignColumns({from: 'EXCLUDED'});
  const done = await db.none(sql);
  console.log(done);
  return res.json({});
};
