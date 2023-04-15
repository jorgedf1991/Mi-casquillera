const express = require('express');

const productsController = require('../contrrollers/productsController');
const uploadFile= require('../middlewares/multerMiddleware');

const router = express.Router();

router.get('/', productsController.productDetail);

router.get('/create', productsController.formCreate);
router.post('/create', uploadFile.single('imageProduct'), productsController.store);
router.get('/details', productsController.productDetail);
module.exports = router;