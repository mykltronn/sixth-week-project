'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.addColumn(
      'posts',
      'likeId',
      {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "likes",
          key: "id"
        }
      }
    )
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.removeColumn(
      'comments',
      'likeId'
    )
  }
};
