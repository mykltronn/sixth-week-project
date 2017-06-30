'use strict';
module.exports = function(sequelize, DataTypes) {
  var post = sequelize.define('post', {
    title: DataTypes.STRING,
    body: DataTypes.TEXT
  }, {});





  return post;
};
