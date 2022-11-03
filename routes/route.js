const express = require("express");
const {registerUser,loginUser,accountSetup, getAllusers} = require("../controllers/authController.js");
const {
    addVehicle,
    getAllVehicles,
    showAllManufacturers,
    showAllVehicleTypes,
    showAllVehicleModels,
    showAllVehicleColors
} = require("../controllers/vehicleController.js");


const router = express.Router();

router.post("/register", registerUser);

router.post("/login", loginUser);

//Route for creating user after OTP verification
router.patch("/:id",accountSetup)
//router.post("/verify", verifyOTP);

router.get("/users", getAllusers);


router.post("/vehicle", addVehicle);

router.get("/vehicle", getAllVehicles);

router.get("/manufacturer",showAllManufacturers);

router.get("/types",showAllVehicleTypes);

router.get("/models",showAllVehicleModels);

router.get("/colors",showAllVehicleColors);

module.exports = router;