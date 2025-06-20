const { Phone, PhoneSpecs } = require('../models');

exports.getAllPhones = async (req, res) => {
  try {
    const phones = await Phone.findAll({
      include: { 
        model: PhoneSpecs, 
        as: 'specs',
      }
    });
    res.json(phones);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getPhoneById = async (req, res) => {
  try {
    const phone = await Phone.findByPk(req.params.id, {
      include: { 
        model: PhoneSpecs, 
        as: 'specs',
      }
    });

    if (!phone) {
      return res.status(404).json({ message: 'Teléfono no encontrado' });
    }

    res.json(phone);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createPhone = async (req, res) => {
  try {
    const { model, code, price, release_date, age, brand_id } = req.body;

    if (!model || !brand_id) {
      return res.status(400).json({ message: 'Modelo y brand_id son requeridos' });
    }

    const phone = await Phone.create({ 
      model, 
      code, 
      price, 
      release_date, 
      age, 
      brand_id 
    });
    
    res.status(201).json(phone);
  } catch (error) {
    if (error.name === 'SequelizeValidationError') {
      return res.status(400).json({ message: error.errors.map(e => e.message) });
    }
    res.status(500).json({ error: error.message });
  }
};

exports.updatePhone = async (req, res) => {
  try {
    const phone = await Phone.findByPk(req.params.id);
    if (!phone) return res.status(404).json({ message: 'Teléfono no encontrado' });

    await phone.update(req.body);
    res.json(phone);
  } catch (error) {
    if (error.name === 'SequelizeValidationError') {
      return res.status(400).json({ message: error.errors.map(e => e.message) });
    }
    res.status(500).json({ error: error.message });
  }
};

exports.deletePhone = async (req, res) => {
  try {
    const phone = await Phone.findByPk(req.params.id);
    if (!phone) return res.status(404).json({ message: 'Teléfono no encontrado' });

    await phone.destroy();
    res.json({ message: 'Teléfono eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};