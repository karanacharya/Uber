import React, { useContext } from 'react'
import { CaptainDataContext } from "../context/CaptainContext";



const Captaindetails = () => {

  
  const { captain } = useContext(CaptainDataContext);
  
 
  return (
    <div>
         <div className="flex items-center justify-between">
          <div className="flex items-center justify-start gap-3">
            <img
              className="h-16 w-16 rounded-full object-cover"
              src="https://imgs.search.brave.com/Mpac-KOW2uEx8_Ot8ajvzF8kaqCCZRVozZ-SkZnfujQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA2Lzc1Lzc4Lzk5/LzM2MF9GXzY3NTc4/OTk0M18yMDR3dFh2/YlMxa0JUd2JDNGhO/N2tVSGNtRGN0OVIw/di5qcGc"
              alt=""
            />
            <h4 className="text-lg font-medium capitalize">{captain.fullname.firstname + " " + captain.fullname.lastname}</h4>
          </div>

          <div>
            <h4 className="text-xl font-semibold">₹295.20</h4>
            <p className="text-sm text-gray-600">Earned</p>
          </div>
        </div>

        <div className=" flex  p-3 mt-6 bg-gray-100 rounded-xl justify-center gap-5 items-start ">
          <div className="text-center ">
            <i className="text-3xl mb-2  font-thin ri-timer-2-line"></i>
            <h5 className="text-lg font-medium">10.2</h5>
            <p className="text-sm text-gray-600 ">Hours Online</p>
          </div>
          <div className="text-center ">
            <i className="text-3xl mb-2  font-thin ri-speed-up-line"></i>
            <h5 className="text-lg font-medium">10.2</h5>
            <p className="text-sm text-gray-600 ">Hours Online</p>
          </div>
          <div className="text-center ">
            <i className="text-3xl mb-2  font-thin ri-booklet-line"></i>
            <h5 className="text-lg font-medium">10.2</h5>
            <p className="text-sm text-gray-600 ">Hours Online</p>
          </div>
        </div>
    </div>
  )
}

export default Captaindetails
