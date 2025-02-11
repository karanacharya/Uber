import React, { useContext, useState } from "react";
import { Link ,useNavigate } from "react-router-dom";
import axios from "axios";
import  { UserDataContext }  from "../context/UserContext";

const UserSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userData, setUserData] = useState({});
  const navigate = useNavigate();
   

  //import from usercontext file

  const { user, setUser } = useContext(UserDataContext)




  const submitHandler =  async(e) => {
    e.preventDefault();
    const newUser = {
      fullname: {
        firstname: firstName,
        lastname: lastName, 
      },
      email: email,
      password: password,
    };
  

    
    //send the request to backend
    try {
     
      const response = await axios.post(
          `${import.meta.env.VITE_BASE_URL}/users/register`,
          newUser
        
      );      
      if (response.status === 201) {
          const data = response.data;
          setUser(data.user);
          localStorage.setItem('token',data.token)
          navigate("/home");
      }
  } catch (error) {
     
      console.error("Error occurred:", error.response ? error.response.data : error.message);
  }

   
    
    
    setEmail("");
    setPassword("");
    setFirstName("");
    setLastName("");
  }




  return (
    <div className="p-7 h-screen flex flex-col justify-between ">
      <div>
        <img
          className="w-12 mb-4"
          src="https://imgs.search.brave.com/FZq7YFqzVbkjhipVXmxfaZY-RmPwy3wsG0WV1UdM8bs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/cy13b3JsZC5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjAv/MDUvVWJlci1Mb2dv/LTcwMHgzOTQucG5n"
          alt=""
        />
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >
          <h3 className="text-lg font-medium">Enter your name</h3>
          <div className="flex gap-3 mb-4">
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
            className="bg-[#eeeeee] mb-5 border rounded px-4 py-2 w-full mt-2 placeholder:text-base"
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
            className="bg-[#eeeeee] mb-5 border px-4 py-2 rounded w-full mt-2 placeholder:text-base"
            required
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />

          <button className="bg-black text-white mb-5 px-4 py-2 rounded w-full mt-2 placeholder:text-base">
            Create Account
          </button>
        </form>
        <p className="text-center">
          Already have a Account?
          <Link
            className="text-blue-400 ml-2 font-bold text-lg hover:underline"
            to="/login"
          >
            Login
          </Link>
        </p>
      </div>

      <div>
        <p className="text-xs">
          By proceeding,you consent to get calls,WhatApp or SMS messages,
          including by automated means,from Uber and its affiliates to the
          number or email provided
        </p>
      </div>
    </div>
  );
};

export default UserSignup;
