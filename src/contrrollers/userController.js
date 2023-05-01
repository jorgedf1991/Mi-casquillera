const { validationResult } = require('express-validator');
const fs = require('fs');
const path = require('path');
const bcrypt = require('bcryptjs');
const fetch = require('node-fetch');


const userFilePath = path.join(__dirname, '../data/usersData.json');
function getData() {
    return JSON.parse(fs.readFileSync(userFilePath, 'utf-8'));
}

const contrrollers = {

    form:  (req, res) => {
        fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(countries => {
           return res.render('formRegister', { countries });
        })

    },

    create: async (req, res) => {
        const errors = validationResult(req);
        const users = getData();
        const countries = await fetch('https://restcountries.com/v3.1/all').then(response => response.json());
        if(errors.isEmpty()){
            const existingUser = users.find(user => user.email === req.body.email);
            if(existingUser){
                return res.render('formRegister', {
                  countries,
                    errors : {
                         email: {
                             msg: "El email ya se encuentra registrado" 
                            } 
                        }, oldData: req.body 
                    });
            } else {
                const image = req.file ? req.file.filename : 'default-user-image.png';
                const passEncriptada = bcrypt.hashSync(req.body.password, 10)
                const newUser = {
                    id: users[users.length - 1].id + 1,
                    name: req.body.name,
                    password: passEncriptada,
                    email: req.body.email,
                    country: req.body.select,
                    image: image
                };
                users.push(newUser);
            fs.writeFileSync(userFilePath, JSON.stringify(users, null, ' '));
            res.redirect('/user/listUser');
            }
        }else{
            res.render('formRegister', {
                 errors: errors.mapped(),
                  oldData: req.body,
                  countries
                });
        }
    },

    listUsers: (req, res) => {
        const users= getData();
        res.render('listUsers', { users })
    },

    loginProcces : (req, res) =>{
        let user = getData();
        let userToLogin = user.find(user => user.email === req.body.email);
        if(userToLogin){
            let passwordCorrect = bcrypt.compareSync(req.body.password, userToLogin.password);
            if(passwordCorrect){
                delete userToLogin.password;
                req.session.userLogged = userToLogin;
                console.log(req.session);
                return res.render('index')
            }
            return res.render('index', {
                errors : {
                    email : {
                        msg : 'Datos incorrectos'
                    }
                }
            })
        }

        return res.render('index', {
            errors : {
                email : {
                    msg : 'Email incorrecto'
                }
            }
        })
    },

    logout : (req, res) => {
        req.session.destroy();
      return  res.redirect('/');
    }
}

module.exports = contrrollers;