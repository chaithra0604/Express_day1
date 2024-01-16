const mongoose = require('mongoose');

// connecting db
const connectDb = async () => {
    try {
        const connect = await mongoose.connect(`mongodb+srv://chaithrags:chaimongo213!@chaithrags.qvqteun.mongodb.net/?retryWrites=true&w=majority`)
        console.log("DB connected",
            connect.connection.host
            , connect.connection.name);
    } catch (error) {
        console.log(error);
    }
}

module.exports = connectDb;