const express = require('express');

const mainControllers = require('../contrrollers/mainController');

const router = express.Router();

router.get('/', mainControllers.home);

router.get('/contacto',mainControllers.contact );
module.exports = router;