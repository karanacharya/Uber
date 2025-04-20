const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/auth.middleware");
const mapControllers = require("../controller/map.controller");
const { query } = require("express-validator");


//Coordinates Route
router.get(
  "/get-coordinates",
  query("address").isString().isLength({ min: 3 }),
  authMiddleware.authUser,
  mapControllers.getCoordinates
);


//Distance and Time Route
router.get("/get-distance-time",
    query("origin").isString().isLength({ min: 3 }),
    query("destination").isString().isLength({ min: 3 }),
    authMiddleware.authUser,
    mapControllers.getDistanceTime
);


//SUGGESTIONS ROUTE 
router.get("/get-suggestions",
    query("input").isString().isLength({ min: 3 }),
    authMiddleware.authUser,
    mapControllers.getAutoCompleteSuggestions
);

module.exports = router;
