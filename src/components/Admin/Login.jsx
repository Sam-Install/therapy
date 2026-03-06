"use client";
import React, { useState } from "react";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [showPassword,setShowPassword] = useState(false);
  const [error,setError] = useState("");

  const handleLogin = async (e) => {

    e.preventDefault();

    const response = await fetch("http://127.0.0.1:8000/api/authenticate",{

      method:"POST",

      headers:{
        "Content-Type":"application/json",
        "Accept":"application/json"
      },

      body: JSON.stringify({
        email:email,
        password:password
      })

    });

    const data = await response.json();

    if(data.status === true){

      // save token
      localStorage.setItem("token",data.token);
      localStorage.setItem("user_id",data.id);

      // redirect
      window.location.href = "/dashboard";

    }else{

      setError(data.message);

    }

  };

  return (

    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">

      <div className="bg-white shadow-2xl rounded-xl p-8 w-full max-w-md">

        <h1 className="text-3xl font-bold text-center mb-6">
          Admin Login
        </h1>

        {error && (
          <div className="bg-red-100 text-red-600 p-2 rounded mb-4 text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-5">

          {/* EMAIL */}
          <div className="relative">

            <FaEnvelope className="absolute top-4 left-3 text-gray-400"/>

            <input
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              className="w-full border rounded-lg py-3 pl-10 focus:ring-2 focus:ring-green-500 outline-none"
            />

          </div>

          {/* PASSWORD */}
          <div className="relative">

            <FaLock className="absolute top-4 left-3 text-gray-400"/>

            <input
              type={showPassword ? "text":"password"}
              placeholder="Enter Password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              className="w-full border rounded-lg py-3 pl-10 pr-10 focus:ring-2 focus:ring-green-500 outline-none"
            />

            <div
              onClick={()=>setShowPassword(!showPassword)}
              className="absolute right-3 top-4 cursor-pointer text-gray-500"
            >
              {showPassword ? <FaEyeSlash/> : <FaEye/>}
            </div>

          </div>

          <button className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700">
            Login
          </button>

        </form>

      </div>

    </div>
  );
};

export default Login;