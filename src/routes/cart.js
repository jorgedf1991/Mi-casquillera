const express = require('express');

const cartControllers = require('../contrrollers/cartController');

const router = express.Router();

router.get('/', cartControllers.cart);

module.exports = router;