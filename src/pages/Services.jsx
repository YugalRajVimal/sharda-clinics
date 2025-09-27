import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const services = [
  {
    title: "Critical Care & Heart Disease",
    desc: "Advanced treatment for cardiac conditions, heart attack, and life-threatening medical emergencies.",
  },
  {
    title: "Diabetes Management",
    desc: "Comprehensive care for diabetes including diagnosis, treatment, and long-term health monitoring.",
  },
  {
    title: "Hypertension Control",
    desc: "Specialized plans to manage and control high blood pressure effectively and safely.",
  },
  {
    title: "Thyroid Disorders",
    desc: "Diagnosis and treatment for hypothyroidism, hyperthyroidism, and other thyroid conditions.",
  },
  {
    title: "Asthma & Respiratory Diseases",
    desc: "Expert care for asthma, COPD, allergies, and other respiratory problems.",
  },
  {
    title: "Joint Pain & Arthritis",
    desc: "Relief and treatment for arthritis, sciatica, frozen shoulder, and chronic joint pain.",
  },
  {
    title: "Neurological Disorders",
    desc: "Treatment for stroke, migraine, epilepsy, neuropathy, and other neurological issues.",
  },
  {
    title: "Gastrointestinal Disorders",
    desc: "Care for colitis, ulcers, pancreatitis, constipation, acidity, and abdominal pain.",
  },
  {
    title: "Liver & Kidney Diseases",
    desc: "Management of liver problems, jaundice, hepatitis, and kidney-related issues.",
  },
  {
    title: "Infectious Diseases",
    desc: "Treatment for dengue, malaria, typhoid, fever, and other acute infections.",
  },
  {
    title: "General Health & Preventive Care",
    desc: "Routine check-ups, allergy care, and holistic management for overall wellness.",
  },
];

const Services = () => {
  return (
    <section className="py-16 md:py-24 bg-blue-50">
      <div className="py-10 px-4 sm:px-8 md:px-16 lg:px-24 rounded-2xl shadow-sm">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4">
          Our <span className="text-medical-gradient">Services</span>
        </h2>

        {/* Description */}
        <p className="text-center text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-10">
          At Sharda Clinic, Agra, we provide comprehensive medical care —
          from routine check-ups to advanced treatment in cardiology,
          diabetes, neurology, and critical care. Your health is our priority.
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition transform hover:-translate-y-1"
            >
              <h3 className="text-lg sm:text-xl font-semibold text-medical-gradient mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
