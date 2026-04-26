// Import
const express = require('express');
const morgan = require('morgan');
const authRouter = require('./Router/auth');

// Variables
const app = express();
const port = 3001;


// Middleware
app.use(morgan('dev'));
app.use(express.json());

// Router
app.use('/api', authRouter);



app.listen(port, () => console.log(`Server running on port ${port}`));