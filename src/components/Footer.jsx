import React from "react";
import {
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16 px-4 sm:px-8 md:px-16 lg:px-24">

      <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">

        
        <div>
          <h1 className="text-2xl font-semibold text-white mb-4">
            Ali <span className="text-green-500">Therapy</span>
          </h1>
          <p className="text-gray-400 leading-relaxed">
            Providing professional and confidential counselling services
            in Mombasa. Your healing journey starts here.
          </p>
        </div>

  
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Quick Links
          </h3>
          <ul className="space-y-3">
            <li className="hover:text-green-500 cursor-pointer transition">
              Home
            </li>
            <li className="hover:text-green-500 cursor-pointer transition">
              About
            </li>
            <li className="hover:text-green-500 cursor-pointer transition">
              Services
            </li>
            <li className="hover:text-green-500 cursor-pointer transition">
              Contact
            </li>
          </ul>
        </div>

        
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Contact Info
          </h3>
          <div className="space-y-4">

            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-green-500" />
              <a href="tel:0757854308" className="hover:text-green-500">
                0757 854 308
              </a>
            </div>

            <div className="flex items-center gap-3">
              <FaWhatsapp className="text-green-500" />
              <a
                href="https://wa.me/254753879163"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-500"
              >
                0753 879 163
              </a>
            </div>

            <div className="flex items-center gap-3">
              <FaEnvelope className="text-green-500" />
              <span>info@alitherapy.co.ke</span>
            </div>

            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-green-500" />
              <span>Mombasa, Kenya</span>
            </div>

          </div>
        </div>

      
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Follow Us
          </h3>

          <div className="flex gap-4">

            <a
              href="#"
              className="bg-gray-800 p-3 rounded-full hover:bg-green-600 transition"
            >
              <FaFacebookF />
            </a>

            <a
              href="#"
              className="bg-gray-800 p-3 rounded-full hover:bg-green-600 transition"
            >
              <FaInstagram />
            </a>

            <a
              href="#"
              className="bg-gray-800 p-3 rounded-full hover:bg-green-600 transition"
            >
              <FaTwitter />
            </a>

          </div>
        </div>

      </div>

    
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Ali Therapy. All Rights Reserved.
      </div>

    </footer>
  );
};

export default Footer;