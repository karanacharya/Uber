const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const userController = require("../controller/user.controller");
const authMiddleware = require("../middlewares/auth.middleware");
 


//Registering user
router.post(
  "/register",
  [
    body("email").isEmail().withMessage("Invalid Email"),
    body("fullname.firstname")
      .isLength({ min: 3 })
      .withMessage("First name should be atleast 3 characters long"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be 6 characters long"),
  ],
  userController.registerUser
);


//Loging in of user
router.post(
  "/login",
  [
    body("email").isEmail().withMessage("Invalid Email"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be 6 characters long"),
  ],
  userController.loginUser
);



//To get the profile of the User
router.get("/profile",authMiddleware.authUser,userController.getUserProfile)


//To logout a user
router.get("/logout",authMiddleware.authUser,userController.logoutUser)


module.exports = router;
