import { useState, useEffect } from "react";

const HeroRight = ({ lang }) => {
  const [shown, setShown] = useState(false);

  useEffect(() => {
    setTimeout(() => setShown(true), 300);
  }, []);

  const texts = {
    recovery: { en: "98% Recovery Rate", hi: "98% स्वस्थ होने की दर" },
    proven: { en: "Proven results", hi: "साबित परिणाम" },
    support: { en: "24/7 Support", hi: "24/7 सहायता" },
    available: { en: "Available now", hi: "अभी उपलब्ध" },
  };

  return (
    <div
      className={`relative w-full md:w-1/2 transition duration-1000 delay-500 md:h-[80vh] md:h-full ${
        shown ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
      }`}
    >
      <div className="relative h-[60vh]">
        {/* Decorative Elements */}
        <div className="rounded-full absolute opacity-60 -left-6 -top-4 bg-blue-200 h-24 w-24"></div>
        <div className="rounded-full absolute opacity-60 -bottom-8 -right-8 bg-green-200 h-32 w-32"></div>

        {/* Main Image */}
        <img
          alt="banner"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 max-w-full h-full mx-auto object-contain"
          src="/Home.jpeg"
        />

        {/* Floating Card 1 */}
        <div className="flex items-center absolute -right-5 -top-15 md:top-0 bg-white p-3 rounded-xl shadow-lg z-20">
          <div className="mr-3 p-2 rounded-lg bg-green-100">
            <svg
              className="text-green-600 h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M5 13l4 4L19 7"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                stroke="currentColor"
              ></path>
            </svg>
          </div>
          <div>
            <p
              className={`font-semibold text-sm ${
                lang === "hi" ? "font-hindi" : ""
              }`}
            >
              {texts.recovery[lang]}
            </p>
            <p
              className={`text-gray-500 text-xs ${
                lang === "hi" ? "font-hindi" : ""
              }`}
            >
              {texts.proven[lang]}
            </p>
          </div>
        </div>

     
      </div>
    </div>
  );
};

export default HeroRight;
