const express = require('express');

const quienesSomosControllers = require('../contrrollers/quienesSomosController');

const router = express.Router();

router.get('/', quienesSomosControllers.home);

module.exports = router;