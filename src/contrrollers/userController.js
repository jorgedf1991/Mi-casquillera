const { validationResult } = require('express-validator');
const fs = require('fs');
const path = require('path');
const bcrypt = require('bcryptjs');



const userFilePath = path.join(__dirname, '../data/usersData.json');
function getData() {
    return JSON.parse(fs.readFileSync(userFilePath, 'utf-8'));
}

const contrrollers = {

    form: (req, res) => {

        res.render('formRegister');

    },
    create: (req, res) => {
        const image = req.file ? req.file.filename : 'default-user-image.png';
        const passEncriptada = bcrypt.hashSync(req.body.password, 10)
        const users = getData();
        const newUser = {
            id: users[users.length - 1].id + 1,
            name: req.body.name,
            password: passEncriptada,
            email: req.body.email,
            country: req.body.select,
            image: image
        }
        users.push(newUser);
        fs.writeFileSync(userFilePath, JSON.stringify(users, null, ' '));
        res.redirect('/user/listUser');

    },

    listUsers: (req, res) => {
        const users= getData();
        res.render('listUsers', { users })
    }
}

module.exports = contrrollers;