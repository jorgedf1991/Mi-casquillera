const path = require('path');
const fs = require('fs');
const db = require('../database/models');
const User = require('../database/models/User');

const user = db.User;
const product = db.Product;

const pathProduct = path.join(__dirname, '../data/productsData.json');

function getData() {
    return JSON.parse(fs.readFileSync(pathProduct, 'utf-8'));
}

const controller = {

    //prueba
    productDetail1: (req, res) => {
        const { id } = req.params;
        const productDetail = getData();
        const productId = productDetail.find(product => product.id === +id);
        res.render('productList', { productDetail });
        // res.render('beer');
    },

    //fin prueba

    productDetail: (req, res) => {
        const { id } = req.params;
        const productDetail = getData();
        const productId = productDetail.find(product => product.id === +id);
        //  res.render('productList', { productDetail });
        res.render('beer', { productId });
    },

    formCreate: (req, res) => {
        try {
            res.render('formCreate');
        } catch (error) {
            console.log(error);
        }
    },

    store: (req, res) => {

        const image = req.file ? req.file.filename : 'default-user-image.png';
        // const products = getData();
        // const newProduct = {
        //     id: products[products.length - 1].id + 1,
        //     name: req.body.name,
        //     price: req.body.price,
        //     description: req.body.description,
        //     image: image
        // }
        // products.push(newProduct);
        // fs.writeFileSync(pathProduct, JSON.stringify(products, null, ' '));
        // res.send(req.body);
        db.Product.create({
            name: req.body.name,
            price: req.body.price,
            description: req.body.description,
            image: image
        })
            .then(() => {
                res.redirect('/product');
            })
            .catch(error => res.send(error));

    },

    formEdit: (req, res) => {
        try {
            const { id } = req.params;
            const products = getData();
            const product = products.find(product => product.id === +id);
            res.render('productEdit', { product });
        } catch (error) {
            console.log(error);
        }
    },

    update: (req, res) => {
        const { id } = req.params;
        const products = getData();
        const productsIndex = products.findIndex(product => product.id === +id);
        const image = req.file ? req.file.filename : products[productsIndex].image;
        products[productsIndex] = {
            ...products[productsIndex],
            name: req.body.name,
            price: req.body.price,
            description: req.body.description,
            image: image
        }
        fs.writeFileSync(pathProduct, JSON.stringify(products, null, ' '));
        res.redirect('/product/details');
    },

    delete: (req, res) => {
        try {
            const { id } = req.params;
            const products = getData();
            const productsIndex = products.findIndex(product => product.id === +id);
            products.splice(productsIndex, 1);
            fs.writeFileSync(pathProduct, JSON.stringify(products, null, ' '));
            res.redirect('/product');
        } catch (error) {
            console.log(error);
        }
    }
}
module.exports = controller;