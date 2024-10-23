const mongoose = require('mongoose');

const dbConnection = async () => {

    try {
        await mongoose.connect( process.env.DB_CONNECTION );
        console.log("Database connected");
    } catch (error) {
        console.log('Error connecting to the database');
        throw new Error('Error connecting to the database');
    }

}

module.exports = {
    dbConnection
}