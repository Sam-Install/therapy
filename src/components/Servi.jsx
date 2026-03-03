import React from "react";
import { motion } from "framer-motion";
import {
  FaUser,
  FaHeart,
  FaUsers,
  FaChild,
  FaBrain,
  FaComments,
  FaLaptop,
  FaHandsHelping,
  FaSmile,
  FaBook,
  FaBalanceScale,
  FaChartLine,
} from "react-icons/fa";

const services = [
  {
    icon: <FaUser />,
    title: "Individual Counselling",
    description:
      "One-on-one therapeutic support for personal growth, self-exploration, and emotional wellbeing.", 
  },
  {
    icon: <FaHeart />,
    title: "Couples & Relationship Therapy",
    description:
      "Support to strengthen communication and connection between partners.", 
  },
  {
    icon: <FaUsers />,
    title: "Family Counselling",
    description:
      "Helps families improve communication and resolve conflicts together.", 
  },
  {
    icon: <FaChild />,
    title: "Child & Youth Support",
    description:
      "Focused care for children and adolescents navigating emotions and challenges.", 
  },
  {
    icon: <FaBrain />,
    title: "Stress & Anxiety Counselling",
    description:
      "Evidence-based strategies to manage anxiety and stress.", 
  },
  {
    icon: <FaHandsHelping />,
    title: "Trauma & Grief Support",
    description:
      "Guided support to heal from past trauma and loss.", 
  },
  {
    icon: <FaComments />,
    title: "Group Therapy",
    description:
      "Peer-based counselling sessions to share experiences and support healing.", 
  },
  {
    icon: <FaLaptop />,
    title: "Online Counselling",
    description:
      "Virtual counselling sessions for flexible mental health support.", 
  },
  {
    icon: <FaSmile />,
    title: "Depression Support",
    description:
      "Compassionate guidance to navigate feelings of depression.", 
  },
  {
    icon: <FaBook />,
    title: "Career & Academic Counselling",
    description:
      "Guidance for educational and career decisions and transitions.", 
  },
  {
    icon: <FaBalanceScale />,
    title: "Substance Use & Rehab Support",
    description:
      "Supportive therapy focused on addiction and recovery pathways.", 
  },
  {
    icon: <FaChartLine />,
    title: "Life Transitions & Goal Planning",
    description:
      "Assistance through life changes like career shifts or major transitions.", 
  },
];

const Servi = () => {
  return (
    <div className="py-20 px-4 sm:px-8 md:px-16 lg:px-24">
      <h1 className="text-4xl font-bold text-center mb-10">
        Our Counselling Services
      </h1>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-xl shadow-lg text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.45 }}
          >
            <div className="text-4xl text-blue-600 mb-4">
              {service.icon}
            </div>
            <h3 className="text-2xl font-semibold mb-2">
              {service.title}
            </h3>
            <p className="text-gray-700">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Servi;