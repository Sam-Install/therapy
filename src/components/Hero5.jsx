import React from "react";
import th from "../assets/therapy.jpg"; 

const Hero5 = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center">

    
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${th})` }}
      />

      
      <div className="absolute inset-0 bg-black/60" />

      
      <div className="relative z-10 text-center text-white px-4">

        
        <p className="text-sm sm:text-base mb-4 text-gray-200">
          Home  <span className="mx-2">Services</span> 
        </p>

        
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-6">
          About Ali Therapy
        </h1>

        
        <a
          href="/booking"
          className="inline-block bg-green-600 hover:bg-green-700 px-8 py-2 rounded-full text-white transition duration-300 shadow-lg"
        >
          Book Now
        </a>

      </div>

    </section>
  );
};

export default Hero5;