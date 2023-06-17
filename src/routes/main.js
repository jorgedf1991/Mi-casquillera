const express = require('express');

const mainControllers = require('../contrrollers/mainController');

const router = express.Router();

router.get('/', mainControllers.home);

router.get('/contacto',mainControllers.contact );

router.get('/quienes-somos',mainControllers.viewSomos );

module.exports = router;