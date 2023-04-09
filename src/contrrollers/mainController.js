const path = require('path');

const contrrollers = {

    home : (req, res) => {

        res.render('index');
        
    }
}

module.exports = contrrollers;