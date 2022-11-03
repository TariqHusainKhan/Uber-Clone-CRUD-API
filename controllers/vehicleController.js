const vehicleModel = require("../models/vehicleModel.js");

const addVehicle = async (req,res) => {
    try{
      const body = req.body;
      const newVehicles = await vehicleModel.create(body);
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

const showAllManufacturers = async (req,res) => {
   try{
      //const brand = req.params.brand;
      const manufacturer = await vehicleModel.find();
      
      const docs = manufacturer.map((element) => {
        const container = {};
        container.id=element._id.toString();
        container.key = element.vehicleManufacturer;
        return container;
       })
       res.status(200).send({status:true,message:"success",data:docs});
  
      if(!manufacturer){
        return res.status(404).json({message:"Manufacturer is Not Found"});
      }
     

   }catch(err){
    console.log(err);
   }
}

const showAllVehicleTypes = async (req,res) => {
  try{
     //const brand = req.params.brand;
     const manufacturer = await vehicleModel.find();
     
     //const manufacturer = await vehicleModel.find();
    
    //  for(let i=0;i<manufacturer.length;i++)
    //  {
    //   var container=[];
    //     container.id= manufacturer[i]._id.toString();
    //     container.image=manufacturer[i].vehicleType[0].image;
    //     container.name=manufacturer[i].vehicleType[0].typeName;
    //     container.seatCount=manufacturer[i].vehicleType[0].seatCount;
    //    // return container;
    //  }


     const docs = manufacturer.map((element) => {
       const container = {};
       container.id=element._id.toString();
       
       container.typeProps = element.vehicleType.map((item) => {
          const elem = {};
          elem.image=item.image;
          elem.name=item.typeName;
          elem.seatCount=item.seatCount;
          return elem;
       });

      
      //  container.image = element.vehicleType.image;
      //  container.name = element.vehicleType.name;
      //  container.seatCount = element.vehicleType.seatCount;
      // container.type=element.vehicleType;
       // console.log(elem);


       return container;
      })
      res.status(200).send({status:true,message:"success",data:docs});
 
     if(!manufacturer){
       return res.status(404).json({message:"Manufacturer is Not Found"});
     }
    

  }catch(err){
   console.log(err);
  }
}

const showAllVehicleModels = async (req,res) => {
  try{
     //const brand = req.params.brand;
     const manufacturer = await vehicleModel.find();
     
     const docs = manufacturer.map((element) => {
       const container = {};
       container.id=element._id.toString();
       container.model = element.vehicleModel;
       return container;
      })
      res.status(200).send({status:true,message:"success",data:docs});
 
     if(!manufacturer){
       return res.status(404).json({message:"Manufacturer is Not Found"});
     }
    

  }catch(err){
   console.log(err);
  }
}

const showAllVehicleColors = async (req,res) => {
  try{
     //const brand = req.params.brand;
     const manufacturer = await vehicleModel.find();
     
     const docs = manufacturer.map((element) => {
       const container = {};
       container.id=element._id.toString();
       //container.color = element.vehicleColor;

       container.colorProps = element.vehicleColor.map((item) => {
        const elem = {};
        elem.colorName=item.colorName;
        elem.colorCode=item.colorCode;
        return elem;
     });

       return container;
      })
      res.status(200).send({status:true,message:"success",data:docs});
 
     if(!manufacturer){
       return res.status(404).json({message:"Manufacturer is Not Found"});
     }
    

  }catch(err){
   console.log(err);
  }
}

module.exports = {
                   addVehicle,
                   getAllVehicles,
                   showAllManufacturers,
                   showAllVehicleTypes,
                   showAllVehicleModels,
                   showAllVehicleColors
                  };