import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { CaptainDataContext } from "../context/CaptainContext";

const CaptainProtectWrapper = ({ children }) => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const { captain, setCaptain } = useContext(CaptainDataContext);



  
 
  useEffect(() => {

   
    if (!token) {
      navigate("/captain-login");
    }

    //Fetch captains profile using token
    axios
      .get(`${import.meta.env.VITE_BASE_URL}/captains/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          setCaptain(response.data.captain);
          setIsLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
        localStorage.removeItem("token");
        navigate("/captain-login");
      });
      
  }, [token]);

   if(captain == null){
     return <div>Loading the captain is null...</div>
   }
   
   

  if (isLoading) {
    return <div>Loading....</div>;
  }

  return <>{children}</>;
};

export default CaptainProtectWrapper;
