// Import
const express = require('express');
const router = express.Router();
const { register , login , currentUser} = require('../Controllers/auth');

// Resgister
router.post('/register', register);

// Login
router.post('/login', login);

// Check-User
router.post('/current-user',currentUser);
router.post('/current-admin',currentUser);



module.exports = router;