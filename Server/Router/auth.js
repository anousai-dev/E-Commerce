// Import
const express = require('express');
const router = express.Router();


// Resgister
router.get('/register', (req, res) => {
    res.send('Register');
});

module.exports = router;