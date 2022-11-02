const vehicleModel = require("../models/vehicleModel.js");

const addVehicle = async (req,res) => {
    try{
      const body = req.body;
      const {
        country,
        vehicleNumber,
        vehicleManufacturer,
        vehicleModal,
        vehicleColor,
        yearModel
    } = body;
      const vehicle = await vehicleModel.findOne({vehicleNumber});

      if(vehicle){
        return res.status(400).send({ status: false, msg: "Vehicle details is already added" });
      }

    //   const vehicleDoc = new vehicleModel({body});
    //   await vehicleDoc.save();

      
      const vehicleDoc = {
        country,
        vehicleNumber,
        vehicleManufacturer,
        vehicleModal,
        vehicleColor,
        yearModel
    };

    const newVehicles = await vehicleModel.create(vehicleDoc);

      return res.status(201).send({ status: true, message: "Success", data: newVehicles });

    }catch(err){
        console.log(err);
    }
}

const getAllVehicles = async (req,res) => {
    try{
       const vehicles = await vehicleModel.find();
       if(!vehicles){
        return res.status(404).json({message:"No Vehicles Found"});
    }
    return res.status(200).json({vehicles});
    }catch(err){
        console.log(err);
    }
}

module.exports = {addVehicle,getAllVehicles};