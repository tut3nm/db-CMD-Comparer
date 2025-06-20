const { Watch, WatchSpecs } = require('../models');

exports.getWatchSpecs = async (req, res) => {
  try {
    const specs = await WatchSpecs.findOne({ where: { watch_id: req.params.watchId } });
    if (!specs) return res.status(404).json({ message: 'Especificaciones no encontradas' });
    res.json(specs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createWatchSpecs = async (req, res) => {
  try {
    const watch = await Watch.findByPk(req.params.watchId);
    if (!watch) return res.status(404).json({ message: 'Reloj no encontrado' });

    const existingSpecs = await WatchSpecs.findOne({ where: { watch_id: req.params.watchId } });
    if (existingSpecs) return res.status(400).json({ message: 'Este reloj ya tiene especificaciones' });

    const specs = await WatchSpecs.create({ ...req.body, watch_id: req.params.watchId });
    res.status(201).json(specs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateWatchSpecs = async (req, res) => {
  try {
    const specs = await WatchSpecs.findOne({ where: { watch_id: req.params.watchId } });
    if (!specs) return res.status(404).json({ message: 'Especificaciones no encontradas' });

    await specs.update(req.body);
    res.json(specs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteWatchSpecs = async (req, res) => {
  try {
    const specs = await WatchSpecs.findOne({ where: { watch_id: req.params.watchId } });
    if (!specs) return res.status(404).json({ message: 'Especificaciones no encontradas' });

    await specs.destroy();
    res.json({ message: 'Especificaciones eliminadas' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};