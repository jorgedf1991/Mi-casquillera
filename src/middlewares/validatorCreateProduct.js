const { body } = require('express-validator');

module.exports = {
    registerValidator:[
    body('name').notEmpty().withMessage('Debes llenar este campo'),
    body('price').notEmpty().withMessage('Debes llenar este campo'),
    body('description').notEmpty().withMessage('Debes llenar este campo')
    ]
}