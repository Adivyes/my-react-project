const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const User = new Schema(
  {
        userName:String,
        userEmail: String,

  },
  
);
module.exports= mongoose.model('user',User) 