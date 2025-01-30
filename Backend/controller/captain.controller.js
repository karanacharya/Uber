const captainModel = require("../models/captain.model");
const captainService = require("../services/captain.service")
const { validationResult } = require('express-validator');


module.exports.registerCaptain = async (req,res,next)=> {
    
    const errors = validationResult(req);
    if(!errors.isEmpty()){
          return res.status(400).json({errors: errors.array()});
    }

    const{ fullname,email,password,vehicle} = req.body;



    //Check if the captian already exists or not.
    const isCaptainExists = await captainModel.findOne({ email });
    if(isCaptainExists){
        res.status(401).json({ message:'Captain already exists'});
    }


    //Hash the password
    const hashedPassword = await captainModel.hashPassword(password);

    const captain = await captainService.createCaptain({
        firstname:fullname.firstname,
        lastname:fullname.lastname,
        email,
        password:hashedPassword,
        color:vehicle.color,
        plate:vehicle.plate,
        capacity:vehicle.capacity,
        vehicleType:vehicle.vehicleType 
        
    });

    //Generate a token 
    const token = await captain.generateAuthToken();

    res.status(201).json({ token,captain});
}