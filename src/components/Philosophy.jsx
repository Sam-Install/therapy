import React from "react";
import dt from "../assets/doctor.jpg";
import wh from "../assets/why.jpeg";
import { motion } from "framer-motion";
import {
  FaHeart,
  FaUserShield,
  FaHandshake,
  FaUserGraduate,
} from "react-icons/fa";

const Philosophy = () => {
  // Stagger container
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // Card animation
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 80 },
    },
  };

  // Stats animation
  const statVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: { type: "spring", stiffness: 120, damping: 8 },
    },
  };

  return (
    <section className="py-20 px-4 sm:px-8 md:px-16 lg:px-24 bg-gray-50">

      {/* ================= PHILOSOPHY ================= */}
      <div className="flex flex-col lg:flex-row items-center gap-12 mb-24">

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 60 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2"
        >
          <img
            src={wh}
            alt="Therapy Philosophy"
            className="rounded-2xl shadow-lg w-full object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 60 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2"
        >
          <h1 className="text-3xl sm:text-4xl font-semibold text-gray-800 mb-4">
            Our Philosophy
          </h1>

          <h2 className="text-xl text-green-600 mb-6">
            Compassion. Confidentiality. Commitment.
          </h2>

          <p className="text-gray-600 leading-relaxed mb-6">
            At Ali Therapy, we believe healing begins with understanding.
            We create a safe, supportive space where clients can openly
            express themselves without fear of judgment.
          </p>

          <p className="text-gray-600 leading-relaxed">
            We guide individuals and couples through emotional healing,
            trauma recovery, and personal growth using ethical,
            client-centered approaches.
          </p>
        </motion.div>
      </div>

      {/* ================= CREDENTIALS ================= */}
      <div className="mb-24">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-10">
          Qualifications & Credentials
        </h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 text-center"
        >
          {[
            { icon: <FaUserGraduate />, text: "Bachelor / Masters in Psychology" },
            { icon: <FaUserShield />, text: "Licensed & Certified Counsellor" },
            { icon: <FaHandshake />, text: "Member – Kenya Counselling Association" },
            { icon: <FaHeart />, text: "5+ Years Professional Experience" },
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                y: -12,
                scale: 1.06,
                rotate: 1.5,
                boxShadow: "0px 15px 35px rgba(0,0,0,0.15)",
              }}
              transition={{ type: "spring", stiffness: 200 }}
              className="bg-white p-8 rounded-2xl shadow-md cursor-pointer"
            >
              <div className="text-green-600 text-3xl mx-auto mb-4">
                {item.icon}
              </div>
              <p className="text-gray-700 font-semibold">
                {item.text}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* ================= STATS ================= */}
      <div className="bg-green-600 text-white rounded-2xl p-12 mb-24">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 text-center"
        >
          {[
            { number: "500+", label: "Sessions Conducted" },
            { number: "95%", label: "Client Satisfaction" },
            { number: "5+", label: "Years Experience" },
            { number: "100%", label: "Confidential" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              variants={statVariants}
              whileHover={{
                scale: 1.15,
                rotate: -1,
              }}
              transition={{ type: "spring", stiffness: 250 }}
              className="cursor-pointer"
            >
              <h3 className="text-4xl font-bold">{stat.number}</h3>
              <p>{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* ================= CALL TO ACTION ================= */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 60 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">
          Ready To Begin Your Healing Journey?
        </h2>

        <motion.a
          href="/booking"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full shadow-lg"
        >
          Book a Session Today
        </motion.a>
      </motion.div>

    </section>
  );
};

export default Philosophy;