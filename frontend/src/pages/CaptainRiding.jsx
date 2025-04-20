import React, { useRef, useState } from "react";
import { Link , useLocation} from "react-router-dom";
import FinishRide from "../components/FinishRide";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import LiveTracking from "../components/LiveTracking";

const CaptainRiding = () => {

  const [finishRidePanel, setFinishRidePanel] = useState(false);
  const finishRidePanelRef = useRef(null);
  const location= useLocation();
  const rideData = location.state?.ride
  


  useGSAP(
    function () {
      if (finishRidePanel) {
        gsap.to(finishRidePanelRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(finishRidePanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [finishRidePanel]
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
      <div className="h-4/5">
        <LiveTracking/>
      </div>

      <div onClick={()=>{
          setFinishRidePanel(true)
      }} className="bg-yellow-400 h-1/5 p-6 flex items-center relative justify-between">
        <h5
          className="p-1 text-center w-[93%] absolute top-0"
        >
          <i className=" text-2xl  ri-arrow-up-wide-line"></i>
        </h5>
        <h4 className="text-xl font-semibold">4 Km away</h4>
        <button className="bg-green-600 text-white font-semibold p-3 px-10 rounded-lg">
          Complete Ride
        </button>
      </div>

        {/* Finish Ride Panel */}
      <div ref={finishRidePanelRef} className="fixed w-full z-10 translate-y-full bottom-0 px-3 py-6 bg-white ">
         <FinishRide ride = {rideData} setFinishRidePanel={setFinishRidePanel}/>
      </div>


    </div>
  );
};

export default CaptainRiding;
