import React, { useState } from "react";
import {
  FaCalendarCheck,
  FaMobileAlt,
  FaVideo,
  FaWhatsapp,
  FaPhoneAlt,
  FaWpforms,
} from "react-icons/fa";

const Booking = () => {
  const [showForm, setShowForm] = useState(false);

  const process = [
    {
      icon: <FaCalendarCheck />,
      title: "Book A Session",
      description:
        "Book your preferred session via call, WhatsApp, or through our online booking form.",
    },
    {
      icon: <FaMobileAlt />,
      title: "Secure Payment via M-Pesa",
      description:
        "Confirm your session by making payment through our official M-Pesa Till Number. No hidden charges.",
    },
    {
      icon: <FaVideo />,
      title: "Attend Your Session",
      description:
        "Meet us physically at our office or join virtually via video call in a safe environment.",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-8 md:px-16 lg:px-24 bg-white">

      {/* Heading */}
      <div className="text-center mb-16">
        <h1 className="text-3xl sm:text-4xl font-semibold text-gray-800 mb-4">
          Want To Start Your Healing Journey?
        </h1>
        <h2 className="text-lg text-gray-600">
          Follow These Three Simple & Seamless Steps
        </h2>
      </div>

      {/* Process Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-16">
        {process.map((item, index) => (
          <div
            key={index}
            className="relative bg-gray-50 p-8 rounded-2xl shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
          >
            <span className="absolute top-6 right-6 text-5xl font-bold text-gray-200">
              0{index + 1}
            </span>

            <div className="text-green-600 text-3xl mb-6">
              {item.icon}
            </div>

            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              {item.title}
            </h3>

            <p className="text-gray-600 leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row justify-center gap-6">

        {/* WhatsApp */}
        <a
          href="https://wa.me/254753879163?text=Hello%20Ali%20Therapy,%20I%20would%20like%20to%20book%20a%20session."
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full shadow-md transition duration-300"
        >
          <FaWhatsapp />
          Book via WhatsApp
        </a>

        {/* Call */}
        <a
          href="tel:0757854308"
          className="flex items-center justify-center gap-3 bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-full shadow-md transition duration-300"
        >
          <FaPhoneAlt />
          Call Now
        </a>

        {/* Form Button */}
        <button
          onClick={() => setShowForm(!showForm)}
          className="flex items-center justify-center gap-3 bg-white border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-6 py-3 rounded-full shadow-md transition duration-300"
        >
          <FaWpforms />
          Book via Form
        </button>
      </div>

      {/* Booking Form */}
      {showForm && (
        <div className="mt-16 max-w-2xl mx-auto bg-gray-50 p-8 rounded-2xl shadow-lg">
          <h3 className="text-2xl font-semibold text-center text-gray-800 mb-8">
            Book Your Session
          </h3>

          <form className="space-y-5">

            <input
              type="text"
              placeholder="First Name"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
            />

            <input
              type="text"
              placeholder="Second Name"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
            />

            <input
              type="date"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
            />

            <textarea
              placeholder="Additional Message (Optional)"
              rows="4"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
            />

            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg transition duration-300"
            >
              Submit Booking
            </button>

          </form>
        </div>
      )}

    </section>
  );
};

export default Booking;