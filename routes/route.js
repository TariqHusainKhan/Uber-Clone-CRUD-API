const express = require("express");
const {registerUser,loginUser,accountSetup, getAllusers} = require("../controllers/authController.js");
const {addVehicle,getAllVehicles} = require("../controllers/vehicleController.js");


const router = express.Router();

router.post("/register", registerUser);

router.post("/login", loginUser);

//Route for creating user after OTP verification
router.patch("/:id",accountSetup)
//router.post("/verify", verifyOTP);

router.get("/users", getAllusers);


router.post("/vehicle", addVehicle);

router.get("/vehicle", getAllVehicles);

module.exports = router;