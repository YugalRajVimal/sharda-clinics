import React from "react";

const Stats = ({ lang }) => {
  return (
    <div className="grid gap-4 grid-cols-3 mt-12 bg-[#eff6ff] w-screen md:w-full px-4 pb-6">
      <div>
        <div className="text-blue-600 font-bold text-3xl text-center">15+</div>
        <div className="text-gray-500 text-center">Years Experience</div>
      </div>
      <div>
        <div className="text-blue-600 font-bold text-3xl text-center">50k+</div>
        <div className="text-gray-500 text-center">Patients Served</div>
      </div>
      <div>
        <div className="text-blue-600 font-bold text-3xl text-center">99%</div>
        <div className="text-gray-500 text-center">Satisfaction</div>
      </div>
    </div>
  );
};

export default Stats;
