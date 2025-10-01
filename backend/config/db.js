
const mongoose = require('mongoose');

const connectDatabase = () => {
    mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(con => {
        console.log(`MongoDB Database connected with HOST: ${con.connection.host}`);
    }).catch(err => {
        console.error(`MongoDB Connection Error: ${err.message}`);
        process.exit(1); // Exit process with failure
    });
};

module.exports = connectDatabase;
