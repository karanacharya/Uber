const captainModel = require("../models/captain.model");
const captainService = require("../services/captain.service");
const { validationResult } = require("express-validator");
const blacklistTokenModel = require('../models/blacklistToken.model');

//register controller
module.exports.registerCaptain = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { fullname, email, password, vehicle } = req.body;

  //Check if the captian already exists or not.
  const isCaptainExists = await captainModel.findOne({ email });
  if (isCaptainExists) {
    res.status(401).json({ message: "Captain already exists" });
  }

  //Hash the password
  const hashedPassword = await captainModel.hashPassword(password);

  const captain = await captainService.createCaptain({
    firstname: fullname.firstname,
    lastname: fullname.lastname,
    email,
    password: hashedPassword,
    color: vehicle.color,
    plate: vehicle.plate,
    capacity: vehicle.capacity,
    vehicleType: vehicle.vehicleType,
  });

  //Generate a token
  const token = await captain.generateAuthToken();

  res.status(201).json({ token, captain });
};

//Login controller
module.exports.loginCaptain = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;

  const captain = await captainModel.findOne({ email }).select("+password");

  if (!captain) {
    return res.status(401).json({ message: "Invalid Email or Password" });
  }

  const isMatch = await captain.comparePassword(password);
  if (!isMatch) {
    return res.status(401).json({ message: "Invalid email or password" });
  }

  const token = captain.generateAuthToken();

    

  // if (!token) {
  //   console.log("Token is empty"); // Log if the token is empty
  // } else {
  //   console.log("Token is not empty:", token); // Log if the token is not empty
  // }
  

  res.cookie("Token", token);

  res.status(200).json({ token, captain });
};

//profile controller
module.exports.getCaptainProfile = async (req, res, next) => {
  res.status(200).json({ captain: req.captain });
};

//logout controller
module.exports.logoutCaptain = async (req, res, next) => {
  const token =  req.headers.authorization?.split(' ') [ 1 ];
  console.log(token)
  await blacklistTokenModel.create({token});
  res.clearCookie("token");

  res.status(200).json({ message: "Logged out Successfully" });
};

