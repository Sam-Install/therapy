import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "Are therapy sessions confidential?",
      answer:
        "Yes. All sessions at Ali Therapy are strictly confidential. Your privacy and trust are our top priority.",
    },
    {
      question: "Do you offer online counselling sessions?",
      answer:
        "Yes, we provide both in-person sessions at our office and secure virtual sessions via video call.",
    },
    {
      question: "How long does a therapy session last?",
      answer:
        "A standard therapy session lasts between 45 minutes to 1 hour, depending on your specific needs.",
    },
    {
      question: "How do I make payment?",
      answer:
        "Payments are securely made via M-Pesa Till Number before your session. No extra charges apply.",
    },
    {
      question: "Can I reschedule my appointment?",
      answer:
        "Yes, appointments can be rescheduled with prior notice. Kindly inform us in advance to secure another suitable time slot.",
    },
  ];

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-4 sm:px-8 md:px-16 lg:px-24 bg-gray-50">

      {/* Heading */}
      <div className="text-center mb-16">
        <h1 className="text-3xl sm:text-4xl font-semibold text-gray-800 mb-4">
          Frequently Asked Questions
        </h1>
        <p className="text-gray-600 text-lg">
          Find answers to common questions about our therapy services
        </p>
      </div>

      {/* FAQ List */}
      <div className="max-w-3xl mx-auto space-y-6">

        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md p-6 cursor-pointer transition-all duration-300 hover:shadow-lg"
            onClick={() => toggleFaq(index)}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold text-gray-800">
                {faq.question}
              </h3>

              <FaChevronDown
                className={`transition-transform duration-300 ${
                  activeIndex === index ? "rotate-180 text-green-600" : ""
                }`}
              />
            </div>

            {activeIndex === index && (
              <p className="mt-4 text-gray-600 leading-relaxed">
                {faq.answer}
              </p>
            )}
          </div>
        ))}

      </div>

    </section>
  );
};

export default Faq;