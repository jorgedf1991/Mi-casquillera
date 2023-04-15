const express = require('express');

const userController = require('../contrrollers/userController');

const uploadFile= require('../middlewares/multerMiddleware');
const validatorRegister = require('../middlewares/validatorRegister');



const router = express.Router();

router.get('/create', userController.form);
router.post('/create',uploadFile.single('imageUsers'),validatorRegister.registerValidator,userController.create);
router.get('/listUser', userController.listUsers);

module.exports = router;