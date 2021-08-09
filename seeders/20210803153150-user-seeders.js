'use strict';
const bcrypt = require('bcrypt');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    await queryInterface.bulkInsert('users', [
      {
        name: "Mala",
        profession: "Admin Micro",
        role: "admin",
        email: "nusari.mala@gmail.com",
        password: await bcrypt.hash('rahasia123', 10),
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: "Hendi",
        profession: "Backend Engineer",
        role: "student",
        email: "rusfandi.hendi@gmail.com",
        password: await bcrypt.hash('Rahasia!23', 10),
        created_at: new Date(),
        updated_at: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  }
};
