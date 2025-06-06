const { sequelize, Sequelize } = require('../db-config');
const DataTypes = Sequelize.DataTypes;

const userModel = require('./User');
const brandModel = require('./Brand');
const phoneModel = require('./Phone');
const phoneSpecsModel = require('./PhoneSpecs');
const watchModel = require('./Watch');
const watchSpecsModel = require('./WatchSpecs');

const User = userModel(sequelize, DataTypes);
const Brand = brandModel(sequelize, DataTypes);
const Phone = phoneModel(sequelize, DataTypes);
const PhoneSpecs = phoneSpecsModel(sequelize, DataTypes);
const Watch = watchModel(sequelize, DataTypes);
const WatchSpecs = watchSpecsModel(sequelize, DataTypes);

Brand.hasMany(Phone, { foreignKey: 'brand_id', as: 'phones' });

Phone.belongsTo(Brand, { foreignKey: 'brand_id', as: 'brand' });

Phone.hasOne(PhoneSpecs, { foreignKey: 'phone_id', as: 'specs' });

PhoneSpecs.belongsTo(Phone, { foreignKey: 'phone_id', as: 'phone' });

Brand.hasMany(Watch, { foreignKey: 'brand_id', as: 'watches' });

Watch.belongsTo(Brand, { foreignKey: 'brand_id', as: 'brand' });

Watch.hasOne(WatchSpecs, { foreignKey: 'watch_id', as: 'specs' });

WatchSpecs.belongsTo(Watch, { foreignKey: 'watch_id', as: 'watch' });

module.exports = {
  sequelize,
  Sequelize,
  User,
  Brand,
  Phone,
  PhoneSpecs,
  Watch,
  WatchSpecs
};