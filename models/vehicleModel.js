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
    vehicleType:[
        {
            image:{
              type:String,
              required:true,
             },
             typeName:{
                type:String,
                required:true,
             }, 
             seatCount:{
                type:Number,
                required:true,
             }, 
       }]
,
    vehicleColor:[
        {
            colorName:{
              type:String,
              required:true,
             },
             colorCode:{
                type:String,
                required:true,
             }, 
       }
],
    vehicleModel:{
        type:String,
        required:true,
    },
   
  yearMade:{
    type:String,
    required:true,
  }
}, { timestamps: true});

module.exports = mongoose.model("Vehicle",vehicleSchema);