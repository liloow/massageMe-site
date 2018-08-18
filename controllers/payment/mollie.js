const mollie = require('@mollie/api-client')({apiKey: 'test_PCCVybQ2kwPcahnawjBmhPgAbNyfAr'});

async function createPayment(req, res) {
  const {value, currency, description, redirectUrl, webhookUrl} = req.body;
  await mollie.payments.create({
    amount: {
      value: value,
      currency: currency,
    },
    description: description,
    redirectUrl: redirectUrl,
    webhookUrl: webhookUrl,
  });
  return res.json('OK');
}

async function getPayment(req, res) {
  const id = req.id;
  const payment = await mollie.payments.get(id);
  return payment;
}

async function parseData(req, res) {
  return res.json(req.body);
}

exports.createPayment = createPayment;
exports.getPayment = getPayment;
exports.parseData = parseData;

