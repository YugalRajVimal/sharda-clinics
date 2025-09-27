import React from "react";
import Button from "../components/Button";

const services = [
  {
    title: "Critical Care & Cardiology",
    desc: "Expert management of heart diseases, cardiac emergencies, and critical medical conditions.",
  },
  {
    title: "Diabetes Management",
    desc: "Comprehensive care for diabetes, including lifestyle guidance and long-term monitoring.",
  },
  {
    title: "Hypertension Control",
    desc: "Effective treatment plans to manage and control high blood pressure safely.",
  },
  {
    title: "Thyroid Disorders",
    desc: "Diagnosis and treatment for thyroid-related conditions with personalized care.",
  },
  {
    title: "Asthma & Respiratory Care",
    desc: "Advanced management of asthma, allergies, and other lung-related disorders.",
  },
  {
    title: "Joint Pain & Arthritis",
    desc: "Relief and treatment for arthritis, sciatica, and musculoskeletal problems.",
  },
  {
    title: "Neurological Disorders",
    desc: "Care for conditions such as headache, epilepsy, stroke, and neuropathies.",
  },
  {
    title: "Gastrointestinal Issues",
    desc: "Treatment for colitis, ulcers, pancreatitis, abdominal pain, and digestive disorders.",
  },
  {
    title: "Infectious Diseases",
    desc: "Specialized care for dengue, malaria, typhoid, and other acute infections.",
  },
];

const OurServices = () => {
  return (
    <section className="py-20 bg-blue-50">
      <div className="mx-auto container px-6">
        {/* Title */}
        <div className="mx-auto max-w-3xl mb-16 text-center">
          <h2 className="font-bold text-3xl mb-4">
            Our <span className="text-medical-gradient">Services</span>
          </h2>
          <p className="text-gray-600">
            At Sharda Clinic, Agra, we provide comprehensive medical care —
            from everyday health concerns to specialized treatments in
            cardiology, diabetes, critical care, and more.
          </p>
        </div>

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

        {/* Button */}
        <div className="mt-12 text-center">
          <Button text="View All Services" to="/services" />
        </div>
      </div>
    </section>
  );
};

export default OurServices;
