import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import "remixicon/fonts/remixicon.css";
import gsap from "gsap";
import LocationSearchPanel from "../components/LocationSearchPanel";
import VehiclePanel from "../components/VehiclePanel";
import ConfirmRide from "../components/ConfirmRide";
import LookingForDriver from "../components/LookingForDriver";
import WaitingForDriver from "../components/WaitingForDriver";

const Home = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const panelRef = useRef(null);
  const vehiclePanelRef = useRef(null);
  const confirmRidePanelRef = useRef(null);
  const vehicleFoundRef = useRef(null);
  const waitingForDriverRef = useRef(null);

  const panleCloseRef = useRef(null);

  const [vehiclePanel, setVehiclePanel] = useState(false);
  const [panelOpen, setPanelOpen] = useState(false);
  const [confirmRidePanel, setConfirmRidePanel] = useState(false);
  const [vehicleFound, setVehicleFound] = useState(false);
  const [waitingForDriver, setWaitingForDriver] = useState(false);
  


  const SubmitHandler = (e) => {
    e.preventDefault();
  };

  useGSAP(
    function () {
      if (panelOpen) {
        gsap.to(panelRef.current, {
          height: "70%",
          padding: 24,
        });
        gsap.to(panleCloseRef.current, {
          opacity: 1,
        });
      } else {
        gsap.to(panelRef.current, {
          height: "0",
          padding: 0,
        });
        gsap.to(panleCloseRef.current, {
          opacity: 0,
        });
      }
    },
    [panelOpen]
  );

  useGSAP(
    function () {
      if (vehiclePanel) {
        gsap.to(vehiclePanelRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(vehiclePanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [vehiclePanel]
  );

  useGSAP(
    function () {
      if (confirmRidePanel) {
        gsap.to(confirmRidePanelRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(confirmRidePanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [confirmRidePanel]
  );


  useGSAP(
    function () {
      if (vehicleFound) {
        gsap.to(vehicleFoundRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(vehicleFoundRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [vehicleFound]
  );

  useGSAP(
    function () {
      if (waitingForDriver) {
        gsap.to(waitingForDriverRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(waitingForDriverRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [waitingForDriver]
  );

  return (
    <div className="h-screen relative overflow-hidden">
      {/* Uber Logo */}
      <img
        className="w-12 absolute left-5 top-5"
        src="https://imgs.search.brave.com/FZq7YFqzVbkjhipVXmxfaZY-RmPwy3wsG0WV1UdM8bs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/cy13b3JsZC5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjAv/MDUvVWJlci1Mb2dv/LTcwMHgzOTQucG5n"
        alt=""
      />

      {/* background image */}
      <div className="h-screen w-screen">
        <img
          className="h-full w-full object-cover"
          src="https://s.wsj.net/public/resources/images/BN-XR452_201802_M_20180228165525.gif  "
          alt=""
        />
      </div>

      {/* search panel */}
      <div className="h-screen absolute bottom-0 w-full flex flex-col justify-end ">
        <div className="h-[30%] p-5 bg-white relative ">
          <h5
            ref={panleCloseRef}
            onClick={() => {
              setPanelOpen(false);
            }}
            className="absolute opacity-0 top-4 right-5 text-lg"
          >
            <i className="ri-arrow-down-wide-fill"></i>
          </h5>
          <h4 className="text-2xl font-semibold mb-2">Find a trip</h4>
          <form
            onSubmit={(e) => {
              SubmitHandler(e);
            }}
          >
            <div className="line absolute w-1 left-10 h-16 bg-gray-900 top-[39%] rounded-full"></div>
            <input
              onClick={() => {
                setPanelOpen(true);
              }}
              value={pickup}
              onChange={(e) => {
                setPickup(e.target.value);
              }}
              className="bg-[#eee] px-12 py-2 mb-4 text-base w-full rounded border "
              type="text"
              placeholder="Add a pick-up location"
            />
            <input
              onClick={() => {
                setPanelOpen(true);
              }}
              value={destination}
              onChange={(e) => {
                setDestination(e.target.value);
              }}
              className="bg-[#eee] px-12 py-2 text-base border rounded w-full"
              type="text"
              placeholder="Enter your destination"
            />
          </form>
        </div>

        <div ref={panelRef} className=" bg-white h-0">
          <LocationSearchPanel
            setPanelOpen={setPanelOpen}
            setVehiclePanel={setVehiclePanel}
          />
        </div>
      </div>

      {/* vehicle panel */}
      <div
        ref={vehiclePanelRef}
        className="fixed w-full translate-y-full z-10 bottom-0 px-3 py-6 bg-white  border"
      >
        <VehiclePanel
          setConfirmRidePanel={setConfirmRidePanel}
          setVehiclePanel={setVehiclePanel}
        />
      </div>

      {/* confirm ride panel */}
      <div
        ref={confirmRidePanelRef}
        className="fixed w-full translate-y-full z-10 bottom-0 px-3 py-6 bg-white  border"
      >
        <ConfirmRide  setConfirmRidePanel={setConfirmRidePanel} setVehicleFound={setVehicleFound} />
      </div>

      <div ref={vehicleFoundRef} className="fixed w-full translate-y-full z-10 bottom-0 px-3 py-6 bg-white  border">
         <LookingForDriver setVehicleFound={setVehicleFound}/>
      </div>

      <div ref={waitingForDriverRef} className="fixed w-full z-10 bottom-0 px-3 py-6 bg-white  border">
        <WaitingForDriver setWaitingForDriver={setWaitingForDriver}/>
      </div>
    </div>
  );
};

export default Home;
