const express = require('express');

const productsController = require('../contrrollers/productsController');
const uploadFile= require('../middlewares/multerMiddleware');
const validatorRegister = require('../middlewares/validatorCreateProduct');

const router = express.Router();

router.get('/', productsController.product);

router.get('/details/:id', productsController.productDetail);

router.get('/create', productsController.formCreate);
router.post('/create', uploadFile.single('imageProduct'),validatorRegister.registerValidator , productsController.store);


router.get('/edit/:id', productsController.formEdit);
router.put('/edit/:id',uploadFile.single('imageProduct'), productsController.update);

router.delete('/delete/:id', productsController.delete);

module.exports = router;