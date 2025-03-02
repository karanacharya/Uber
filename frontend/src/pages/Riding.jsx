import React from "react";
import { Link } from "react-router-dom";

const Riding = () => {
  return (
    <div className="h-screen">
      {/* HOme button */}
      <Link to={"/home"} className="fixed right-2 top-2 h-10 w-10 bg-white flex items-center justify-center rounded-full">
        <i className=" text-lg ri-home-2-line font-medium"></i>
      </Link>

      {/* background image */}
      <div className="h-1/2">
        <img
          className="h-full w-full object-cover"
          src="https://s.wsj.net/public/resources/images/BN-XR452_201802_M_20180228165525.gif  "
          alt=""
        />
      </div>

      {/* vehicle details and payment button */}
      <div className="h-1/2 p-4" p-4>
        {/* Driver Details*/}
        <div className="flex items-center justify-between">
          <img
            className="h-10"
            src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_538,w_956/v1646663215/assets/6e/e50c1b-2174-4c97-83a1-bfd4544689d0/original/uberX.png"
            alt=""
          />

          <div className="text-right">
            <h2 className="text-lg font-medium">Karan</h2>
            <h4 className="text-xl font-semibold -mt-1 -mb-1">MP04 OD 8200</h4>
            <p className="text-sm text-gray-600">BMW Alto</p>
          </div>
        </div>

        {/* Location details */}
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

            <div className="flex p-3  gap-5 items-center">
              <i className="ri-currency-line"></i>
              <div>
                <h3 className="text-lg  font-medium">₹193.20</h3>
                <p className="text-gray-600 -mt-1 text-sm">Cash Cash</p>
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
