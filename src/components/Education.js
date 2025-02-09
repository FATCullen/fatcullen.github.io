import React from 'react';

export default function Education() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-white">Education</h1>
      
      <div className="space-y-8">
        {/* Example Education Entry */}
        <div className="bg-gray-800 rounded-lg p-6">
          <div className="flex flex-col md:flex-row justify-between mb-4">
            <h2 className="text-xl font-semibold text-blue-400">University Name</h2>
            <span className="text-gray-400">2020 - 2024</span>
          </div>
          <h3 className="text-lg text-gray-200 mb-2">Degree Name</h3>
          <p className="text-gray-300">
            Relevant coursework and achievements go here. You can include GPA,
            honors, or specific courses that showcase your expertise.
          </p>
        </div>
      </div>
    </div>
  );
}
