const express = require('express');
const router = express.Router();
const {
  getWatchById,
  getAllWatches,
  createWatch,
  updateWatch,
  deleteWatch
} = require('../Controllers/watches');

router.get('/', getAllWatches);

router.get('/:id', getWatchById);

router.post('/', createWatch);

router.put('/:id', updateWatch);

router.delete('/:id', deleteWatch);

module.exports = router;