
const path = require('path');
const fs = require('fs');
const db = require('../../database/models');

const productAPIController = {
    'products': (req, res) => {
        db.Product.findAll({})
        .then(product => {
            let respuesta = {
                meta: {
                    status : 200,
                    total: product.length,
                    url: 'api/user'
                },
                data: product
            }
                res.json(respuesta);
            })
     },
    
     'detail': (req, res) => {
         db.Product.findByPk(req.params.id, {
            include: [
            { model : db.Category, as: 'product_categories'}
         ]})
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
    },
    
    'search': (req, res) => {
        db.Product
            .findAll({
                where: {
                    name: {[Op.like]: '%' + req.query.keyword + '%'}
                }
            })
            .then(products => {
                return res.status(200).json(products);
            })
    }
}

module.exports = productAPIController;