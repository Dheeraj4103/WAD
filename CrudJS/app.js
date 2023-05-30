const { MongoClient } = require("mongodb");

// Create Instance of MongoClient for mongodb
const client = new MongoClient("mongodb://127.0.0.1:27017");

// Connect to database
async function CheckConnection() {
    const db = await client.connect();
    db.o
}