const userModel = require("../models/user.model")
const userService = require("../services/user.service")
const { validationResult } = require("express-validator")





 // Register controller
module.exports.registerUser = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {

        return res.status(400).json({ errors: errors.array() });
    }



    const { fullname, email, password } = req.body;

    const hashedPassword = await userModel.hashPassword(password);

    const user = await userService.createUser({
        firstname: fullname.firstname,
        lastname: fullname.lastname,
        email,
        password: hashedPassword
    });

    const Token = user.generateAuthToken();

    res.status(200).json({ Token, user });
} 



 // Login Controller
module.exports.loginUser = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

   const user = await userModel.findOne({email}). select('+password');

    if (!user) {
        return res.status(401).json({ message: "Invalid Email or Password" });
    }

   const isValidPassword = await user.comparePassword(password);

    if (!isValidPassword) {
        return res.status(401).json({ message: "Invalid Email or Password" });
    }

    const Token = user.generateAuthToken();

    res.status(200).json({ Token, user });
}

