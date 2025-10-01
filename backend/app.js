
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const errorMiddleware = require('./middleware/errorMiddleware');

app.use(express.json()); // Body parser for JSON
app.use(cookieParser()); // Cookie parser

// Import all routes
const auth = require('./routes/authRoutes');
// Other routes will be imported here:
// const products = require('./routes/productRoutes');
// const orders = require('./routes/orderRoutes');
// const admin = require('./routes/adminRoutes'); // For admin panel routes

app.use('/api/v1', auth);
// app.use('/api/v1', products);
// app.use('/api/v1', orders);
// app.use('/api/v1/admin', admin); // Example for admin-specific routes

// Middleware to handle errors
app.use(errorMiddleware);

module.exports = app;