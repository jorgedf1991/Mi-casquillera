const express = require('express');

const userController = require('../contrrollers/userController');

const uploadFile= require('../middlewares/multerMiddleware');
const validatorRegister = require('../middlewares/validatorRegister');
const guestMiddleware = require('../middlewares/guestMiddleware');



const router = express.Router();
router.get('/perfil', userController.userProfile);

router.get('/create',guestMiddleware ,userController.form);
router.post('/create',uploadFile.single('imageUsers'),validatorRegister.registerValidator,userController.create);

router.get('/listUser', userController.listUsers);
router.post('/login', userController.loginProcces);

router.get('/logout/', userController.logout);

module.exports = router;