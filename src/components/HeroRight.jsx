import { useState, useEffect } from "react";
import heroImg from "../assets/heroImg.avif";

const HeroRight = () => {
  const [shown, setShown] = useState(false);

  useEffect(() => {
    // Mount hone ke baad animation trigger
    setTimeout(() => setShown(true), 300);
  }, []);

  return (
    <div
      className={`relative md:w-1/2 transition duration-1000 delay-500 ${
        shown ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
      }`}
    >
      <div className="relative">
        {/* Decorative Elements */}
        <div className="rounded-full absolute opacity-60 -left-8 -top-8 bg-blue-200 h-24 w-24"></div>
        <div className="rounded-full absolute opacity-60 -bottom-8 -right-8 bg-green-200 h-32 w-32"></div>

        {/* Main Image */}
        <img
          alt="Doctor with patient"
          className="relative z-10 rounded-2xl shadow-xl max-w-full h-auto object-contain"
          src={heroImg}
        />

        {/* Floating Card 1 */}
        <div className="flex items-center absolute -right-5 -top-5 bg-white p-3 rounded-xl shadow-lg z-20">
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
            <p className="font-semibold text-sm">98% Recovery Rate</p>
            <p className="text-gray-500 text-xs">Proven results</p>
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
            <p className="font-semibold text-sm">24/7 Support</p>
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
            <div className="text-gray-500 text-xs ml-2">Available now</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroRight;
