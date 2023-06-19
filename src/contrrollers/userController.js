const { validationResult } = require('express-validator');

const bcrypt = require('bcryptjs');
const fetch = require('node-fetch');

const db = require('../database/models');


const contrrollers = {
    userProfile: (req, res) => {
      console.log(req.cookies.userEmail);
        res.render('userProfile', {
            user: req.session.userLogged
        })
    },

    form: (req, res) => {
        fetch('https://restcountries.com/v3.1/all')
            .then(response => response.json())
            .then(countries => {
                return res.render('formUserRegister', { countries });
            })

    },

    create: async (req, res) => {
        const errors = validationResult(req);
        const userExisting = await db.User.findOne({ where: { email: req.body.email } });
        const countries = await fetch('https://restcountries.com/v3.1/all').then(response => response.json());
      
        if (errors.isEmpty()) {
          if (userExisting) {
            return res.render('formUserRegister', {
              countries,
              errors: {
                email: {
                  msg: "El email ya se encuentra registrado"
                }
              },
              oldData: req.body
            });
          } else {
            const image = req.file ? req.file.filename : 'default-user-image.png';
            const passEncriptada = bcrypt.hashSync(req.body.password, 10)
            const newUser = {
              name: req.body.name,
              password: passEncriptada,
              email: req.body.email,
              addres: req.body.select,
              last_name : req.body.last_name,
              avatar: image
            };
            
            await db.User.create(newUser);
            res.redirect('/user/listUser');
          }
        } else {
          res.render('formUserRegister', {
            errors: errors.mapped(),
            oldData: req.body,
            countries
          });
        }
      }
   
    ,

    listUsers: async (req, res) => {
        const users = await db.User.findAll();
        res.render('listUsers', { users })
    },

    login: (req, res) => {
        res.render('formLogin')
    },

    loginProcces: async (req, res) => {
        try {
          const user = await db.User.findOne({ where: { email: req.body.email } });
      
          if (user) {
            const passwordCorrect = bcrypt.compareSync(req.body.password, user.password);
            
            if (passwordCorrect) {
              delete user.password;
              req.session.userLogged = user;
              // if(req.body.remember_user){
              //   res.cookie('userEmail', req.body.email, { maxAge : (1000 * 60 * 2)})
              // }
              return res.redirect('/user/perfil');
            }
          }
      
          return res.render('formLogin', {
            errors: {
              email: {
                msg: 'Datos incorrectos'
              }
            }
          });
        } catch (error) {
          console.log(error);
          res.render('formLogin', {
            errors: {
              email: {
                msg: 'Error al intentar iniciar sesión'
              }
            }
          });
        }
      }
    ,

    logout: (req, res) => {
      res.clearCookie('userEmail')
        req.session.destroy();
        return res.redirect('/');
    }
}

module.exports = contrrollers;