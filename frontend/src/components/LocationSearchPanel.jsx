import React from "react";
import "remixicon/fonts/remixicon.css";

const LocationSearchPanel = (props) => {
  //sample array for locations
  const locations = [
    "24B, Near Kappor's cafe, Sheriyans Coding school",
    "45A, Opposite Star Bakery, Zenith Art Academy",
    "37D, Adjacent to Maple Park, Everest Dance Studio",
    "24F, Beside Clover Hospital, Galaxy Science Institute",
  ];

  return (
    <div>
      {/* Using just sample data for now */}

      {locations.map(function (Element, idx) {
        return (
          <div
            key={idx}
            onClick={() => {
              props.setVehiclePanel(true);
              props.setPanelOpen(false);
            }}
            className="flex gap-4 p-3 border-2 border-gray-100 mb-2 active:border-black rounded-xl  items-center justify-start "
          >
            <h2 className="bg-[#eee] ml-2 h-7 flex items-center justify-center w-9 rounded-full">
              <i className="ri-map-pin-fill"></i>
            </h2>
            <h4 className="font-medium">{Element}</h4>
          </div>
        );
      })}

      {/* <div className="flex gap-4 p-3 border-2 border-gray-100 mb-2 active:border-black rounded-xl  items-center justify-start ">
        <h2 className="bg-[#eee] ml-2 h-7 flex items-center justify-center w-9 rounded-full">
          <i className="ri-map-pin-fill"></i>
        </h2>
        <h4 className="font-medium">
          24B, Near Kappor's cafe, Sheriyans Coding school
        </h4>
      </div>

      <div className="flex gap-4 p-3 border-2 border-gray-100 mb-2 active:border-black rounded-xl  items-center justify-start ">
        <h2 className="bg-[#eee]  ml-2 h-7 flex items-center justify-center w-9 rounded-full">
          <i className="ri-map-pin-fill"></i>
        </h2>
        <h4 className="font-medium">
          45A, Opposite Star Bakery, Zenith Art Academy
        </h4>
      </div>

      <div className="flex gap-4 p-3 border-2 border-gray-100 mb-2 active:border-black rounded-xl  items-center justify-start ">
        <h2 className="bg-[#eee] ml-2 h-7 flex items-center justify-center w-9 rounded-full">
          <i className="ri-map-pin-fill"></i>
        </h2>
        <h4 className="font-medium">
          37D, Adjacent to Maple Park, Everest Dance Studio
        </h4>
      </div>

      <div className="flex gap-4 p-3 border-2 border-gray-100 mb-2 active:border-black rounded-xl  items-center justify-start ">
        <h2 className="bg-[#eee] ml-2 h-7 flex items-center justify-center w-9 rounded-full">
          <i className="ri-map-pin-fill"></i>
        </h2>
        <h4 className="font-medium">
          24F, Beside Clover Hospital, Galaxy Science Institute
        </h4>
      </div> */}

      {/* <div className="flex gap-4 p-3 border-2 border-gray-100 mb-2 active:border-black rounded-xl  items-center justify-start ">
        <h2 className="bg-[#eee] ml-2 h-7 flex items-center justify-center w-9 rounded-full">
          <i className="ri-map-pin-fill"></i>
        </h2>
        <h4 className="font-medium">
          67K, Next to Lotus Club, Aurora Martial Arts Academy
        </h4>
      </div> */}
    </div>
  );
};

export default LocationSearchPanel;
