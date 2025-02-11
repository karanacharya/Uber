import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CaptainDataContext } from "../context/CaptainContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CaptainSignup = () => {
  const navigate = useNavigate();
  const { captain, setCaptain } = useContext(CaptainDataContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [vehicleColor, setVehicleColor] = useState("");
  const [vehiclePlate, setVehiclePlate] = useState("");
  const [vehicleCapacity, setVehicleCapacity] = useState("");
  const [vehicleType, setVehicleType] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    const captainData = {
      fullname: {
        firstname: firstName,
        lastname: lastName,
      },
      email: email,
      password: password,
      vehicle: {
        color: vehicleColor,
        plate: vehiclePlate,
        capacity: vehicleCapacity,
        vehicleType: vehicleType,
      },
    };

    

    //Send an api request to register a captain

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/captains/register`,
        captainData
      );

      if (response.status === 201) {
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
    setFirstName("");
    setLastName("");
    setVehicleColor("");
    setVehicleCapacity("");
    setVehiclePlate("");
    setVehicleType("");
  };

  return (
    <div className="p-7 h-screen flex flex-col justify-between ">
      <div>
        <img
          className="w-12 mb-4"
          src="https://imgs.search.brave.com/rSuSSYacx1C8jOOc6iUc_xal-ahK3vL90Pl-NKUkJSE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9mcmVl/bG9nb3BuZy5jb20v/aW1hZ2VzL2FsbF9p/bWcvMTY1OTc2MTQy/NXViZXItZHJpdmVy/LWxvZ28tcG5nLnBu/Zw"
          alt=""
        />
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >
          <h3 className="text-lg font-medium">Enter your name</h3>
          <div className="flex gap-3 mb-3">
            <input
              className="bg-[#eeeeee] w-1/2 border rounded px-4 py-2 mt-2 placeholder:text-base"
              required
              type="text"
              placeholder="First name"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
            <input
              className="bg-[#eeeeee] w-1/2 border rounded px-4 py-2 mt-2 placeholder:text-base"
              required
              type="text"
              placeholder="Last name"
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />
          </div>

          <h3 className="text-lg font-medium">What's your email?</h3>
          <input
            className="bg-[#eeeeee] mb-3 border rounded px-4 py-2 w-full mt-2 placeholder:text-base"
            required
            type="email"
            placeholder="email@example.com"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <h3 className="text-lg font-medium">Enter your password</h3>
          <input
            className="bg-[#eeeeee] mb-3 border px-4 py-2 rounded w-full mt-2 placeholder:text-base"
            required
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />

          <h3 className="text-lg font-medium">Vehicle Information</h3>

          <div className="flex gap-3 mb-2">
            <input
              className="bg-[#eeeeee] w-1/2 border rounded px-4 py-2 mt-2 placeholder:text-base"
              required
              type="text"
              placeholder="Vehicle Type"
              value={vehicleType}
              onChange={(e) => {
                setVehicleType(e.target.value);
              }}
              list="vehicleTypes"
            />
            <datalist id="vehicleTypes">
              <option value="car">car</option>
              <option value="auto">auto</option>
              <option value="motorcycle">motorcycle</option>
            </datalist>

            <input
              className="bg-[#eeeeee] w-1/2 border rounded px-4 py-2 mt-2 placeholder:text-base"
              required
              type="text"
              placeholder="Vehicle No."
              value={vehiclePlate}
              onChange={(e) => {
                setVehiclePlate(e.target.value);
              }}
            />
          </div>

          <div className="flex gap-3 mb-4">
            <input
              className="bg-[#eeeeee] w-1/2 border rounded px-4 py-2 mt-2 placeholder:text-base"
              required
              type="text"
              placeholder="Vehicle color"
              value={vehicleColor}
              onChange={(e) => {
                setVehicleColor(e.target.value);
              }}
            />
            <input
              className="bg-[#eeeeee] w-1/2 border rounded px-4 py-2 mt-2 placeholder:text-base"
              required
              type="number"
              placeholder="Vehicle Capacity"
              value={vehicleCapacity}
              onChange={(e) => {
                setVehicleCapacity(e.target.value);
              }}
            />
          </div>

          <button className="bg-black text-white mb-5 px-4 py-2 rounded w-full mt-2 placeholder:text-base">
            Register
          </button>
        </form>
        <p className="text-center">
          Already have a Account?
          <Link
            className="text-blue-400 ml-2 font-bold text-lg hover:underline"
            to="/captain-login"
          >
            Login
          </Link>
        </p>
      </div>

      <div>
        <p className="text-xs">
          This site is protected by reCAPTCHA and the{" "}
          <span className="underline">Google Privacy Policy</span> and Terms of
          Service apply
        </p>
      </div>
    </div>
  );
};

export default CaptainSignup;
