const express = require('express');
const router = express.Router();
const {
  getBrandById,
  getPhonesByBrand,
  getWatchesByBrand,
  createBrand,
  updateBrand,
  deleteBrand,
  getAllBrands,
} = require('../Controllers/brands');

router.get('/:id', getBrandById);

router.get('/:id/phones', getPhonesByBrand);

router.get('/:id/watches', getWatchesByBrand);

router.get('/', getAllBrands);

router.post('/', createBrand);

router.put('/:id', updateBrand);

router.delete('/:id', deleteBrand);

module.exports = router;