const express = require('express');
const router = express.Router(); // eslint-disable-line
const ifErr = require('../middlewares/ifErr');

router.get('/getMassages', ifErr(require('../controllers/massages/getMassages')));
router.get('/getTherapists', ifErr(require('../controllers/therapists/getTherapists')));
router.get('/getSlotsAvailable', ifErr(require('../controllers/slots/getSlotsAvailable')));
router.get('/fetchPayment', ifErr(require('../controllers/payment/payments').fetchPayment));

router.post('/setSlotsAvailable', ifErr(require('../controllers/slots/setSlotsAvailable')));
router.post('/prebook', ifErr(require('../controllers/slots/prebook')));
router.post('/addMassage', ifErr(require('../controllers/massages/addMassage')));
router.post('/addTherapist', ifErr(require('../controllers/therapists/addTherapist')));

router.post('/createPayment', ifErr(require('../controllers/payment/mollie').createPayment));
router.post('/getPaymentStatus', ifErr(require('../controllers/payment/mollie').getPaymentStatus));
router.post(
  '/storePaymentAttempt',
  ifErr(require('../controllers/payment/payments').storePaymentAttempt)
);

module.exports = router;
