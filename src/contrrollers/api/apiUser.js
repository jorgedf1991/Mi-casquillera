const path = require('path');
const fs = require('fs');
const db = require('../../database/models');
const Op = db.Sequelize.Op;


const userAPIController = {
    'user': (req, res) => {
        db.User.findAll({})
            .then(user => {
                let respuesta = {
                    meta: {
                        status: 200,
                        total: user.length,
                        url: 'api/user'
                    },
                    data: user
                }
                res.json(respuesta);
            })
    },

    'detail': (req, res) => {
        db.User.findByPk(req.params.id,)
            .then(user => {
                let respuesta = {
                    meta: {
                        status: 200,
                        total: user.length,
                        url: 'api/user/:id'
                    },
                    data: user
                }
                res.json(respuesta);
            });
    },
    'search': (req, res) => {
        db.User
            .findAll({
                where: {
                    name: { [Op.like]: '%' + req.query.keyword + '%' }
                }
            })
            .then(user => {
                return res.status(200).json(user);
            })
    }


}

module.exports = userAPIController;