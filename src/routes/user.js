const express = require('express');

const userController = require('../contrrollers/userController');

const { uploadUserImgMiddleware } = require('../middlewares/multerMiddleware');
const validatorRegister = require('../middlewares/validatorRegister');

const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/perfil', authMiddleware, userController.userProfile);

router.get('/create', guestMiddleware, userController.form);
router.post('/create', uploadUserImgMiddleware().single('imageUsers'), validatorRegister.registerValidator, userController.create);

router.get('/listUser', userController.listUsers);

router.get('/login', guestMiddleware, userController.login);
router.post('/login', userController.loginProcces);

router.get('/logout/', userController.logout);

module.exports = router;