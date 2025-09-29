import React, { useCallback } from "react";
import { Link } from "react-router-dom";

const CTA = ({ lang }) => {
  const useScrollTo = () =>
    useCallback((id) => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }, []);

  const scrollTo = useScrollTo();

  // Texts according to language
  const texts = {
    en: {
      heading: "Ready for Expert, Compassionate Medical Care?",
      desc: `Book your appointment at Sharda Clinic, Agra, led by Maj (Dr.) Vishwa Deepak (Retd.), and take the first step toward better health with trusted, personalized treatment.`,
      book: "Book Appointment",
      contact: "Contact Us",
    },
    hi: {
      heading: "विशेषज्ञ और सहानुभूतिपूर्ण चिकित्सा देखभाल के लिए तैयार हैं?",
      desc: `Sharda Clinic, Agra में अपनी अपॉइंटमेंट बुक करें, जिसका नेतृत्व Maj (Dr.) Vishwa Deepak (Retd.) करते हैं, और भरोसेमंद, व्यक्तिगत उपचार के साथ बेहतर स्वास्थ्य की दिशा में पहला कदम उठाएँ।`,
      book: "अपॉइंटमेंट बुक करें",
      contact: "संपर्क करें",
    },
  };

  const { heading, desc, book, contact } = texts[lang] || texts.en;

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
        <div className="flex flex-col items-center gap-10 justify-between">
          <div className="mb-8 max-w-2xl md:mb-0">
            <h2 className="font-bold text-3xl mb-3 !text-white">{heading}</h2>
            <p className="text-blue-100">{desc}</p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col gap-4 sm:flex-row">
            {/* Appointment */}
            <Link
              onClick={() => scrollTo("appointment")}
              className="font-medium items-center inline-flex btn-medical justify-center px-8 py-3.5 rounded-full shadow-lg bg-white hover:bg-blue-100 transition cursor-pointer"
            >
              <span className="mr-2 !text-blue-700">{book}</span>
            </Link>

            {/* Contact */}
            <Link
              to="/contact"
              className="transition-colors text-white inline-flex items-center border-2 border-white justify-center px-8 py-3.5 rounded-full cursor-pointer"
            >
              <span>{contact}</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
