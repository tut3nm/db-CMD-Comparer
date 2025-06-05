const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Brand = sequelize.define('Brand', {
  name: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  devices: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  brandcol: {
    type: DataTypes.STRING(45),
    allowNull: true
  },
  user_username: {
    type: DataTypes.CHAR(20),
    allowNull: false
  }
}, {
  tableName: 'brand',
  timestamps: false
});

module.exports = Brand;
