import React from "react";
import { FaHeart, FaHandsHelping, FaRegSadTear } from "react-icons/fa";

const Specialized = () => {

  const special = [
    {
      icon: <FaHeart size={35} />,
      title: "Marriage Counseling",
      description:
        "We offer marriage counseling to all couples, ensuring that the spark never fades and relationships grow stronger over time.",
      price: "Ksh 5,000 / Session",
    },
    {
      icon: <FaHandsHelping size={35} />,
      title: "Trauma Counselling & Rehabilitation",
      description:
        "Our trauma counselling sessions are designed to help clients overcome past experiences and regain emotional stability.",
      price: "Ksh 4,500 / Session",
    },
    {
      icon: <FaRegSadTear size={35} />,
      title: "Divorce & Marital Counselling",
      description:
        "Supportive sessions to help individuals navigate divorce, heal emotionally, and rebuild with confidence.",
      price: "Ksh 3,500 / Session",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-8 md:px-16 lg:px-24 bg-gray-50">

    
      <div className="text-center mb-14">
        <h1 className="text-3xl sm:text-4xl font-semibold text-gray-800">
          Specialized Paths
        </h1>
        <p className="text-gray-600 mt-3 text-lg">
          Our specialized therapy services tailored to your unique needs
        </p>
      </div>

    
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {special.map((item, index) => (
          <div
            key={index}
            className="group bg-white p-8 rounded-2xl shadow-md transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl cursor-pointer"
          >
            
            <div className="text-green-600 mb-6 transition-transform duration-500 group-hover:scale-110">
              {item.icon}
            </div>

            
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              {item.title}
            </h2>

          
            <p className="text-gray-600 mb-6 leading-relaxed">
              {item.description}
            </p>

          
            <p className="text-green-600 font-semibold">
              {item.price}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Specialized;