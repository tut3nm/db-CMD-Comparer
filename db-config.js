const { Sequelize } = require('sequelize');
const path = require('path');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: path.join(__dirname, 'database.sqlite'),
  logging: console.log,
});

async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('Conexión exitosa a SQLite');
    await new Promise(resolve => setTimeout(resolve, 2000)); 
  } catch (error) {
    console.error('Error de conexión:', error);
  } finally {
    await sequelize.close();
  }
}

testConnection()
  .then(() => console.log('Prueba completada'))
  .catch(console.error);