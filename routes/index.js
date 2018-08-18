const express = require('express');
const router = express.Router(); // eslint-disable-line
const ifErr = require('../middlewares/ifErr');

router.get('/getMassages', ifErr(require('../controllers/massages/getMassages')));
router.get('/getTherapists', ifErr(require('../controllers/therapists/getTherapists')));
router.get('/getSlotsAvailable', ifErr(require('../controllers/slots/getSlotsAvailable')));

router.post('/setSlotsAvailable', ifErr(require('../controllers/slots/setSlotsAvailable')));
router.post('/prebook', ifErr(require('../controllers/slots/prebook')));
router.post('/addMassage', ifErr(require('../controllers/massages/addMassage')));
router.post('/addTherapist', ifErr(require('../controllers/therapists/addTherapist')));

router.post('/createPayment', ifErr(require('../controllers/payment/mollie').createPayment));
router.post('/getPayment', ifErr(require('../controllers/payment/mollie').getPayment));
router.post('/webhookUrl', ifErr(require('../controllers/payment/mollie').parseData));

module.exports = router;
