const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const User = sequelize.define('User', {
  username: {
    type: DataTypes.STRING,
    primaryKey: true
  },
  userpass: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  birthday: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  permissions: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  }
}, {
  tableName: 'user',
  timestamps: false
});

module.exports = User;
