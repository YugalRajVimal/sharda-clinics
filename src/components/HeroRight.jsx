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
      className={`relative w-full md:w-1/2 transition duration-1000 delay-500 h-[80vh] md:h-full ${
        shown ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
      }`}
    >
      <div className="relative h-[60vh]">
        {/* Decorative Elements */}
        <div className="rounded-full absolute opacity-60 left-4 -top-4 bg-blue-200 h-24 w-24"></div>
        <div className="rounded-full absolute opacity-60 -bottom-8 right-10 bg-green-200 h-32 w-32"></div>

        {/* Main Image */}
        <img
          alt="banner"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 max-w-full h-full mx-auto object-contain"
          src="/Home.jpeg"
        />

        {/* Floating Card 1 */}
        <div className="flex items-center absolute -right-5 top-0 bg-white p-3 rounded-xl shadow-lg z-20">
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

        {/* Floating Card 2 */}
        <div className="bg-white shadow-lg rounded-xl absolute p-3 z-20 -bottom-5 -left-5">
          <div className="flex items-center mb-2">
            <div className="bg-blue-100 rounded-lg mr-3 p-2">
              <svg
                className="h-5 w-5 text-blue-600"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  stroke="currentColor"
                ></path>
              </svg>
            </div>
            <p
              className={`font-semibold text-sm ${
                lang === "hi" ? "font-hindi" : ""
              }`}
            >
              {texts.support[lang]}
            </p>
          </div>
          <div className="flex">
            <div className="flex -space-x-2">
              <div className="flex items-center justify-center text-white h-6 rounded-full text-xs w-6 bg-blue-500">
                JD
              </div>
              <div className="flex items-center justify-center text-white h-6 rounded-full text-xs w-6 bg-green-500">
                MK
              </div>
              <div className="flex items-center justify-center text-white h-6 rounded-full text-xs w-6 bg-purple-500">
                AL
              </div>
            </div>
            <div
              className={`text-gray-500 text-xs ml-2 ${
                lang === "hi" ? "font-hindi" : ""
              }`}
            >
              {texts.available[lang]}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroRight;
