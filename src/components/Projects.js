import React from 'react';
import debacle from "../images/debacle.png";

export default function Projects() {
    return (
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-white">Projects</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Single Project Card */}
          <div className="bg-gray-800 rounded-lg overflow-hidden">
            {/* Project Image */}
            <img 
              src={debacle} 
              alt="Debug Debacle" 
              className="w-full h-40 object-cover object-top"
            />
            
            {/* Project Content */}
            <div className="p-6">
              <h2 className="text-xl font-semibold text-purple-400 mb-4">Debug Debacle</h2>
              <p className="text-gray-300 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-white rounded-full text-sm">React</span>
                <span className="px-3 py-1 bg-white rounded-full text-sm">Tailwind CSS</span>
                <span className="px-3 py-1 bg-white rounded-full text-sm">Flask</span>
                <span className="px-3 py-1 bg-white rounded-full text-sm">Gumloops</span>
              </div>

              {/* Demo & Source Links */}
              <div className="flex gap-4">
                <a 
                  href="https://github.com/honzikschenk/debug-debacle" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  Demo
                </a>
                <a 
                  href="https://debug-debacle.vercel.app/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  Source
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
