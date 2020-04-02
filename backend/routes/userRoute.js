const express = require('express');
const route = express.Router();

const userCtrl = require('../controllers/userController');

route.post('/signup', userCtrl.signup);
route.post('/login', userCtrl.login);

module.exports = route;


