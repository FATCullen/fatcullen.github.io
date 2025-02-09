import React from 'react';

export default function Experience() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-white">Experience</h1>
      
      <div className="space-y-8">
        {/* Example Experience Entry */}
        <div className="bg-gray-800 rounded-lg p-6">
          <div className="flex flex-col md:flex-row justify-between mb-4">
            <h2 className="text-xl font-semibold text-green-400">Company Name</h2>
            <span className="text-gray-400">Jan 2023 - Present</span>
          </div>
          <h3 className="text-lg text-gray-200 mb-2">Position Title</h3>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>Key achievement or responsibility description goes here</li>
            <li>Another notable accomplishment or task description</li>
            <li>Technical skills or tools used in this role</li>
          </ul>
        </div>
      </div>
    </div>
  );
}