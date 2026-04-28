// Import
const express = require('express');
const router = express.Router();
const { register } = require('../Controllers/auth');

// Resgister
router.get('/register', register);

module.exports = router;