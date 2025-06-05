const express = require('express');
const { sequelize } = require('./db-config');

const app = express();

app.use(express.json());
app.use('/api/brands', require('./routes/brands'));
app.use('/api/phones', require('./routes/phones'));
app.use('/api/watches', require('./routes/watches'));
app.use('/api/users', require('./routes/users'));

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Error interno del servidor' });
});

const PORT = process.env.PORT || 3000;

async function startServer() {
  try {
    await sequelize.authenticate();
    console.log('Conexión a SQLite establecida');
    
    app.listen(PORT, 'localhost', () => {
      console.log(`Servidor corriendo en http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Error al iniciar el servidor:', error);
    process.exit(1);
  }
}

startServer();