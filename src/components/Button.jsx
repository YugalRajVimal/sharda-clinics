import React from "react";
import { useNavigate } from "react-router-dom";

const Button = ({ text = "Click Me", to = "/" }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(to); // jis route pe jana hai
  };

  return (
    <button
      onClick={handleClick}
      className="bg-gradient-to-r from-blue-600 to-sky-400 text-white font-medium px-8 py-3 rounded-full shadow-md transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1 cursor-pointer"
    >
      {text}
    </button>
  );
};

export default Button;
