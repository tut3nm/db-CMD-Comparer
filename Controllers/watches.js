const { Watch, WatchSpecs } = require('../models');

exports.getAllWatches = async (req, res) => {
  try {
    const watches = await Watch.findAll({
      include: { 
        model: WatchSpecs, 
        as: 'specs',
      }
    });
    res.json(watches);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getWatchById = async (req, res) => {
  try {
    const watch = await Watch.findByPk(req.params.id, {
      include: { 
        model: WatchSpecs, 
        as: 'specs',
      }
    });

    if (!watch) {
      return res.status(404).json({ message: 'Reloj no encontrado' });
    }

    res.json(watch);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createWatch = async (req, res) => {
  try {
    const { model, code, price, release_date, age, brand_id } = req.body;
    if (!model || !brand_id) {
      return res.status(400).json({ message: 'Modelo y brand_id son requeridos' });
    }

    const watch = await Watch.create({ 
      model, 
      code, 
      price, 
      release_date, 
      age, 
      brand_id 
    });
    
    res.status(201).json(watch);
  } catch (error) {
    if (error.name === 'SequelizeValidationError') {
      return res.status(400).json({ message: error.errors.map(e => e.message) });
    }
    res.status(500).json({ error: error.message });
  }
};

exports.updateWatch = async (req, res) => {
  try {
    const watch = await Watch.findByPk(req.params.id);
    if (!watch) return res.status(404).json({ message: 'Reloj no encontrado' });

    await watch.update(req.body);
    res.json(watch);
  } catch (error) {
    if (error.name === 'SequelizeValidationError') {
      return res.status(400).json({ message: error.errors.map(e => e.message) });
    }
    res.status(500).json({ error: error.message });
  }
};

exports.deleteWatch = async (req, res) => {
  try {
    const watch = await Watch.findByPk(req.params.id);
    if (!watch) return res.status(404).json({ message: 'Reloj no encontrado' });

    await watch.destroy();
    res.json({ message: 'Reloj eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};