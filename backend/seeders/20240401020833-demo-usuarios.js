'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.bulkInsert('Usuarios', [
      {
      nombre: 'Rene',
      correo: 'reneyahirrodriguezrobledo@gmail.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nombre: 'Pedro',
      correo: 'pedrogomeztinoco@gmail.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  
  
  ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Usuarios', null, {});
  }
};
