const express = require('express');
const router = express.Router();
const productsApi = require('../../contrrollers/api/productsApi');

router.get('/product', productsApi.products);
router.get('/product/:id', productsApi.detail);

module.exports = router;