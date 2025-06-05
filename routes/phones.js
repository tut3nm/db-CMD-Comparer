const express = require('express');
const router = express.Router();
const {
  getPhoneById,
  getAllPhones,
  createPhone,
  updatePhone,
  deletePhone
} = require('../Controllers/phones');

router.get('/', getAllPhones);

router.get('/:id', getPhoneById);

router.post('/', createPhone);

router.put('/:id', updatePhone);

router.delete('/:id', deletePhone);

module.exports = router;