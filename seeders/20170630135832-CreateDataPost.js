'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('posts', [
      {
        title: "OMG",
        body: "Petnuia, you have the most beautiful toe-feathers!!",
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
        title: "out of water",
        body: "If you're the one to finish the water, please refill it...",
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
        title: "COMPOST",
        body: "COMPOST COMPOST COMPOST HERE COMES THE COMPOST RUN AS FAST AS YOU CAN TO GET THE COMPOST",
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
