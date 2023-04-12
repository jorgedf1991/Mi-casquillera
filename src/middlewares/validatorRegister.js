const { body } = require('express-validator');

const registerValidator = [
    body('name').notEmpty().withMessage('Debes llenar este campo'),
    body('password').notEmpty().isLength({ min : 5, max : 10}),
    body('email').notEmpty().isEmail().withMessage('Debes llenar este campo'),
    body('select').notEmpty().withMessage('Debes elegir un pais')
];

module.exports = registerValidator; 
