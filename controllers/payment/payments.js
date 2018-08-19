const db = require('../db');

async function storePaymentAttempt(req, res) {
  const {order, paymentId} = req.body;
  const userId = req.user ? req.user.id : req.ip;
  await db.none(
    `-- Store Payment
      INSERT INTO public.payments (full_order, payment_id, user_id)
      VALUES($1, $2, $3)
    `,
    [order, paymentId, userId]
  );
  return res.json({});
}

async function fetchPayment(req, res) {
  const {id} = req.query;
  const payment = await db.one(
    ` -- fetch payments
    SELECT *
    FROM public.payments
    WHERE payment_id = $1
    `,
    [id]
  );
  // const payment = await mollie.payments.get(id);
  return res.json(payment);
}

exports.storePaymentAttempt = storePaymentAttempt;
exports.fetchPayment = fetchPayment;
