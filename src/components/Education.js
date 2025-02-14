import React from 'react';
import gns from "../images/gns.png";
import waterloo from "../images/waterloo.png";

export default function Education() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-white">Education</h1>

      <div className="space-y-8">
        {/* University of Waterloo */}
        <div className="bg-gray-800 rounded-lg p-6 flex flex-col md:flex-row items-center">
          {/* Text */}
          <div className="flex-1 md:pr-6 text-center md:text-left">
            <h2 className="text-xl font-semibold text-blue-400">University of Waterloo</h2>
            <h2 className="text-xl font-semibold text-blue-400">2024 - 2029</h2>
            <h3 className="text-lg text-gray-200 mb-2">Bachelors of Software Engineering</h3>
            <p className="text-gray-400">
              <span className="font-semibold text-gray-300">GPA:</span> 4.0
            </p>
          </div>

          {/* Image */}
          <div className="w-full md:w-1/5 mt-4 md:mt-0">
            <img 
              src={waterloo} 
              alt="University of Waterloo Logo" 
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

        {/* Glenlyon Norfolk School */}
        <div className="bg-gray-800 rounded-lg p-6 flex flex-col md:flex-row items-center">
          {/* Text */}
          <div className="flex-1 md:pr-6 text-center md:text-left">
            <h2 className="text-xl font-semibold text-blue-400">Glenlyon Norfolk School</h2>
            <h2 className="text-xl font-semibold text-blue-400">2020 - 2024</h2>
            <h3 className="text-lg text-gray-200 mb-2">International Baccalaureate Program</h3>
            <p className="text-gray-400">
              <span className="font-semibold text-gray-300">Final Grade:</span> 38 IB - 100% Average in STEM Subjects
            </p>
          </div>

          {/* Image */}
          <div className="w-full md:w-1/5 mt-4 md:mt-0">
            <img 
              src={gns} 
              alt="Glenlyon Norfolk School Logo" 
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
