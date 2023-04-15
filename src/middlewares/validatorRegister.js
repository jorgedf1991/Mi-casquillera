const { body } = require('express-validator');

module.exports = {
    registerValidator:[
    body('name').notEmpty().withMessage('Debes llenar este campo'),

    body('password').notEmpty().withMessage('Debes llenar este campo').bail()
    .isLength({ min : 5, max : 10}).withMessage('Debe tener minimo 5 caracteres y maximo 10'),

    body('email').notEmpty().withMessage('Debes llenar este campo').bail()
    .isEmail().withMessage('Tiene que ser un formato email'),

    body('select').notEmpty().withMessage('Debes elegir un pais')
    ]
}

