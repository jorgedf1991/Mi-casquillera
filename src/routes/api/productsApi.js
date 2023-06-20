const express = require('express');
const router = express.Router();
const productsApi = require('../../contrrollers/api/productsApi');

router.get('/product', productsApi.products);
router.get('/product/search', productsApi.search);
router.get('/product/:id', productsApi.detail); //deja esto aca, porque sino el :id interfiere con el search, el id siempre va ultimo

module.exports = router;