import axios from "axios";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { CaptainDataContext } from "../context/CaptainContext";

const CaptainLogin = () => {


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { captain, setCaptain } = useContext(CaptainDataContext);
  const navigate = useNavigate();


  const submitHandler = async (e) => {
    e.preventDefault();

    const captainData = {
      email: email,
      password: password,
    };


    
    // send an api request to backend for logging the captain
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/captains/login`,
        captainData
      );

      if (response.status === 200) {
        const data = response.data;
        setCaptain(data.captain);
        localStorage.setItem("token", data.token);
        navigate("/captain-home");
      }
    } catch (error) {
      console.error(
        "Error occurred:",
        error.response ? error.response.data : error.message
      );
    }



    setEmail("");
    setPassword("");
  };

  return (
    <div className="p-7 h-screen flex flex-col justify-between ">
      <div>
        <img
          className="w-12 mb-4"
          src="https://imgs.search.brave.com/rSuSSYacx1C8jOOc6iUc_xal-ahK3vL90Pl-NKUkJSE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9mcmVl/bG9nb3BuZy5jb20v/aW1hZ2VzL2FsbF9p/bWcvMTY1OTc2MTQy/NXViZXItZHJpdmVy/LWxvZ28tcG5nLnBu/Zw"
          alt=""
        />
        <form onSubmit={submitHandler}>
          <h3 className="text-lg font-medium">What's your email?</h3>
          <input
            className="bg-[#eeeeee] mb-5 border rounded-xl px-4 py-2 w-full mt-2 placeholder:text-base"
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            placeholder="email@example.com"
          />
          <h3 className="text-lg font-medium">Enter your password</h3>
          <input
            className="bg-[#eeeeee] mb-5 border px-4 py-2 rounded-xl w-full mt-2 placeholder:text-base"
            required
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            placeholder="password"
          />

          <button className="bg-black text-white mb-5 px-4 py-2 rounded-xl w-full mt-2 placeholder:text-base">
            Login
          </button>
        </form>
        <p className="text-center">
          Join a fleet?{" "}
          <Link
            className="text-blue-400 ml-2 font-bold text-lg hover:underline"
            to="/captain-signup"
          >
            Register as a Captain
          </Link>
        </p>
      </div>

      <div>
        <Link
          to="/login"
          className="bg-[#feab43] flex items-center justify-center text-white mb-5 px-4 py-2 rounded w-full mt-2 placeholder: font-bold"
        >
          Sign in as User
        </Link>
      </div>
    </div>
  );
};

export default CaptainLogin;
