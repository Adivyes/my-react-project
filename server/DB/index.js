const mongoose = require("mongoose");
const dbConnection = 'mongodb://localhost:27017/users'

mongoose.connect(dbConnection, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .catch((e) => {
    console.error("Connection error", e.message);
  });

const db = mongoose.connection;

module.exports = db;
