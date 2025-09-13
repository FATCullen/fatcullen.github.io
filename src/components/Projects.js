import LazyImage from './LazyImage';

import React from 'react';
import debacle from "../images/debacle.png";
import fatchess from "../images/fatchess.png";
import pathMaxer from "../images/pathMaxer.jpg";
import breadboard from "../images/breadboard.png";
import threeD from "../images/threeD.png";
import utra from "../images/utra.png";
import microbots from "../images/microbots.png";
import website from "../images/website.png";
import fenceSee from "../images/fencesee.png";
import thyone from "../images/thyone.png";

export default function Projects() {
    return (
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-purple-400">Projects</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <div className="bg-gray-800 rounded-lg overflow-hidden">
            {/* Project Image */}
            <LazyImage 
              src={fenceSee} 
              alt="FenceSee" 
              className="w-full h-60 object-cover object-top"
            />
            
            {/* Project Content */}
            <div className="p-6">
              <h2 className="text-xl font-semibold text-purple-400 mb-4">FenceSee</h2>
              <p className="text-gray-300 mb-4">
              Web application for fencing companies to plan and manage jobs, calculate material lists, generate quotes, and receive payments.  
              Built for Cavalry Fence.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-white rounded-full text-sm">React</span>
                <span className="px-3 py-1 bg-white rounded-full text-sm">Java</span>
                <span className="px-3 py-1 bg-white rounded-full text-sm">Spring</span>
                <span className="px-3 py-1 bg-white rounded-full text-sm">MySQL</span>
                <span className="px-3 py-1 bg-white rounded-full text-sm">Firebase</span>
                <span className="px-3 py-1 bg-white rounded-full text-sm">MapboxGL</span>
              </div>

              {/* Demo & Source Links */}
              <div className="flex gap-4">
                <a 
                  href="https://app.fencesee.ca" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  Demo
                </a>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg overflow-hidden">
            {/* Project Image */}
            <LazyImage 
              src={debacle} 
              alt="Debug Debacle" 
              className="w-full h-60 object-cover object-top"
            />
            
            {/* Project Content */}
            <div className="p-6">
              <h2 className="text-xl font-semibold text-purple-400 mb-4">Debug Debacle</h2>
              <p className="text-gray-300 mb-4">
              Multiplayer online competitive coding website, where users compete to correct bugs in code fastest.
              Built for MCHacks 2025, winning 3rd place.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-white rounded-full text-sm">React</span>
                <span className="px-3 py-1 bg-white rounded-full text-sm">Tailwind CSS</span>
                <span className="px-3 py-1 bg-white rounded-full text-sm">Flask</span>
                <span className="px-3 py-1 bg-white rounded-full text-sm">TypeScript</span>
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
                <a 
                  href="https://devpost.com/software/debug-debacle" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  DevPost
                </a>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg overflow-hidden">
            {/* Project Image */}
            <LazyImage 
              src={pathMaxer} 
              alt="PathMaxer" 
              className="w-full h-60 object-cover object-top"
            />
            
            {/* Project Content */}
            <div className="p-6">
              <h2 className="text-xl font-semibold text-purple-400 mb-4">PathMaxer</h2>
              <p className="text-gray-300 mb-4">
                Tour guide robot. Users upload a schedule from an bluetooth integrated smartphone app and
                robot lead users between their classes on campus.  Uses Dijkstra's algorithm for pathfinding.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-white rounded-full text-sm">RobotOS</span>
                <span className="px-3 py-1 bg-white rounded-full text-sm">Raspberry Pi</span>
                <span className="px-3 py-1 bg-white rounded-full text-sm">React Native</span>
                <span className="px-3 py-1 bg-white rounded-full text-sm">C++</span>
              </div>

              {/* Demo & Source Links */}
              <div className="flex gap-4">
                <a 
                  href="https://drive.google.com/file/d/1TNJl6DPzvSaDpCO_igs-X81bE8GjgqE4/view" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  Demo
                </a>
                <a 
                  href="https://git.uwaterloo.ca/l47kim/path-maxer" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  Source
                </a>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg overflow-hidden">
            {/* Project Image */}
            <LazyImage 
              src={fatchess} 
              alt="FATChess" 
              className="w-full h-60 object-cover object-top"
            />
            
            {/* Project Content */}
            <div className="p-6">
              <h2 className="text-xl font-semibold text-purple-400 mb-4">FATChess</h2>
              <p className="text-gray-300 mb-4">
                Chess application including self made chess engine and AI opponent.  UI made with Unity, game logic and AI behaviour uses no external libraries.
                AI uses min-max search with alpha-beta pruning. 
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-white rounded-full text-sm">C#</span>
                <span className="px-3 py-1 bg-white rounded-full text-sm">Unity</span>
                <span className="px-3 py-1 bg-white rounded-full text-sm">.NET</span>
              </div>

              {/* Demo & Source Links */}
              <div className="flex gap-4">
                <a 
                  href="https://github.com/FATCullen/FATChess" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  Source
                </a>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg overflow-hidden">
            {/* Project Image */}
            <LazyImage 
              src={thyone} 
              alt="Thyone Consulting" 
              className="w-full h-60 object-cover object-top"
            />
            
            {/* Project Content */}
            <div className="p-6">
              <h2 className="text-xl font-semibold text-purple-400 mb-4">Thyone Consulting</h2>
              <p className="text-gray-300 mb-4">
              Freelance web design work for Thyone Consulting group, developing and deploying company website.  
              Built in React and integrating a Headless CMS to allow client updates.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-white rounded-full text-sm">React</span>
                <span className="px-3 py-1 bg-white rounded-full text-sm">Tailwind CSS</span>
                <span className="px-3 py-1 bg-white rounded-full text-sm">Headless CMS</span>
              </div>

              {/* Demo & Source Links */}
              <div className="flex gap-4">
                <a 
                  href="https://thyoneconsulting.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  Demo
                </a>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg overflow-hidden">
            {/* Project Image */}
            <LazyImage 
              src={breadboard} 
              alt="Breadboard Computers" 
              className="w-full h-60 object-cover object-top"
            />
            
            {/* Project Content */}
            <div className="p-6">
              <h2 className="text-xl font-semibold text-purple-400 mb-4">Breadboard Computers</h2>
              <p className="text-gray-300 mb-4">
                Custom CPU I built from logic gates, running a programming language I designed.  I've also built 
                a 6502 based computer programmed in x86 assembly for text input and calculations.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-white rounded-full text-sm">x86 Assembly</span>
                <span className="px-3 py-1 bg-white rounded-full text-sm">Breadboarding</span>
                <span className="px-3 py-1 bg-white rounded-full text-sm">Circuit Design</span>
                <span className="px-3 py-1 bg-white rounded-full text-sm">Low Level Hardware</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg overflow-hidden">
            {/* Project Image */}
            <LazyImage 
              src={threeD} 
              alt="3D Graphics Engine" 
              className="w-full h-60 object-cover object-top"
            />
            
            {/* Project Content */}
            <div className="p-6">
              <h2 className="text-xl font-semibold text-purple-400 mb-4">3D Graphics Engine</h2>
              <p className="text-gray-300 mb-4">
                OpenGL based 3D graphics environment.
                Features OBJ file support, graphics algorithms uses projection matrices with face occlusion.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-white rounded-full text-sm">C++</span>
                <span className="px-3 py-1 bg-white rounded-full text-sm">OpenGL</span>
                <span className="px-3 py-1 bg-white rounded-full text-sm">Computer Graphics</span>
              </div>

              {/* Demo & Source Links */}
              <div className="flex gap-4">
                <a 
                  href="https://github.com/FATCullen/3d_engine_stuff" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  Source
                </a>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg overflow-hidden">
            {/* Project Image */}
            <LazyImage 
              src={utra} 
              alt="UTRA Hacks 2025 - Closed Challenge" 
              className="w-full h-60 object-cover object-top"
            />
            
            {/* Project Content */}
            <div className="p-6">
              <h2 className="text-xl font-semibold text-purple-400 mb-4">UTRA Hacks 2025 - Closed Challenge</h2>
              <p className="text-gray-300 mb-4">
                Mini robot designed and programed to solve UTRA Hacks' "capture the flag" style challenges.  Team won 2nd place overall.
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
                  href="https://github.com/vichua2006/UTRAHack2025/tree/main" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  Source
                </a>
                <a 
                  href="https://devpost.com/software/lebot-james-qgf9kw" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  DevPost
                </a>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg overflow-hidden">
            {/* Project Image */}
            <LazyImage 
              src={website} 
              alt="This Website" 
              className="w-full h-60 object-cover object-top"
            />
            
            {/* Project Content */}
            <div className="p-6">
              <h2 className="text-xl font-semibold text-purple-400 mb-4">This Website</h2>
              <p className="text-gray-300 mb-4">
                Built during my first year of university using React and TailWind CSS.  Interactive background created using the tsParticles library.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-white rounded-full text-sm">React</span>
                <span className="px-3 py-1 bg-white rounded-full text-sm">Tailwind CSS</span>
              </div>

              {/* Demo & Source Links */}
              <div className="flex gap-4">
                <a 
                  href="https://fatcullen.github.io/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  Demo
                </a>
                <a 
                  href="https://github.com/FATCullen/fatcullen.github.io" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  Source
                </a>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg overflow-hidden">
            {/* Project Image */}
            <LazyImage 
              src={microbots} 
              alt="Omni-Directional Rover" 
              className="w-full h-60 object-cover object-top"
            />
            
            {/* Project Content */}
            <div className="p-6">
              <h2 className="text-xl font-semibold text-purple-400 mb-4">Omni-Directional Rover</h2>
              <p className="text-gray-300 mb-4">
                Robot controllable wirelessly through a webserver. Using ESP32 and 3D printed self
                assembled Mecanum wheels.  Developed at Microbots Hackathon 2024.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-white rounded-full text-sm">ESP32</span>
                <span className="px-3 py-1 bg-white rounded-full text-sm">C++</span>
                <span className="px-3 py-1 bg-white rounded-full text-sm">HTTP</span>
                <span className="px-3 py-1 bg-white rounded-full text-sm">CAD</span>
              </div>

              {/* Demo & Source Links */}
              <div className="flex gap-4">
                <a 
                  href="https://github.com/lamegaton/toy-robot/tree/main" 
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
