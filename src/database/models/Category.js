
module.exports = (sequelize, dataTypes)=>{

    let alias = "Category";
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
        }
    };
    
        let config = {
            timestamps: true,
            createdAt: 'created_at',
            updatedAt: 'updated_at',
            tableName: 'Categories'
        };
    

    const Category = sequelize.define(alias, cols, config);

   
    
    return Category;
}