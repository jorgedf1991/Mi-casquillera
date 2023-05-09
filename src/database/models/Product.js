module.exports = (sequelize, dataTypes)=>{

    let alias = "Product";
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

        description : {
            type: dataTypes.STRING(500),
            allowNull: false
        },
        
        price : {
            type: dataTypes.DECIMAL(3, 1).UNSIGNED,
            allowNull: false
        }
    };
    
        let config = {
            timestamps: true,
            createdAt: 'created_at',
            updatedAt: 'updated_at',
            tableName: 'product'
        };
    

    const Product = sequelize.define(alias, cols, config);

    Product.associate = function (models) {
        User.belongsTo(models.categories, { 
            as: "categories",
            foreignKey: "categories_id"
        })
    }
    
    return Product;
}