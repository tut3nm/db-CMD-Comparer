const { Brand, Phone, Watch} = require('../models');


exports.getBrandById = async (req, res) => {
  try {
    const brand = await Brand.findByPk(req.params.id);
    if (!brand) return res.status(404).json({ message: 'Marca no encontrada' });
    res.json(brand);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


exports.getPhonesByBrand = async (req, res) => {
  try {
    const phones = await Phone.findAll({ where: { brand_id: req.params.id } });
    res.json(phones);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


exports.getWatchesByBrand = async (req, res) => {
  try {
    const watches = await Watch.findAll({ where: { brand_id: req.params.id } })
    res.json(watches);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAllBrands = async (req, res) => {
  try {
    const brands = await Brand.findAll();
    res.json(brands);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getBrandById = async (req, res) => {
  try {
    const brand = await Brand.findByPk(req.params.id);
    if (!brand) {
      return res.status(404).json({ message: 'Marca no encontrada' });
    }
    res.json(brand);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createBrand = async (req, res) => {
  try {
    const { name } = req.body;
    
    if (!name) {
      return res.status(400).json({ message: 'El nombre es requerido' });
    }

    const brand = await Brand.create({ name });
    res.status(201).json(brand);
  } catch (error) {
    if (error.name === 'SequelizeUniqueConstraintError') {
      res.status(400).json({ message: 'Esta marca ya existe' });
    } else {
      res.status(500).json({ error: error.message });
    }
  }
};

exports.updateBrand = async (req, res) => {
  try {
    const brand = await Brand.findByPk(req.params.id);
    if (!brand) {
      return res.status(404).json({ message: 'Marca no encontrada' });
    }

    const { name } = req.body;
    if (!name) {
      return res.status(400).json({ message: 'El nombre es requerido' });
    }

    await brand.update({ name });
    res.json(brand);
  } catch (error) {
    if (error.name === 'SequelizeUniqueConstraintError') {
      res.status(400).json({ message: 'Esta marca ya existe' });
    } else {
      res.status(500).json({ error: error.message });
    }
  }
};

exports.deleteBrand = async (req, res) => {
  try {
    const brand = await Brand.findByPk(req.params.id);
    if (!brand) {
      return res.status(404).json({ message: 'Marca no encontrada' });
    }

    await brand.destroy();
    res.json({ message: 'Marca eliminada correctamente' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
