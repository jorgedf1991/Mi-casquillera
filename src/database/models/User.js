module.exports = (sequelize, dataTypes)=>{

    let alias = "User";
    let cols = {
        id : {
            type: dataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true 
        },
        
        name : {
            type: dataTypes.STRING(500),
            allowNull: false
        },

        last_name : {
            type: dataTypes.STRING(500),
            allowNull: false
        },
        
        addres : {
            type: dataTypes.STRING(500),
            allowNull: false
        },

        avatar : {

        },

        email : {
            type: dataTypes.STRING(500),
            allowNull: false
        },
        
        password : {
            type: dataTypes.STRING(500),
            allowNull: false
        }
    };
    
        let config = {
            timestamps: true,
            createdAt: 'created_at',
            updatedAt: 'updated_at',
            tableName: 'user'
        };
    

    const User = sequelize.define(alias, cols, config);
}