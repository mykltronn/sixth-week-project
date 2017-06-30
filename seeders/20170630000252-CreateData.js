'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('User', [
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
  return queryInterface.bulkInsert('User', [
    {
      title: "OMG",
      body: "Petnuia, you have the most beautiful feathers on your toes!",
      createdAt: Date.now(),
      updatedAt: Date.now()
    },
    {
      title: "Squirrels",
      body: "I don't know if anybody noticed, but the squirrels are back and they've eaten half my breakfast.",
      createdAt: Date.now(),
      updatedAt: Date.now()
    }
    {
      title: "",
      body: "",
      createdAt: Date.now(),
      updatedAt: Date.now()
    },
    {
      title: "squirrels again",
      body: "I was just minding my own business, taking a dirt bath, and that damn squirrel up and stole my dinner!",
      createdAt: Date.now(),
      updatedAt: Date.now()
    },
    {
      title: "",
      body: "",
      createdAt: Date.now(),
      updatedAt: Date.now()
    }

], {});


  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
