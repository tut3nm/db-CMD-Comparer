const { sequelize, Sequelize } = require('../db');
const DataTypes = Sequelize.DataTypes;

const models = {
  User: require('./User')(sequelize, DataTypes),
  Brand: require('./Brand')(sequelize, DataTypes),
  Phone: require('./Phone')(sequelize, DataTypes),
  PhoneSpecs: require('./Phone_Specs')(sequelize, DataTypes),
  Watch: require('./Watch')(sequelize, DataTypes),
  WatchSpecs: require('./Watch_Specs')(sequelize, DataTypes)
};

models.Phone.belongsTo(models.Brand, {
  foreignKey: 'brand_id',
  as: 'brand'
});

models.Brand.hasMany(models.Phone, {
  foreignKey: 'brand_id',
  as: 'phones'
});

models.PhoneSpecs.belongsTo(models.Phone, {
  foreignKey: 'phone_id',
  as: 'phone'
});

models.Phone.hasOne(models.PhoneSpecs, {
  foreignKey: 'phone_id',
  as: 'specs'
});

models.Watch.belongsTo(models.Brand, {
  foreignKey: 'brand_id',
  as: 'brand'
});

models.Brand.hasMany(models.Watch, {
  foreignKey: 'brand_id',
  as: 'watches'
});

models.WatchSpecs.belongsTo(models.Watch, {
  foreignKey: 'watch_id',
  as: 'watch'
});

models.Watch.hasOne(models.WatchSpecs, {
  foreignKey: 'watch_id',
  as: 'specs'
});

module.exports = {
  ...models,
  sequelize,
  Sequelize
};