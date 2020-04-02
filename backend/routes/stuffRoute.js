const express = require('express');
const route = express.Router();
const stuffCtrl = require('../controllers/stuffController');
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

route.get('/', auth, stuffCtrl.indexThing);
route.post('/', auth, multer, stuffCtrl.newThing);
route.get('/:id', auth, stuffCtrl.showThing);
route.delete('/:id', auth, stuffCtrl.deleteThing);
route.put('/:id', auth, multer, stuffCtrl.updateThing);

module.exports = route;
