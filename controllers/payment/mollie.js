const mollie = require('@mollie/api-client')({apiKey: 'test_PCCVybQ2kwPcahnawjBmhPgAbNyfAr'});

async function createPayment(req, res) {
  const {value, currency, description, redirectUrl, webhookUrl} = req.body;
  const p = await mollie.payments.create({
    amount: {
      value: value,
      currency: currency,
    },
    description: description,
    redirectUrl: redirectUrl,
    webhookUrl: webhookUrl,
  });
  console.log('CREATE RES:', p);
  return res.json('OK');
}

async function getPayment(req, res) {
  const id = req.id;
  const payment = await mollie.payments.get(id);
  return payment;
}

async function parseData(req, res) {
  console.log('RECIEVED RESPONSE : ', req.body);
  return res.json(req.body);
}

exports.createPayment = createPayment;
exports.getPayment = getPayment;
exports.parseData = parseData;
