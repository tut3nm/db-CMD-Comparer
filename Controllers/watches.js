const { Watch, WatchSpecs } = require('../models');

exports.getWatchById = async (req, res) => {
  try {
    const watch = await Watch.findByPk(req.params.id, { include: WatchSpecs });
    if (!watch) return res.status(404).json({ message: 'Reloj no encontrado' });
    res.json(watch);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAllWatches = async (req, res) => {
  try {
    const watches = await Watch.findAll({ include: WatchSpecs });
    res.json(watches);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createWatch = async (req, res) => {
  try {
    const { model, code, price, release_date, age, specs } = req.body;

    const watch = await Watch.create({ model, code, price, release_date, age });
    const watchSpecs = await WatchSpecs.create({ ...specs, watch_id: watch.id })

    res.status(201).json({ watch, watchSpecs });
  } catch (error) {
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
    res.status(500).json({ error: error.message });
  }
};

exports.deleteWatch = async (req, res) => {
  try {
    const watch = await Watch.findByPk(req.params.id);
    if (!watch) return res.status(404).json({ message: 'Reloj no encontrado' });

    await watch.destroy();
    res.json({ message: 'Reloj eliminado' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
