import React from 'react';

export default function Experience() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-white">Experience</h1>
      
      <div className="space-y-8">
        {/* Example Experience Entry */}
        <div className="bg-gray-800 rounded-lg p-6">
          <div className="flex flex-col md:flex-row justify-between mb-4">
            <h2 className="text-xl font-semibold text-green-400">MiNa Labs - University of Victoria</h2>
            <span className="text-gray-400">July 2023 - Sept 2023</span>
          </div>
          <h3 className="text-lg text-gray-200 mb-2">Research Assistant</h3>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>Microfluidics and nanotechnology engineering lab led by Dr. Mina Hoorfar, Dean of Engineering</li>
            <li>Designed and deployed hardware and software systems to improve lab efficiency and safety</li>
            <li>Gained experience using SolidWorks and Fritzing for CAD and schematic design to produce physical
            components and circuits to deploy code on</li>
            <li>Working independently and managing multiple projects simultaneously to meet delivery deadlines</li>
          </ul>
        </div>
        <div className="bg-gray-800 rounded-lg p-6">
          <div className="flex flex-col md:flex-row justify-between mb-4">
            <h2 className="text-xl font-semibold text-green-400">Horner Foundation - Victoria, British Columbia</h2>
            <span className="text-gray-400">Jan 2023 - Present</span>
          </div>
          <h3 className="text-lg text-gray-200 mb-2">Junior Grantmaker</h3>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>Leader of the youth grant making committee at the Horner Foundation not-for-profit</li>
            <li>Made multi-thousand dollar grant allocation decisions, reviewed grants to ensure proper allocation of
            funding, organised meetings of members, and formally presented results to the board</li>
          </ul>
        </div>
      </div>
    </div>
  );
}