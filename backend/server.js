const app = require('./app');
const dotenv = require('dotenv');
const connectDatabase = require('./config/db');


// Handle uncaught exceptions
process.on('uncaughtException', err => {
    console.error(`Error: ${err.message}`);
    console.error('Shutting down server due to uncaught exception');
    process.exit(1);
});

// Load config
dotenv.config({ path: './backend/.env' });

// Connecting to database
connectDatabase();

const server = app.listen(process.env.PORT, () => {
    console.log(`Server started on PORT: ${process.env.PORT} in ${process.env.NODE_ENV} mode.`);
});

// Handle unhandled promise rejections
process.on('unhandledRejection', err => {
    console.error(`Error: ${err.message}`);
    console.error('Shutting down server due to unhandled promise rejection');
    server.close(() => {
        process.exit(1);
    });
});