import React from "react";

const VehiclePanel = (props) => {
  return (
    <div>
      <h5
        onClick={() => {
          props.setVehiclePanel(false);
        }}
        className=" mb-2 text-center "
      >
        <i className="ri-arrow-down-wide-line"></i>
      </h5>

      <h3 className="mb-4 border text-center font-bold text-lg bg-gray-900 text-white rounded-2xl ">
        Choose a Vehicle
      </h3>

      {/* Car Section */}
      <div
        onClick={() => {
          props.setConfirmRidePanel(true);
        }}
        className="flex border-2 border-black bg-gray-100 mb-5 rounded-xl w-full p-3 items-center justify-between"
      >
        <img
          className="h-15"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_538,w_956/v1646663215/assets/6e/e50c1b-2174-4c97-83a1-bfd4544689d0/original/uberX.png"
          alt=""
        />
        <div className=" ml-3 w-1/2">
          <h4 className="font-medium text-xl ">
            UberGo{" "}
            <span>
              <i className="ri-user-fill"></i>4
            </span>
          </h4>
          <h5 className="font-medium text-sm ">2 mins away</h5>
          <p className="font-normal text-xs text-gray-600 ">
            Affordable, compact rides
          </p>
        </div>
        <h2 className="text-lg font-semibold">₹193.20</h2>
      </div>

      {/* Bike Section */}
      <div
        onClick={() => {
          props.setConfirmRidePanel(true);
        }}
        className="flex p-3 w-full border-2 border-black bg-gray-100 rounded-xl mb-5 justify-between items-center"
      >
        <img
          className="h-14"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png"
          alt=""
        />
        <div className=" w-1/2">
          <h4 className="font-medium text-xl ">
            Moto{" "}
            <span>
              <i className="ri-user-fill"></i>1
            </span>
          </h4>
          <h5 className="font-medium text-sm ">3 mins away</h5>
          <p className="font-normal text-xs text-gray-600 ">
            Affordable, motorcycle rides
          </p>
        </div>
        <h2 className="text-lg font-semibold">₹65</h2>
      </div>

      {/* Auto Section */}
      <div
        onClick={() => {
          props.setConfirmRidePanel(true);
        }}
        className="flex p-3 w-full border-2 border-black bg-gray-100  rounded-xl mb-5 justify-between items-center"
      >
        <img
          className="h-14"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png"
          alt=""
        />
        <div className=" ml-4 w-1/2">
          <h4 className="font-medium text-xl ">
            UberAuto{" "}
            <span>
              <i className="ri-user-fill"></i>3
            </span>
          </h4>
          <h5 className="font-medium text-sm ">2 mins away</h5>
          <p className="font-normal text-xs text-gray-600 ">
            Affordable, auto rides
          </p>
        </div>
        <h2 className="text-lg font-semibold">₹118.20</h2>
      </div>
    </div>
  );
};

export default VehiclePanel;
