const { Sequelize } = require('sequelize');

// Option 1: Passing a connection URI
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage:'db-mysql.sql',
  logQueryParameters: true,
  benchmark:true,
  }) // Example for sqlite

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