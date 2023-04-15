const path = require('path');
const fs = require('fs');

const pathProduct = path.join(__dirname, '../data/productsData.json');

function getData() {
    return JSON.parse(fs.readFileSync(pathProduct, 'utf-8'));
}

const controller = {

    productDetail : (req, res) =>{
        const productDetail = getData();
        res.render('productDetails', { productDetail });
    },

    formCreate: (req, res) => {
        try {
            res.render('formCreate');
        } catch (error) {
            console.log(error);
        }
    },

    store: (req, res) => {
        try {
            const image = req.file ? req.file.filename : 'default-user-image.png';
            const products = getData();
            const newProduct = {
                id: products[products.length - 1].id + 1,
                name: req.body.name,
                price: req.body.price,
                description: req.body.description,
                image: image
            }
            products.push(newProduct);
            fs.writeFileSync(pathProduct, JSON.stringify(products, null, ' '));
            res.redirect('/product/details');
        } catch (error) {
            console.log(error);
        }
    },
    formEdit: (req, res) => {
        try {
            const { id } = req.params;
            const products = getData();
            const productsId = products.find(product => product.id === +id);
            res.render('formEdit', { productsId });
        } catch (error) {
            console.log(error);
        }
    },
    update: (req, res) => {
        const { id } = req.params;
        const products = getData();
        const productsIndex = products.findIdenx(product => product.id === +id);
        const image = req.file ? req.file.filename : products[productsIndex].image;
        products[productsIndex] = {
            ...products[productsIndex],
            name: req.body.name,
            price: req.body.price,
            description: req.body.description,
            image: image
        }
        fs.writeFileSync(pathProduct, JSON.stringify(products, null, ' '));
        res.redirect('/detailsProduct');
    },

    delete: (req, res) => {
        try {
            const { id } = req.params;
            const products = getData();
            const productsIndex = products.findIdenx(product => product.id === +id);
            products.splice(productsIndex, 1);
            fs.writeFileSync(pathProduct, JSON.stringify(products, null, ' '));
            res.redirect('/details');
        } catch (error) {
            console.log(error);
        }
    }
}
module.exports = controller;