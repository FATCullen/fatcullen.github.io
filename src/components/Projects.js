import React from 'react';

export default function Projects() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-white">Projects</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Example Project Card */}
        <div className="bg-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-purple-400 mb-4">Project Name</h2>
          <p className="text-gray-300 mb-4">
            Description of the project, including your role, technologies used,
            and key features implemented.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-white rounded-full text-sm">React</span>
            <span className="px-3 py-1 bg-white rounded-full text-sm">Node.js</span>
            <span className="px-3 py-1 bg-white rounded-full text-sm">MongoDB</span>
          </div>
        </div>
        <div className="bg-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-purple-400 mb-4">Project Name</h2>
          <p className="text-gray-300 mb-4">
            Description of the project, including your role, technologies used,
            and key features implemented.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-white rounded-full text-sm">React</span>
            <span className="px-3 py-1 bg-white rounded-full text-sm">Node.js</span>
            <span className="px-3 py-1 bg-white rounded-full text-sm">MongoDB</span>
          </div>
        </div>
        <div className="bg-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-purple-400 mb-4">Project Name</h2>
          <p className="text-gray-300 mb-4">
            Description of the project, including your role, technologies used,
            and key features implemented.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-white rounded-full text-sm">React</span>
            <span className="px-3 py-1 bg-white rounded-full text-sm">Node.js</span>
            <span className="px-3 py-1 bg-white rounded-full text-sm">MongoDB</span>
          </div>
        </div>
      </div>
    </div>
  );
}
