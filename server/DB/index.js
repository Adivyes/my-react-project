const mongoose = require("mongoose");
const dbConnection = 'mongodb+srv://AdivUsers:AdivUsers12345@cluster0.dyhrc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

mongoose.connect(dbConnection, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .catch((e) => {
    console.error("Connection error", e.message);
  });

const db = mongoose.connection;

module.exports = db;
