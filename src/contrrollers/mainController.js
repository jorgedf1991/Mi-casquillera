const path = require('path');
const db = require('../database/models');

const contrrollers = {

     home :  (req, res) => {
        try {
              db.Product.findAll()
              .then(products => {

                  res.render('index', { products })
              })
            
        } catch (error) {
         console.log(error);
         }
    },

     viewSomos : (req, res) => {

         res.render('quienesSomos');
        
     },
    contact: (req, res) => {
        res.render('viewsContact')
    }
}

module.exports = contrrollers;