const express = require('express');
const router = express.Router();
const {
  getToken,
  updateAccess,
  deleteUser,
  createUser,
  getAllUsers,
} = require('../Controllers/users');

router.get('/:userid/token', getToken);

router.put('/:id/access', updateAccess);

router.delete('/:id', deleteUser);

router.post('/', createUser);

router.get('/', getAllUsers);

module.exports = router;