import React from 'react';

export default function Other() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-white">Other</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Example Sections */}
        <div className="bg-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-white mb-4">Skills</h2>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-white rounded-full text-sm">JavaScript</span>
            <span className="px-3 py-1 bg-white rounded-full text-sm">Python</span>
            <span className="px-3 py-1 bg-white rounded-full text-sm">SQL</span>
          </div>
        </div>
        
        <div className="bg-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-white mb-4">Certifications</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>Certification Name - Issuing Organization</li>
            <li>Another Certification - Organization</li>
          </ul>
        </div>
      </div>
    </div>
  );
}