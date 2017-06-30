'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('user', [
      {
        username: "Petunia",
        password: "password",
        createdAt: Date.now(),
        updatedAt: Date.now()
      },
      {
        username: "Lavergne",
        password: "password",
        createdAt: Date.now(),
        updatedAt: Date.now()
      }
      {
        username: "Mrs. Pibb",
        password: "password",
        createdAt: Date.now(),
        updatedAt: Date.now()
      },
      {
        username: "Tabitha",
        password: "password",
        createdAt: Date.now(),
        updatedAt: Date.now()
      },
      {
        username: "Henny",
        password: "password",
        createdAt: Date.now(),
        updatedAt: Date.now()
      },

  ], {});



  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('')
  }
};
