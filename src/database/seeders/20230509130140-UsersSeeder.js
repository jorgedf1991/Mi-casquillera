'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('users', [{
      name: 'Jorge',
      last_name: 'Diaz',
      addres: 'calle 14',
      avatar: 'default-user-image.png',
      email: 'jorgeldiaz@gmail.com',
      password: '123456789',
      roles_id: 2,
      countries_id: 2
    },
    {
      name: 'Mayerly',
      last_name: 'Carrillo',
      addres: 'Avenida 14',
      avatar: 'default-user-image.png',
      email: 'jorgeldiaz@gmail.com',
      password: '1234567890',
      roles_id: 2,
      countries_id: 2

    }], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('users', null, {});
  }
};
