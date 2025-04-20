import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";



const ConfirmRidePopup = (props) => {

  const [otp, setOtp] = useState('');
  const navigate = useNavigate();
  

   const SubmitHandler = async(e)=>{
      e.preventDefault();

      const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/rides/start-ride`, {
        params: {
          rideId: props.ride._id,
          otp: otp,
        },
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }); 

      if(response.status === 200){
        props.setConfirmRidePopupPanel(false);
        props.setRidePopupPanel(false);
        navigate ('/captain-riding',{ state: {ride: props.ride}})
      }

   }


  return (
    <div>
      <div>
        <h5
          onClick={() => {
            props.setConfirmRidePopupPanel(false);
          }}
          className=" mb-2 text-center "
        >
          <i className="ri-arrow-down-wide-line"></i>
        </h5>

        <h3 className="text-2xl font-semibold mb-5 ">
          Confirm This Ride To Start
        </h3>

        <div className="flex items-center justify-between p-3 border-yellow-400 border-2 bg-gray-100 rounded-lg">
          <div className="flex items-center gap-3">
            <img
              className="h-12 w-12 rounded-full object-cover"
              src="https://imgs.search.brave.com/oXcFMa_Ci0zo-AnjwlUktG37n60uU-aCSYgV5asjGnw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9o/YW5kc29tZS1zZW5z/aXRpdmUtcmVkLWhl/YWQtbWFuLXNtaWxp/bmdfMjMtMjE0OTUw/OTgyMC5qcGc_c2Vt/dD1haXNfaHlicmlk"
              alt=""
            />
            <h2 className="text-lg font-medium capitalize">{props.ride?.user.fullname.firstname}</h2>
          </div>
          <h5 className="text-lg font-semibold">2.2 KM</h5>
        </div>

        <div className=" flex gap-2 flex-col justify-between items-center">
          <div className="w-full mt-5">
            <div className="flex p-3 border-b-2 border-b-[#dde2e3] gap-5 items-center">
              <i className="ri-map-pin-range-fill text-lg"></i>
              <div>
                <h3 className="text-lg font-medium">562/11-A</h3>
                <p className="text-gray-600 -mt-1 text-sm">
                 {props.ride?.pickup}
                </p>
              </div>
            </div>
            <div className="flex p-3 border-b-2 border-b-[#dde2e3] gap-5 items-center">
              <i className="ri-map-pin-user-line"></i>
              <div>
                <h3 className="text-lg font-medium">562/11-A</h3>
                <p className="text-gray-600 -mt-1 text-sm">
                  {props.ride?.destination}
                </p>
              </div>
            </div>

            <div className="flex p-3  gap-5 items-center">
              <i className="ri-currency-line"></i>
              <div>
                <h3 className="text-lg  font-medium">₹{Math.floor(props.ride?.fare)}</h3>
                <p className="text-gray-600 -mt-1 text-sm">Cash Cash</p>
              </div>
            </div>
          </div>

          {/* buttons for confirm and cancel */}
          <div className="mt-6 w-full">
            <form
              onSubmit={ SubmitHandler}
            >
              <input
               value={otp}
               onChange={(e)=>{
                 setOtp(e.target.value);
               }}
                className="bg-[#eee] px-6 font-mono py-2 mb-4 text-base w-full rounded border "
                type="text"
                placeholder="Enter OTP"
              />
              <button
                
                className="w-full mt-5 flex justify-center bg-green-500 text-white font-semibold p-2 rounded-lg"
              >
                {" "}
                Confirm
              </button>
              <button
                onClick={() => {
                  props.setConfirmRidePopupPanel(false);
                  props.setRidePopupPanel(false);
                }}
                className="w-full mt-1 bg-red-500 text-white font-semibold p-2 rounded-lg"
              >
                {" "}
                Cancel
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmRidePopup;
