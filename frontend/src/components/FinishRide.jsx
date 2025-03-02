import React from "react";
import { Link } from "react-router-dom";

const FinishRide = (props) => {
  return (
    <div>
      <div>
          <h5 onClick={() => {
             props.setFinishRidePanel(false)
          }} className=" mb-2 text-center ">
              <i className="ri-arrow-down-wide-line"></i>
          </h5>

          <h3 className="text-2xl font-semibold mb-5 ">
            Finish This Ride
          </h3>

        <div className="flex items-center justify-between p-3 bg-yellow-400 rounded-lg">
            <div className="flex items-center gap-3">
                <img
                  className="h-12 w-12 rounded-full object-cover"
                  src="https://imgs.search.brave.com/oXcFMa_Ci0zo-AnjwlUktG37n60uU-aCSYgV5asjGnw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9o/YW5kc29tZS1zZW5z/aXRpdmUtcmVkLWhl/YWQtbWFuLXNtaWxp/bmdfMjMtMjE0OTUw/OTgyMC5qcGc_c2Vt/dD1haXNfaHlicmlk"
                  alt=""
                />
                <h2 className="text-lg font-medium">Harsh Patel</h2>
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
                  Kankaria Talab , Bhopal
                </p>
              </div>
            </div>
            <div className="flex p-3 border-b-2 border-b-[#dde2e3] gap-5 items-center">
              <i className="ri-map-pin-user-line"></i>
              <div>
                <h3 className="text-lg font-medium">562/11-A</h3>
                <p className="text-gray-600 -mt-1 text-sm">
                  Kankaria Talab , Bhopal
                </p>
              </div>
            </div>

            <div className="flex p-3  gap-5 items-center">
              <i className="ri-currency-line"></i>
              <div>
                <h3 className="text-lg  font-medium">₹193.20</h3>
                <p className="text-gray-600 -mt-1 text-sm">Cash Cash</p>
              </div>
            </div>
          </div>

          {/* buttons for confirm and cancel */}
          <div className="mt-10 w-full">
           
              
              <Link
                to="/captain-home"
                className="w-full mt-5 flex justify-center bg-green-500 text-white font-semibold p-2 rounded-lg"
              >
                {" "}
               Finish Ride
              </Link>

              
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinishRide;
