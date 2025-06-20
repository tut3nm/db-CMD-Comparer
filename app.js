const express = require('express');
const { sequelize } = require('./db-config');
const cors = require('cors');

const app = express();
app.get('/', (req, res) => {
  res.send('¡Bienvenido a la API!');
});
app.use(cors());
app.use(express.json());
app.use('/api/brands', require('./routes/brands'));
app.use('/api/phoneSpecs', require('./routes/phoneSpecs'));
app.use('/api/phones', require('./routes/phones'));
app.use('/api/watches', require('./routes/watches'));
app.use('/api/watchSpecs', require('./routes/watchSpecs'))
app.use('/api/users', require('./routes/users'));


const PORT = process.env.PORT || 3000;
async function startServer() {
  try {
    await sequelize.authenticate();
    console.log('Conexión a SQLite establecida');
    
    await sequelize.sync({ force: false });
  
    
  } catch (error) {
    console.error('Error al iniciar:', error);
  }
  app.listen(PORT);
}

startServer();