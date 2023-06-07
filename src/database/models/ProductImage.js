module.exports = (sequelize, dataTypes)=>{

    let alias = "ProductImages";
    let cols = {
        id : {
            type: dataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true 
        },
        
        url : {
            type: dataTypes.STRING(500),
            allowNull: false
        }
    };
    
        let config = {
            timestamps: false,
            // deleteAt: false,
            tableName: 'Product_images'
        };
    

    const ProductImage = sequelize.define(alias, cols, config);
    ProductImage.associate = function (models) {
        ProductImage.belongsTo(models.Product, { 
            as: "product",
            foreignKey: "product_images_id"
        })
    }
    
    return ProductImage;
}