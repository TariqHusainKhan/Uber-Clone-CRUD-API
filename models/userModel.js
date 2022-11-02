const mongoose = require("mongoose");
const validator =require('validator');

const userSchema = new mongoose.Schema({
    phone:{
        type:Number,
        required:true,
        trim:true,
        unique:true,
        maxLength:10
    },
  fullName:{
    type:String,
    //required:true,
    trim:true
  },
  email:{
    type:String,
    //required:true,
    validate:[validator.isEmail, "Invalid Email"]
  },
  otp:{
    type:Number
  }
}, { timestamps: true});

module.exports = mongoose.model("User",userSchema);
