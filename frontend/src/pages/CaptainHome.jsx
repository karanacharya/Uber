import React, { useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import Captaindetails from "../components/Captaindetails";
import RidePopup from "../components/RidePopup";
import { useGSAP } from "@gsap/react";
import ConfirmRidePopup from "../components/ConfirmRidePopup";
import { SocketContext } from "../context/SocketContext";
import { useEffect } from "react";
import UserContext from "../context/UserContext";
import { CaptainDataContext } from "../context/CaptainContext";
import { Socket } from "socket.io-client";
import axios from "axios";

const CaptainHome = () => {
  const [ridePopupPanel, setRidePopupPanel] = useState(false);
  const [confirmRidePopupPanel, setConfirmRidePopupPanel] = useState(false);

  const ridePopupPanelRef = useRef(null);
  const confirmRidePopupPanelRef = useRef(null);

  const { socket } = useContext(SocketContext)
  const { captain } = useContext(CaptainDataContext);
  
 const [ride, setRide] = useState(null);
 
  

  useEffect(() => {
    socket.emit('join', {
      userId: captain._id,
      userType: 'captain'
  })



    const updateLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {

          
          socket.emit("update-location-captain", {
            userId: captain._id,
            location: {
              ltd: position.coords.latitude,
              lng: position.coords.longitude,
            },
          });
        });
      }
    };

    const locationInterval = setInterval(updateLocation, 10000);
    updateLocation();

 
    
  }, []);


  
  
    socket.on('new-ride', (data) => {
       setRide(data);
       
      
       setRidePopupPanel(true);
    });
  
    
    


  async function confirmRide() {

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/rides/confirm`, { 
      rideId: ride._id,
      captainId: captain._id,

    },{
        headers:{
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    })
    
    setConfirmRidePopupPanel(true);
    setRidePopupPanel(false);
  }


    

  useGSAP(
    function () {
      if (confirmRidePopupPanel) {
        gsap.to(confirmRidePopupPanelRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(confirmRidePopupPanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [confirmRidePopupPanel]
  );
  useGSAP(
    function () {
      if (ridePopupPanel) {
        gsap.to(ridePopupPanelRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(ridePopupPanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [ridePopupPanel]
  );

  return (
    <div className="h-screen">
      {/* HOme button */}
      <div className="fixed p-3 top-0 flex items-center justify-between">
        <img
          className="w-16"
          src="https://imgs.search.brave.com/FZq7YFqzVbkjhipVXmxfaZY-RmPwy3wsG0WV1UdM8bs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/cy13b3JsZC5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjAv/MDUvVWJlci1Mb2dv/LTcwMHgzOTQucG5n"
          alt=""
        />
        <Link
          to={"/home"}
          className="fixed right-2 top-2 h-10 w-10 bg-white flex items-center justify-center rounded-full"
        >
          <i className=" text-lg ri-logout-box-line font-medium"></i>
        </Link>
      </div>

      {/* background image */}
      <div className="h-3/5">
        <img
          className="h-full w-full object-cover"
          src="https://s.wsj.net/public/resources/images/BN-XR452_201802_M_20180228165525.gif  "
          alt=""
        />
      </div>

      {/* vehicle details and payment button */}
      <div className="h-2/5 p-4">
        <Captaindetails />
      </div>

      {/*  Vehicle pop up section */}
      <div
        ref={ridePopupPanelRef}
        className="fixed w-full z-10 translate-y-full bottom-0 px-3 py-6 bg-white "
      >
        <RidePopup
          ride = {ride}
          setConfirmRidePopupPanel={setConfirmRidePopupPanel}
          setRidePopupPanel={setRidePopupPanel}
          confirmRide= {confirmRide}
        />
      </div>

      {/* Accept Ride */}
      <div
        ref={confirmRidePopupPanelRef}
        className="fixed w-full h-screen z-10 translate-y-full bottom-0 px-3 py-6 bg-white "
      >
        <ConfirmRidePopup
          ride={ride}
          setConfirmRidePopupPanel={setConfirmRidePopupPanel}
          setRidePopupPanel={setRidePopupPanel}
        />
      </div>
    </div>
  );
};

export default CaptainHome;
