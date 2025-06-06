const { sequelize } = require('./db-config');
const models = require('./models');

async function initDB() {
  try {
    await sequelize.sync({ force: false });
    console.log('Base de datos inicializada');
  } catch (error) {
    console.error('Error al inicializar DB:', error);
  }
}

initDB();