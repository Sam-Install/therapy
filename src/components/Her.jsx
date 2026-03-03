"use client";
import React, { useState, useEffect } from "react";
import h1 from "../assets/hero1.jpeg";
import h2 from "../assets/hero2.jpeg";
import h3 from "../assets/hero3.jpeg";
import { Link } from "react-router-dom";

const slides = [
  {
    image: h1,
    title1: "Welcome",
    title2: "To Ali Therapy",
    text: "Professional therapy services designed to support your mental wellness journey.",
  },
  {
    image: h2,
    title1: "Heal",
    title2: "Grow With Confidence",
    text: "Safe, supportive, and confidential therapy sessions tailored for you.",
  },
  {
    image: h3,
    title1: "Start",
    title2: "Your Healing Journey",
    text: "Take the first step toward emotional balance and inner peace.",
  },
];

const Her = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          
          <img
            src={slide.image}
            alt="Hero"
            className="w-full h-full object-cover"
          />

          
          <div className="absolute inset-0 bg-black/60" />
        </div>
      ))}

      
      <div className="absolute inset-0 flex items-center justify-center text-center px-6 sm:px-12">
        <div className="max-w-3xl text-white space-y-6">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold leading-tight">
            {slides[current].title1}
          </h1>
          <h2 className="text-xl sm:text-3xl font-light">
            {slides[current].title2}
          </h2>
          <p className="text-sm sm:text-lg text-gray-200 max-w-2xl mx-auto">
            {slides[current].text}
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
         <Link to='/about'>
         
            <button className="px-8 py-3 bg-green-500 hover:bg-green-600 transition rounded text-white font-medium">
              Learn More
            </button>
         
         </Link>
         <Link to='booking'>
         
         <button className="px-8 py-3 bg-orange-500 hover:bg-orange-600 transition rounded text-white font-medium">
              Book Now
            </button>
         
         </Link>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Her;