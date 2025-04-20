import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useEffect , useContext } from "react";
import { SocketContext } from "../context/SocketContext";
import { Socket } from "socket.io-client";
import { useNavigate } from "react-router-dom";
import LiveTracking from "../components/LiveTracking";

const Riding = () => {
  const location = useLocation();
  const {ride} = location.state || {}; // Access the ride data
  const {socket} =  useContext(SocketContext)
  const navigate = useNavigate();


  socket.on("ride-ended", () => {
    navigate('/home')
})

  return (
    <div className="h-screen">
      {/* Home button */}
      <Link
        to={"/home"}
        className="fixed right-2 top-2 h-10 w-10 bg-white flex items-center justify-center rounded-full"
      >
        <i className=" text-lg ri-home-2-line font-medium"></i>
      </Link>

      {/* Background image */}
      <div className="h-1/2">
        <LiveTracking/>
      </div>

      {/* Vehicle details and payment button */}
      <div className="h-1/2 p-4">
        {/* Driver Details */}
        <div className="flex items-center justify-between">
          <img
            className="h-10"
            src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_538,w_956/v1646663215/assets/6e/e50c1b-2174-4c97-83a1-bfd4544689d0/original/uberX.png"
            alt=""
          />

          <div className="text-right">
            <h2 className="text-lg font-medium capitalize">
              {ride?.captain.fullname.firstname || "Driver Name"}
            </h2>
            <h4 className="text-xl font-semibold -mt-1 -mb-1">
              {ride?.captain.vehicle.plate || "Vehicle Number"}
            </h4>
            <p className="text-sm text-gray-600">
              {ride?.vehicleModel || "Maruti Suzuki"}
            </p>
          </div>
        </div>

        {/* Location details */}
        <div className="flex gap-2 flex-col justify-between items-center">
          <div className="w-full mt-5">
            <div className="flex p-3 border-b-2 border-b-[#dde2e3] gap-5 items-center">
              <i className="ri-map-pin-range-fill text-lg"></i>
              <div>
                <h3 className="text-lg font-medium">
                  {ride?.destination || "Pickup Location"}
                </h3>
                <p className="text-gray-600 -mt-1 text-sm">
                  {ride?.pickupDetails || "Destination Details"}
                </p>
              </div>
            </div>

            <div className="flex p-3 gap-5 items-center">
              <i className="ri-currency-line"></i>
              <div>
                <h3 className="text-lg font-medium">
                  ₹{Math.floor(ride?.fare) || "Fare Amount"}
                </h3>
                <p className="text-gray-600 -mt-1 text-sm">
                  {ride?.paymentMethod || "Payment Method"}
                </p>
              </div>
            </div>
          </div>
        </div>

        <button className="w-full mt-5 bg-green-500 text-white font-semibold p-2 rounded-lg">
          Make a Payment
        </button>
      </div>
    </div>
  );
};

export default Riding;
