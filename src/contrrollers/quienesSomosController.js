const path = require('path');

const contrrollers = {

    home : (req, res) => {

        res.render('quienesSomos');
        
    }
}

module.exports = contrrollers;