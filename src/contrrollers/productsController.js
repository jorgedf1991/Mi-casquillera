const path = require('path');
const fs = require('fs');
const db = require('../database/models');




const controller = {

    product: (req, res) => {
        
        db.Product.findAll({

        })
            .then(products => {
                res.render('productList', { products })
            })
    },


    productDetail: (req, res) => {
        db.Product.findByPk(req.params.id,
            {

            })
            .then(productId => {
                res.render('beer', { productId });
            })
    },

    formCreate: (req, res) => {
        try {
            res.render('formCreate');
        } catch (error) {
            console.log(error);
        }
    },

    store: async (req, res) => {
        try {
            const image = req.file ? req.file.filename : 'default-user-image.png';
            const productCreated = await db.Product.create({
                name: req.body.name,
                price: req.body.price,
                description: req.body.description,
                image: image
            });
            res.redirect('/product');
        } catch (error) {
            return res.json({ error });
        }
    },

    formEdit: async (req, res) => {
        try {
            const product = await db.Product.findByPk(req.params.id);
            res.render('productEdit', { product });

        } catch (error) {
            res.send(error)
        }
    },

    update: async (req, res) => {
        try {
           const { id } = req.params;
           const product = await db.Product.findByPk(id);
           const image = req.file ? req.file.filename : product.image; 
     
           const productToUpdate = {
              name: req.body.name,
              price: req.body.price,
              description: req.body.description,
              image: image
           };
     
           await db.Product.update(productToUpdate, { where: { id } });
           res.redirect('/product');
        } catch (error) {
           console.log(error);
        }
     },

    delete: (req, res) => {
        let productId = req.params.id;
        db.Product.destroy({ where: { id: productId }, force: true })
            .then(() => {
                return res.redirect('/product')
            })
            .catch(error => res.send(error))
    }
}
module.exports = controller;