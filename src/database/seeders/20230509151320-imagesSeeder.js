'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('product_images', [
      {
         url: 'salamera.jpeg'
         
       },
       {
        url: 'calentona.jpeg'
        
      },
      {
        url: 'asolapada.jpeg'
        
      },
      {
        url: 'arrabalera.jpeg'
        
      },
      {
        url: 'melosa.jpeg'
        
      },
      {
        url: 'todera.jpeg'
        
      }], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('product_images', null, {});
  }
};
