const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Phone = sequelize.define('Phone', {
  model: {
    type: DataTypes.STRING,
    primaryKey: true
  },
  code: {
    type: DataTypes.STRING,
    allowNull: false
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  release_date: {
    type: DataTypes.STRING,
    allowNull: false
  },
  brand_name: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  price: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'phone',
  timestamps: false
});

module.exports = Phone;
