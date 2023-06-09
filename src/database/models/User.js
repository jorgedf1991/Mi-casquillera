module.exports = (sequelize, dataTypes) => {

    let alias = "User";

    let cols = {
        id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },

        name: {
            type: dataTypes.STRING(500),
            allowNull: false
        },

        last_name: {
            type: dataTypes.STRING(500),
            allowNull: false
        },

        addres: {
            type: dataTypes.STRING(500),
            allowNull: false
        },

        avatar: {
            type: dataTypes.STRING(500),
            allowNull: false
        },

        email: {
            type: dataTypes.STRING(500),
            allowNull: false
        },

        password: {
            type: dataTypes.STRING(500),
            allowNull: false
        }
    };

    let config = {
        timestamps: false,
        // deleteAt: false,
        tableName: 'users'
    };


    const User = sequelize.define(alias, cols, config);

    User.associate = function (models) {
        User.belongsTo(models.Rol, {
            as: "roles",
            foreignKey: "roles_id"
        })
    }



    return User;
}