import React from "react";
import {
  FiShield,
  FiZap,
  FiUsers,
  FiClock,
  FiHeart,
  FiBarChart2,
} from "react-icons/fi";

const features = [
  {
    icon: <FiShield className="text-blue-600 h-8 w-8" />,
    title: "Experienced Leadership",
    desc: "Led by Maj. (Dr.) Vishwa Deepak (R), with years of experience at Army Hospital (R&R) and top hospitals in Agra.",
  },
  {
    icon: <FiZap className="h-8 w-8 text-green-600" />,
    title: "Comprehensive Care",
    desc: "From diabetes, hypertension, and thyroid to heart disease, asthma, and critical care — all under one roof.",
  },
  {
    icon: <FiUsers className="h-8 w-8 text-purple-600" />,
    title: "Trusted by Thousands",
    desc: "A clinic built on credibility, expertise, and the trust of patients across Agra and beyond.",
  },
  {
    icon: <FiClock className="h-8 w-8 text-yellow-600" />,
    title: "Accessible & Fast",
    desc: "Conveniently located near ISBT, Agra with smooth appointment scheduling and prompt services.",
  },
  {
    icon: <FiHeart className="h-8 w-8 text-red-600" />,
    title: "Compassionate Team",
    desc: "Dedicated staff providing personalized, patient-first care with empathy at every step.",
  },
  {
    icon: <FiBarChart2 className="h-8 w-8 text-teal-600" />,
    title: "Proven Outcomes",
    desc: "Effective diagnosis and treatments with a track record of successful recovery and patient satisfaction.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 pt-50 md:pt-10 bg-white-custom">
      <div className="mx-auto container px-6">
        {/* Title */}
        <div className="mx-auto max-w-3xl mb-16 text-center">
          <h2 className="font-bold text-3xl mb-4">
            Why Choose <span className="text-medical-gradient">Sharda Clinic</span>
          </h2>
          <p className="text-gray-600">
            Delivering trusted medical care in Agra — where your health is our
            top priority, combining expertise with compassionate treatment.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-xl hover:shadow-xl transition-shadow border border-gray-200 p-8"
            >
              <div className="mb-4 inline-block p-3 rounded-lg bg-blue-100">
                {feature.icon}
              </div>
              <h3 className="font-bold text-xl mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
