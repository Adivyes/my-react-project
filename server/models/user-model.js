const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const User = new Schema(
  {
    userEmail: String,
    userPassword:String,

  },
  
);
module.exports= mongoose.model('user',User) 