const path = require('path');
const db = require('../database/models');

const controllers = {

    

    cart : (req, res) => {

        res.render('cart');
        
    }
}

module.exports = controllers;