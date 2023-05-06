'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable('users',{ 
      id: {
        type: Sequelize.INTEGER,
      autoIncrement: true,
    primaryKey: true 
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      last_name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      addres : {
        type: Sequelize.STRING,
        allowNull: false
      },
      avatar: {
        type: Sequelize.STRING,

      },
      email: {
        type: Sequelize.STRING,
        allowNull: false
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false
        },
        roles_id: {
          type: Sequelize.INTEGER,
          references: {
            model: 'roles',
            key: 'id'
          }
        },
        countries_id: {
          type: Sequelize.INTEGER,
          references: {
            model: 'countries',
            key: 'id'
          }
        }
      
  });
},
  
  

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('users');
  }
};
