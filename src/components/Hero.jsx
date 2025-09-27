import { useState, useEffect, useCallback } from "react";
import { FaPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FaArrowRight, FaCircleInfo } from "react-icons/fa6";
import Stats from "./Stats";
import HeroRight from "./HeroRight";

const Hero = () => {
  const [shown, setShown] = useState(false);

  useEffect(() => {
    setTimeout(() => setShown(true), 200);
  }, []);

  // ✅ Smooth Scroll Hook (same file)
  const useScrollTo = () =>
    useCallback((id) => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }, []);

  const scrollTo = useScrollTo();

  return (
    <section className="relative min-h-screen h-[160vh] md:h-auto" id="home">
      <div className="absolute inset-0 bg-blue-50 ">
        {/* Background pattern */}
        <div className="absolute inset-0 -z-10">
          <svg className="max-w-full h-full opacity-10" viewBox="0 0 800 800">
            <defs>
              <pattern
                id="grid"
                width="50"
                height="50"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 50 0 L 0 0 0 50"
                  strokeWidth="1"
                  stroke="#1a6dff"
                  fill="none"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="flex justify-center container flex-col mx-auto px-6 py-20 relative z-10">
          <div className="flex items-center flex-col-reverse md:flex-row">
            <div
              className={`mb-16 md:mb-0 md:w-1/2 transition duration-1000 delay-300 h-[80vh] ${
                shown
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-12"
              }`}
            >
              <div className="inline-block">
                <div className="mb-6 bg-white px-4 py-2 inline-flex items-center rounded-full shadow-md">
                  <FaPlus />
                  <span className="font-medium text-blue-800 text-sm">
                    Your Health • Our Priority
                  </span>
                </div>
                <h1 className="font-bold mb-6 leading-tight lg:text-6xl md:text-5xl text-4xl">
                  Welcome to{" "}
                  <span className="relative text-medical-gradient">
                    Sharda Clinic
                  </span>
                  <svg
                    className="max-w-full -bottom-2 absolute hidden left-0 md:block opacity-70"
                    viewBox="0 0 300 10"
                  >
                    <path
                      d="M0,5 Q75,0 150,5 T300,5"
                      strokeWidth="2"
                      stroke="#38b6ff"
                      fill="none"
                    />
                  </svg>
                </h1>

                <p className="text-gray-600 lg:text-xl max-w-xl mb-8 text-lg">
                  Led by <strong>Maj. (Dr.) Vishwa Deepak (R)</strong>, 
                  Sharda Clinic in Agra delivers trusted healthcare with 
                  expertise in <em>critical care, cardiology, diabetes, 
                  hypertension, thyroid, respiratory & general medicine</em>. 
                  Compassionate care, modern treatment, and proven trust.
                </p>

                {/* ✅ Buttons */}
                <div className="flex flex-col gap-4 sm:flex-row">
                  {/* Book Appointment (Smooth Scroll) */}
                  <button
                    onClick={() => scrollTo("appointment")}
                    className="font-medium items-center inline-flex btn-medical justify-center px-8 py-3.5 rounded-full shadow-lg text-white bg-medical-gradient hover:bg-blue-700 cursor-pointer"
                  >
                    <span className="mr-2 !text-white">Book Appointment</span>
                    <FaArrowRight className="h-5 w-5 ml-2 text-white" />
                  </button>

                  {/* Learn More (Services Page) */}
                  <Link
                    to="/services"
                    className="transition-colors text-blue-600 inline-flex items-center border-2 border-blue-600 hover:bg-gray-200 justify-center px-8 py-3.5 rounded-full cursor-pointer"
                  >
                    <FaCircleInfo className="h-5 w-5 mr-2" />
                    <span>Learn More</span>
                  </Link>
                </div>

                {/* Stats */}
                <Stats />
              </div>
            </div>

            <HeroRight />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
