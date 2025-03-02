const rideModel = require("../models/ride.model");
const mapService = require("./maps.service");
const crypto = require("crypto");


//Service to get the price of the ride
async function getFare(pickup, destination) {
  if (!pickup || !destination) {
    throw new Error("Pickup and Destination are required");
  }
  const distanceTime = await mapService.getDistanceTime(pickup, destination);

  const baseFare = {
    auto: 30,
    car: 50,
    moto: 20,
  };

  const perKmRate = {
    auto: 10,
    car: 15,
    moto: 8,
  };

  const perMinuteRate = {
    auto: 2,
    car: 3,
    moto: 1.5,
  };

  const fare = {
    auto:
      baseFare.auto +
      (distanceTime.distance.value / 1000) * perKmRate.auto +
      (distanceTime.duration.value / 60) * perMinuteRate.auto,
    car:
      baseFare.car +
      (distanceTime.distance.value / 1000) * perKmRate.car +
      (distanceTime.duration.value / 60) * perMinuteRate.car,
    moto:
      baseFare.moto +
      (distanceTime.distance.value / 1000) * perKmRate.moto +
      (distanceTime.duration.value / 60) * perMinuteRate.moto,
  };

  console.log("karan",fare);

  return fare;
}

//Service to generate OTP
function generateOTP(num) {
  if (!num || num <= 0) {
    throw new Error("Number of digits must be greater than zero");
  }
  const otp = crypto.randomInt(Math.pow(10, num-1), Math.pow(10,num)).toString();
  return otp;
}



//Service to create a ride
module.exports.createRide = async ({
  user,
  pickup,
  destination,
  vehicleType,
}) => {
  if (!user || !pickup || !destination || !vehicleType) {
    throw new Error("All fields are required");
  }

  const fare = await getFare(pickup, destination);
  

  const ride = rideModel.create({
    user,
    otp: generateOTP(6),
    pickup,
    destination,
    fare: fare[vehicleType],
  });

  return ride;
};
