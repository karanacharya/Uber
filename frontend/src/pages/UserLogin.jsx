import React, { useContext, useState } from "react";
import { Link ,useNavigate } from "react-router-dom";
import { UserDataContext } from "../context/UserContext";
import axios from "axios";


const UserLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userData, setUserData] = useState({});;
  const navigate = useNavigate();
  
  
  const { user, setUser } = useContext(UserDataContext)


  //what to do when the form is submitted
  const submitHandler = async (e)=>{
    e.preventDefault();

   const userData = {
    email: email,
    password: password
  }
    
        //send data to backend for login of user
        try {
          const response = await axios.post(
              `${import.meta.env.VITE_BASE_URL}/users/login`,
              userData
          );
          
          if (response.status === 200) {
              const data = response.data;
              setUser(data.user);
              localStorage.setItem('token',data.token);
              navigate("/home");
          }
      } catch (error) {
         
          console.error("Error occurred:", error.response ? error.response.data : error.message);
      }




    setEmail('');
    setPassword('')
    
  }
  
  return (
    <div className="p-7 h-screen flex flex-col justify-between ">
      <div>
        <img
          className="w-16 mb-4"
          src="https://imgs.search.brave.com/FZq7YFqzVbkjhipVXmxfaZY-RmPwy3wsG0WV1UdM8bs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/cy13b3JsZC5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjAv/MDUvVWJlci1Mb2dv/LTcwMHgzOTQucG5n"
          alt=""
        />
        <form onSubmit={submitHandler}>
          <h3 className="text-lg font-medium">What's your email?</h3>
          <input
            className="bg-[#eeeeee] mb-5 border rounded-xl px-4 py-2 w-full mt-2 placeholder:text-base"
            required
            value={email}
            onChange={(e)=>{
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
            onChange={(e)=>{
              setPassword(e.target.value)
            }}
            type="password"
            placeholder="password"
          />

          <button className="bg-black text-white mb-5 px-4 py-2 rounded-xl w-full mt-2 placeholder:text-base">
            Login
          </button>
        </form>
        <p className="text-center">
          New Here?{" "}
          <Link 
           className="text-blue-400 ml-2 font-bold text-lg hover:underline" 
           to="/signup">
            Create an Account
          </Link>
        </p>
      </div>

      <div>
        <Link
         to='/captain-login'
          className="bg-[#10b461] flex items-center justify-center text-white mb-5 px-4 py-2 rounded w-full mt-2 placeholder: font-bold">
          Sign in as Captain
        </Link>
      </div>
    </div>
  );
};

export default UserLogin;
