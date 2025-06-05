const Sequelize = require('sequelize');
const sequelize = require('../config/database');


const User = require('./User');
const Brand = require('./Brand');
const Phone = require('./Phone');
const PhoneSpecs = require('./PhoneSpecs');
const Watch = require('./Watch');
const WatchSpecs = require('./WatchSpecs');


Brand.belongsTo(User, { foreignKey: 'user_username' });
User.hasMany(Brand, { foreignKey: 'user_username' });

Phone.belongsTo(Brand, { foreignKey: 'brand_name' });
Brand.hasMany(Phone, { foreignKey: 'brand_name' });

PhoneSpecs.belongsTo(Phone, {
  foreignKey: 'phone_model',
  targetKey: 'model'
});
Phone.hasOne(PhoneSpecs, {
  foreignKey: 'phone_model',
  sourceKey: 'model'
});

Watch.belongsTo(Brand, {
  foreignKey: 'brand_name'
});
Brand.hasMany(Watch, {
  foreignKey: 'brand_name'
});

WatchSpecs.belongsTo(Watch, {
  foreignKey: 'watch_model',
  targetKey: 'model'
});
Watch.hasOne(WatchSpecs, {
  foreignKey: 'watch_model',
  sourceKey: 'model'
});

module.exports = {
  sequelize,
  Sequelize,
  User,
  Brand,
  Phone,
  PhoneSpecs,
  Watch,
  WatchSpecs,
};
