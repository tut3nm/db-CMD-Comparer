const { sequelize, Sequelize } = require('../db-config');
const DataTypes = Sequelize.DataTypes;

// Importar modelos
const User = require('./User')(sequelize, DataTypes);
const Brand = require('./Brand')(sequelize, DataTypes);
const Phone = require('./Phone')(sequelize, DataTypes);
const PhoneSpecs = require('./PhoneSpecs')(sequelize, DataTypes);
const Watch = require('./Watch')(sequelize, DataTypes);
const WatchSpecs = require('./WatchSpecs')(sequelize, DataTypes);

// 🔹 Relaciones
// 1. Phone ↔ Brand (Marca tiene muchos teléfonos)
Brand.hasMany(Phone, { foreignKey: 'brand_id', as: 'phones' });
Phone.belongsTo(Brand, { foreignKey: 'brand_id', as: 'brand' });

// 2. Phone ↔ PhoneSpecs (1:1)
Phone.hasOne(PhoneSpecs, { foreignKey: 'phone_id', as: 'specs' });
PhoneSpecs.belongsTo(Phone, { foreignKey: 'phone_id', as: 'phone' });

// 3. Watch ↔ Brand (Marca tiene muchos relojes)
Brand.hasMany(Watch, { foreignKey: 'brand_id', as: 'watches' });
Watch.belongsTo(Brand, { foreignKey: 'brand_id', as: 'brand' });

// 4. Watch ↔ WatchSpecs (1:1)
Watch.hasOne(WatchSpecs, { foreignKey: 'watch_id', as: 'specs' });
WatchSpecs.belongsTo(Watch, { foreignKey: 'watch_id', as: 'watch' });

// Exportar modelos + Sequelize
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