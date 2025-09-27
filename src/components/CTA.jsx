import React, { useCallback } from "react";
import { Link } from "react-router-dom";

const CTA = () => {
  const useScrollTo = () =>
    useCallback((id) => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }, []);

  const scrollTo = useScrollTo();

  return (
    <section className="overflow-hidden relative bg-medical-gradient py-10">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <svg className="w-full h-full opacity-10" viewBox="0 0 800 800">
          <defs>
            <pattern
              id="grid-pattern"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                strokeWidth="1"
                stroke="white"
                fill="none"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
      </div>

      {/* Content */}
      <div className="mx-auto container px-6 relative z-10">
        <div className="flex flex-col items-center gap-10  justify-between">
          <div className="mb-8 max-w-2xl md:mb-0">
            <h2 className="font-bold text-3xl mb-3 !text-white">
              Ready for Expert, Compassionate Medical Care?
            </h2>
            <p className="text-blue-100">
              Book your appointment at{" "}
              <span className="font-semibold">Sharda Clinic, Agra</span>, led by{" "}
              Maj (Dr.) Vishwa Deepak (Retd.), and take the first step toward
              better health with trusted, personalized treatment.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col gap-4 sm:flex-row">
            {/* Appointment */}
            <Link
              onClick={() => scrollTo("appointment")}
              className="font-medium items-center inline-flex btn-medical justify-center px-8 py-3.5 rounded-full shadow-lg bg-white hover:bg-blue-100 transition cursor-pointer"
            >
              <span className="mr-2 !text-blue-700">Book Appointment</span>
            </Link>

            {/* Contact */}
            <Link
              to="/contact"
              className="transition-colors text-white inline-flex items-center border-2 border-white justify-center px-8 py-3.5 rounded-full cursor-pointer"
            >
              <span>Contact Us</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
