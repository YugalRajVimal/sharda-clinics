import { useState, useEffect, useCallback } from "react";
import { FaPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FaArrowRight, FaCircleInfo } from "react-icons/fa6";
import Stats from "./Stats";
import HeroRight from "./HeroRight";

const Hero = ({ lang }) => {
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShown(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const useScrollTo = () =>
    useCallback((id) => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }, []);

  const scrollTo = useScrollTo();

  const texts = {
    health: {
      en: "Your Health • Our Priority",
      hi: "आपका स्वास्थ्य • हमारी प्राथमिकता",
    },
    welcome: {
      en: "Welcome to",
      hi: "आपका स्वागत है",
    },
    book: {
      en: "Book Appointment",
      hi: "अपॉइंटमेंट बुक करें",
    },
    learn: {
      en: "Learn More",
      hi: "और जानें",
    },
    description: {
      en: "Led by Maj. (Dr.) Vishwa Deepak (R), Sharda Clinic in Agra delivers trusted healthcare with expertise in critical care, cardiology, diabetes, hypertension, thyroid, respiratory & general medicine. Compassionate care, modern treatment, and proven trust.",
      hi: "मेजर (डॉ.) विश्व दीपक (आर) के नेतृत्व में, आगरा का शारदा क्लिनिक आपको विश्वसनीय स्वास्थ्य सेवा प्रदान करता है, जिसमें गंभीर देखभाल, हृदय रोग, मधुमेह, उच्च रक्तचाप, थायरॉइड, श्वसन और सामान्य चिकित्सा शामिल हैं। सहानुभूतिपूर्ण देखभाल, आधुनिक उपचार और प्रमाणित भरोसा।",
    },
  };

  return (
    <section className="relative min-h-screen h-[160vh] md:h-auto" id="home">
      <div className="absolute inset-0 bg-blue-50">
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
                <div
                  className={`mb-6 bg-white px-4 py-2 inline-flex items-center rounded-full shadow-md ${
                    lang === "hi" ? "font-hindi" : ""
                  }`}
                >
                  <FaPlus />
                  <span className="font-medium text-blue-800 text-sm">
                    {texts.health[lang]}
                  </span>
                </div>

                <h1
                  className={`font-bold mb-6 leading-tight lg:text-6xl md:text-5xl text-4xl ${
                    lang === "hi" ? "font-hindi" : ""
                  }`}
                >
                  {texts.welcome[lang]}{" "}
                  <span className="relative text-medical-gradient">
                    Sharda Clinic
                  </span>
                </h1>

                <p
                  className={`text-gray-600 lg:text-xl max-w-xl mb-8 text-lg ${
                    lang === "hi" ? "font-hindi" : ""
                  }`}
                >
                  {texts.description[lang]}
                </p>

                {/* Buttons */}
                <div className="flex flex-col gap-4 sm:flex-row">
                  <button
                    onClick={() => scrollTo("appointment")}
                    className={`font-medium items-center inline-flex btn-medical justify-center px-8 py-3.5 rounded-full shadow-lg text-white bg-medical-gradient hover:bg-blue-700 cursor-pointer ${
                      lang === "hi" ? "font-hindi" : ""
                    }`}
                  >
                    <span className="mr-2 !text-white">{texts.book[lang]}</span>
                    <FaArrowRight className="h-5 w-5 ml-2 text-white" />
                  </button>

                  <Link
                    to="/services"
                    className={`transition-colors text-blue-600 inline-flex items-center border-2 border-blue-600 hover:bg-gray-200 justify-center px-8 py-3.5 rounded-full cursor-pointer ${
                      lang === "hi" ? "font-hindi" : ""
                    }`}
                  >
                    <FaCircleInfo className="h-5 w-5 mr-2" />
                    <span>{texts.learn[lang]}</span>
                  </Link>
                </div>

                <Stats />
              </div>
            </div>

            <HeroRight lang={lang} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
