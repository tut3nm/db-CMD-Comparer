const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('db-cmd', 'root', 'UTN1234SanFco', {
  host: '34.95.159.240',
  dialect: 'mysql',
  port: 3306,
  logging: false,
});

async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('Conexión a la DB establecida');
    return true;
  } catch (error) {
    console.error('Error de conexión a la DB:', error);
    return false;
  }
}

testConnection()

module.exports = {
  sequelize,
  Sequelize,
  testConnection
};