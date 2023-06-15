const path = require('path');
const db = require('../database/models');

const contrrollers = {

    // home : async (req, res) => {
    //     try {
    //         const products = await db.findAll()
    //         res.render('index', { products })
            
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    home : (req, res) => {

        res.render('index');
        
    },
    contact: (req, res) => {
        res.render('viewsContact')
    }
}

module.exports = contrrollers;