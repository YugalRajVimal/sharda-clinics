import React from "react";
import { FaHeart } from "react-icons/fa";
import logo from "../assets/logo.jpg";

const About = () => {
  return (
    <div className="pt-16">
      <section className="py-24 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col-reverse md:flex-row  gap-12 items-center">
            <div className="md:w-[60%] prose prose-invert max-w-none">
              <h3 className="text-3xl md:text-4xl font-bold font-montserrat mb-6 tracking-tight">
                About Sharda Clinic
              </h3>

              <p className="text-black font-roboto mb-6 text-lg italic">
                Trusted Healthcare, Compassionate Care — Right Here in Agra.
              </p>

              <p className="text-black font-roboto mb-4">
                Sharda Clinic, led by Maj (Dr.) Vishwa Deepak (Retd.), is a
                premier healthcare facility in Agra, Uttar Pradesh. We are
                dedicated to providing personalized and holistic care, combining
                years of medical expertise with a patient-centered approach.
              </p>

              <p className="text-black font-roboto mb-4">
                Our clinic specializes in managing a wide range of conditions
                including critical care, chronic illnesses, musculoskeletal
                problems, diabetes, hypertension, and holistic wellness
                therapies. Every patient receives an individualized treatment
                plan to ensure optimal health outcomes.
              </p>

              <p className="text-black font-roboto mb-4">
                At Sharda Clinic, we believe that true healing comes from a
                combination of modern medical practice, traditional knowledge,
                and compassionate care. Our team is committed to guiding
                patients through every step of their healthcare journey.
              </p>

              <p className="text-black font-roboto mb-4">
                From preventive care and disease management to rehabilitation
                and lifestyle guidance, we aim to restore balance, enhance
                immunity, and improve the overall quality of life for our
                patients.
              </p>

              <p className="text-black font-roboto mb-4">
                Our services include consultations, diagnostic support, chronic
                disease management, musculoskeletal care, respiratory care, and
                wellness programs. We strive to ensure that each patient feels
                confident, cared for, and supported at every visit.
              </p>

              <p className="text-black font-roboto italic text-right">
                Experience expert healthcare — Trust, Care, and Healing at
                Sharda Clinic.
              </p>
            </div>

            <div className="w-[80%] md:w-[40%] relative aspect-square md:aspect-auto md:h-[600px]">
              <img
                src="banner0.webp"
                alt="Dr. Rama Ayurveda Centre"
                className="w-full h-full object-contain rounded-lg "
              />

              <div className="absolute -bottom-20 md:-bottom-4 -right-4 w-36 h-36 md:w-56 md:h-56 bg-neutral-900 border border-danger/40 rounded-lg p-4 md:p-6 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-3xl md:text-5xl font-bold font-montserrat text-danger shadow-text">
                    15+
                  </p>

                  <p className="text-xs md:text-base text-gray-light font-roboto mt-1 md:mt-2">
                    Years of Trusted Care
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
