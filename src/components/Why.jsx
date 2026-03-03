import React from "react";
import wh from "../assets/why.jpeg";
import { FaUserMd, FaLock, FaHandsHelping } from "react-icons/fa";

const Why = () => {
  return (
    <section className="py-20 px-4 sm:px-8 md:px-16 lg:px-24 bg-gray-50">

      <div className="flex flex-col lg:flex-row items-center gap-12">

        {/* Left Image */}
        <div className="w-full lg:w-1/2">
          <img
            src={wh}
            alt="Ali Therapy Mombasa"
            className="rounded-2xl shadow-lg w-full object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="w-full lg:w-1/2">

          <h1 className="text-3xl sm:text-4xl font-semibold text-gray-800 mb-4">
            Why Choose <span className="text-green-600">Ali Therapy</span>
          </h1>

          <h2 className="text-xl text-gray-600 mb-6">
            Expert Counselling & Compassionate Care
          </h2>

          <p className="text-gray-600 leading-relaxed mb-10">
            At Ali Therapy, we are committed to providing professional,
            confidential, and compassionate counselling services tailored to
            your emotional and mental wellness journey. Our sessions are
            designed to create a safe environment where you can openly express
            yourself, heal from past experiences, and develop healthier coping
            strategies for a balanced and fulfilling life.
          </p>

          {/* Features */}
          <div className="space-y-6">

            {/* Item 1 */}
            <div className="flex items-start gap-4">
              <div className="text-green-600 text-2xl mt-1">
                <FaUserMd />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Certified & Experienced Therapist
                </h3>
                <p className="text-gray-600">
                  Professional counselling backed by experience, ethical
                  practice, and a deep understanding of mental health needs.
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex items-start gap-4">
              <div className="text-green-600 text-2xl mt-1">
                <FaLock />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  100% Confidential Sessions
                </h3>
                <p className="text-gray-600">
                  Your privacy matters. Every session is handled with strict
                  confidentiality and respect.
                </p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="flex items-start gap-4">
              <div className="text-green-600 text-2xl mt-1">
                <FaHandsHelping />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Personalized Care Approach
                </h3>
                <p className="text-gray-600">
                  Every client receives a customized therapy plan suited to
                  their unique challenges and goals.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Why;