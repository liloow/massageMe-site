const express = require('express');
const api = express.Router(); // eslint-disable-line
const ifErr = require('../middlewares/ifErr');

api.post('/signup', ifErr(require('../controllers/login/signup')));
api.post('/login', ifErr(require('../controllers/login/login')));
api.post('/logout', ifErr(require('../controllers/login/logout')));
api.get('/fetchUserInfos', ifErr(require('../controllers/fetchUserInfos')));

// passwords_user_id_key;
module.exports = api;
