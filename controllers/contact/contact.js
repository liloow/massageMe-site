const db = require('../db');

module.exports = async function sendForm(req, res) {
  const {sex, name, email, phone, postal, subject, message} = req.body;

  if (delivery === 'email') {
    sendEmail(dispatch.to, dispatch.subject, dispatch.from, recipient.message, voucherPDF);
  } else {
    registerManualPostage(dispatch.adress, dispatch.from, recipient.message, voucherPDF);
  }

  await db.none(
    `--recordVoucher
    INSERT INTO public.contacts (sex, name, email, phone, postal, subject, message)
    VALUES ($1, $2, $3, $4, $5, $6, $7)
     `,
    [sex, name, email, phone, postal, subject, message]
  );

  return res.json({});
};
