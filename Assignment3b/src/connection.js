const mongoose = require('mongoose');
require('dotenv').config();

const url = `mongodb+srv://dheerajjadhav4455:${process.env.MONGO_PASSWORD}@cluster0.idhjqnt.mongodb.net/myProduct?retryWrites=true&w=majority`;

const connection = mongoose.connect(url).then(() => {
    console.log("Successfully Connected to Cloud Atlas....")
}).catch((err) => console.log("Connection failed", err));

module.exports = connection;

