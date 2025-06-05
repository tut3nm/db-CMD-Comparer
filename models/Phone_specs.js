const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const PhoneSpecs = sequelize.define('PhoneSpecs', {
  phone_specs: {
    type: DataTypes.STRING,
    primaryKey: true
  },
  cams: DataTypes.STRING,
  chipset: DataTypes.STRING,
  display_tec: DataTypes.STRING,
  display_inch: DataTypes.FLOAT,
  display_freq: DataTypes.INTEGER,
  batery: DataTypes.INTEGER,
  os: DataTypes.TEXT,
  ram: DataTypes.INTEGER,
  storage: DataTypes.INTEGER,
  dimensions: DataTypes.STRING,
  weight: DataTypes.INTEGER,
  video_specs: DataTypes.TEXT,
  calification: DataTypes.FLOAT,
  phone_model: {
    type: DataTypes.STRING,
    allowNull: false
  },
  phone_brand_name: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  tableName: 'phone_specs',
  timestamps: false
});

module.exports = PhoneSpecs;
