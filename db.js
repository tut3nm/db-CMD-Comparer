const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('mydb', 'root', 'contraseña', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;