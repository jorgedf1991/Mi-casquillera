'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable('products', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false
      },
      price: {
        type: Sequelize.DECIMAL(11, 2),
        allowNull: false
      },
      discount: {
        type: Sequelize.INTEGER
      },
      product_categories_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'product_categories',
          key: 'id'
        }
      },
      product_images_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'product_images',
          key: 'id'

        }
      }
    });
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('products');
  }
};
