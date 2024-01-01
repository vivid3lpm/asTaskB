'use strict';
module.exports = (sequelize, DataTypes) => {
 const List = sequelize.define('List', {
    name: DataTypes.STRING
 }, {});
 List.associate = function(models) {
    List.hasMany(models.Task, {
      foreignKey: 'listId',
      as: 'tasks',
    });
    List.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'user',
    });
 };
 return List;
};