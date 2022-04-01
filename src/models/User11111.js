'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      this.belongsTo(models.Account, { 
        foreignKey: "account_id", as: "accounts" 
      });
      this.hasOne(models.User, { 
        foreignKey: "account_id", as:"accounts"
      });
    }
  };
  User.init({
    id: {
      type: DataTypes.UUIDV4,
      autoIncrement: true,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV1,
    },
    name: DataTypes.STRING,
    planLevel: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'user'
  });
  return User;
};