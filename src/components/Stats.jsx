import React from "react";

const Stats = ({ lang }) => {
  return (
    <div className="grid gap-4 grid-cols-3 mt-12 bg-[#eff6ff] w-full">
      <div>
        <div className="text-blue-600 font-bold text-3xl">15+</div>
        <div className="text-gray-500">Years Experience</div>
      </div>
      <div>
        <div className="text-blue-600 font-bold text-3xl">50k+</div>
        <div className="text-gray-500">Patients Served</div>
      </div>
      <div>
        <div className="text-blue-600 font-bold text-3xl">99%</div>
        <div className="text-gray-500">Satisfaction</div>
      </div>
    </div>
  );
};

export default Stats;
