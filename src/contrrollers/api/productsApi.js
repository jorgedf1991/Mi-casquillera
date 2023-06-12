
const path = require('path');
const fs = require('fs');
const db = require('../../database/models');

const productAPIController = {
    'products': (req, res) => {
        db.Product.findAll({})
        .then(user => {
            let respuesta = {
                meta: {
                    status : 200,
                    total: user.length,
                    url: 'api/user'
                },
                data: user
            }
                res.json(respuesta);
            })
     },
    
     'detail': (req, res) => {
         db.Product.findByPk(req.params.id,)
             .then(product => {
                 let respuesta = {
                    meta: {
                         status: 200,
                         total: product.length,
                        url: 'api/product/:id'
                     },
                    data: product
               }
                res.json(respuesta);
            });
    }
}

module.exports = productAPIController;