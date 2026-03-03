"use client";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="absolute z-50 top-0 left-0 w-full flex items-center justify-between py-5 px-4 sm:px-8">

      
      <h1 className="text-lg font-semibold text-white">
        Ali<span className="text-green-500">Therapy</span>
      </h1>

      
      <ul className="hidden sm:flex gap-6 text-white">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/services">Services</a></li>
        <li><a href="/booking">Booking</a></li>
      </ul>

      
      <div className="flex items-center gap-3">
        <button className="hidden sm:block bg-orange-500 text-sm px-6 py-2 rounded text-white">
          Admin
        </button>

        
        <GiHamburgerMenu
          onClick={() => setVisible(true)}
          className="text-2xl cursor-pointer sm:hidden"
        />
      </div>

      
      <div
        className={`fixed top-0 right-0 h-full w-2/3 bg-white shadow-lg transform transition-transform duration-300 ${
          visible ? "translate-x-0" : "translate-x-full"
        } sm:hidden`}
      >
        <div className="flex justify-end p-5">
          <IoMdClose
            onClick={() => setVisible(false)}
            className="text-2xl cursor-pointer"
          />
        </div>

        <ul className="flex flex-col items-center gap-6 mt-10 text-lg">
          <li><a href="/" onClick={()=>setVisible(false)}>Home</a></li>
          <li><a href="/about" onClick={()=>setVisible(false)}>About</a></li>
          <li><a href="/services" onClick={()=>setVisible(false)}>Services</a></li>
          <li><a href="/booking" onClick={()=>setVisible(false)}>Booking</a></li>
          <button className="bg-orange-500 text-white px-6 py-2 rounded">
            Admin
          </button>
        </ul>
      </div>

    </div>
  );
};

export default Navbar;