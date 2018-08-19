const {getRandomBytes} = require('../utils/crypto');
const mollie = require('@mollie/api-client')({apiKey: 'test_PCCVybQ2kwPcahnawjBmhPgAbNyfAr'});

async function createPayment(req, res) {
  const {value, currency, description, redirectUrl, webhookUrl} = req.body;
  const id = await getRandomBytes(10);
  const payment = await mollie.payments.create({
    amount: {
      value: value,
      currency: currency,
    },
    description: description,
    redirectUrl: `${redirectUrl}?id=${id}`,
    webhookUrl: webhookUrl,
  });
  return res.json({...payment, paymentId: id});
}

async function getPaymentStatus(req, res) {
  const {id} = req.body;
  const status = await mollie.payments.get(id);
  return res.json(status);
}

exports.createPayment = createPayment;
exports.getPaymentStatus = getPaymentStatus;
