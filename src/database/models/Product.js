module.exports = (sequelize, dataTypes)=>{

    let alias = "Product";
    let cols = {
        id : {
            type: dataTypes.BIGINT(10).UNSIGNED,
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
            timestamps: false,
            tableName: 'products',
            deleteAt: false
        };
    

    const Product = sequelize.define(alias, cols, config);

    Product.associate = function (models) {
        Product.belongsTo(models.Category, { 
            as: "categories",
            foreignKey: "categories_id"
        })
    }
    
    return Product;
}