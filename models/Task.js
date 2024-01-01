'use strict';
module.exports = (sequelize, DataTypes) => {
 const Task = sequelize.define('Task', {
    name: DataTypes.STRING,
    completed: DataTypes.BOOLEAN
 }, {});
 Task.associate = function(models) {
    Task.belongsTo(models.List, {
      foreignKey: 'listId',
      as: 'list',
    });
    Task.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'user',
    });
 };
 return Task;
};