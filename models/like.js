'use strict';
module.exports = function(sequelize, DataTypes) {
  var like = sequelize.define('like', {
    tile: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return like;
};