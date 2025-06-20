const { Phone, PhoneSpecs } = require('../models');

exports.getPhoneSpecs = async (req, res) => {
  try {
    const specs = await PhoneSpecs.findOne({ where: { phone_id: req.params.phoneId } });
    if (!specs) return res.status(404).json({ message: 'Especificaciones no encontradas' });
    res.json(specs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createPhoneSpecs = async (req, res) => {
  try {
    const phone = await Phone.findByPk(req.params.phoneId);
    if (!phone) return res.status(404).json({ message: 'Teléfono no encontrado' });

    const existingSpecs = await PhoneSpecs.findOne({ where: { phone_id: req.params.phoneId } });
    if (existingSpecs) return res.status(400).json({ message: 'Este teléfono ya tiene especificaciones' });

    const specs = await PhoneSpecs.create({ ...req.body, phone_id: req.params.phoneId });
    res.status(201).json(specs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updatePhoneSpecs = async (req, res) => {
  try {
    const specs = await PhoneSpecs.findOne({ where: { phone_id: req.params.phoneId } });
    if (!specs) return res.status(404).json({ message: 'Especificaciones no encontradas' });

    await specs.update(req.body);
    res.json(specs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deletePhoneSpecs = async (req, res) => {
  try {
    const specs = await PhoneSpecs.findOne({ where: { phone_id: req.params.phoneId } });
    if (!specs) return res.status(404).json({ message: 'Especificaciones no encontradas' });

    await specs.destroy();
    res.json({ message: 'Especificaciones eliminadas' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};