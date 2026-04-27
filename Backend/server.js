// Import
const express = require('express');
const morgan = require('morgan');
const { readdirSync } = require('fs');
const cors = require('cors');

// Variables
const app = express();
const port = 8080;


// Middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

// Router
readdirSync('./Router').map((file) => {
    app.use('/api', require(`./Router/${file}`));
});




app.listen(port, () => console.log(`Server running on port ${port}`));