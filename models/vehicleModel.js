const mongoose = require("mongoose");

const vehicleSchema = new mongoose.Schema({
   
    country:{
        type:String,
        required:true,
    },
    vehicleNumber:{
        type:String,
        required:true,
        unique:true
    },
    vehicleManufacturer:{
        type:String,
        required:true,
    },
    vehicleModal:{
        type:String,
        required:true,
    },
    vehicleColor:{
        type:String,
        required:true,
    },
  yearModel:{
    type:String,
    required:true,
  }
}, { timestamps: true});

module.exports = mongoose.model("Vehicle",vehicleSchema);