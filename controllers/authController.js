const userModel = require("../models/userModel.js");

const registerUser = async (req,res) => {
    try{
       let {phone} = req.body;
       const phoneExist = await userModel.findOne({phone});
       if (phoneExist)
       {
          return res.status(400).send({ status: false, msg: "You are already registered,Please Login instead" });
       }

       //Register new user
       //const inputData = {phone,otp}
      // const user = await userModel.create(inputData);
      //Otp Generate
      const otp = 1234;
      // Storing phone and otp into collection
      const user = new userModel({
          phone,
          otp
      });

      await user.save();
      const userDoc = await userModel.findOne({phone});
      if(userDoc.otp === otp)
      {
        const userId = userDoc._id;
       res.status(200).json({
        type: "success",
        message: "Otp is Verified",
        data:{phone,otp}
      });
    }
    // res.status(201).send({ status: true, data: phone});
    } catch(err){
        console.log(err);
    }

}
// Creating User after OTP verification
const accountSetup = async(req,res) => {
    try{
       const userId = req.params.id;
       const body = req.body;
       let {fullName , email} = body;
       const user = await userModel.findById(userId);
       if(!user)
         return res.status(404).send({ status: false, message: "No User With this Id" });

      //const updateuser = await userModel.findByIdAndUpdate( userId,{$set:body},{new: true});
      const updateuser = await userModel.findOneAndUpdate({_id:userId},req.body,{new:true,runValidators:true});
       return res.status(200).send({ status: true, message: "Success", data: updateuser })

    }catch(err){
      console.log(err);
    }
}


const loginUser = async (req,res) => {
            try{
                const {phone} = req.body;
                const phoneExist = await userModel.findOne({phone});
                if (!phoneExist)
                {
                   return res.status(400).send({ status: false, msg: "You are NOT registered,Please Register instead" });
                }
                const otp = 1234;
                const userDoc = await userModel.findOne({phone});
                if(userDoc.otp === otp)
                {
                  //const userId = userDoc._id;
                 res.status(200).json({
                  type: "success",
                  message: "Otp is Verified and You are Logged In",
                  data:{phone,otp}
                });
              }
              // res.status(201).send({ status: true, data: phone});
              } catch(err){
                  console.log(err);
              }
          
}

const getAllusers = async (req,res) => {
    try{
       const users = await userModel.find();
       if(!users){
        return res.status(404).json({message:"No Users Found"});
    }
    return res.status(200).json({users});
    }catch(err){
        console.log(err);
    }
}

module.exports ={ registerUser, loginUser, accountSetup, getAllusers};