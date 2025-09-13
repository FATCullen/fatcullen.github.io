import React from 'react';
import LazyImage from './LazyImage';

import uwo from "../images/uwo.png";
import mina from "../images/minaLogo.png";
import horner from "../images/horner.png";
import cavalry from "../images/cavalryFence.png";

export default function Experience() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-white">Experience</h1>
      
      <div className="space-y-8">
        {/* Cavalry Fence */}
        <div className="bg-gray-800 rounded-lg p-6">
          <div className="flex flex-col md:flex-row justify-between mb-4">
            <h2 className="text-xl font-semibold text-green-400">Cavalry Fence - FenceSee - Edmonton, Alberta</h2>
            <span className="text-gray-400">May 2025 - Present</span>
          </div>
          <div className="flex flex-col md:flex-row items-center">
            <div className="flex-1 md:pr-6 text-center md:text-left">
              <h3 className="text-lg text-gray-200 mb-2">Full Stack Software Developer</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Independently developed and brought to production a web-based B2B service for planning fencing jobs, calculating material lists, formatting quotes, and receiving payments from homeowners</li>
                <li>Front-end development in JavaScript with React, backend in Java with Spring</li>
                <li>Integrated with Firebase, Mapbox GL, Stripe Connect, and Email services</li>
              </ul>
            </div>
            <div className="w-full md:w-1/5 mt-4 md:mt-0">
              <LazyImage src={cavalry} alt="Cavalry Fence Logo" className="w-full h-auto object-contain" />
            </div>
          </div>
        </div>

        {/* UWO */}
        <div className="bg-gray-800 rounded-lg p-6">
          <div className="flex flex-col md:flex-row justify-between mb-4">
            <h2 className="text-xl font-semibold text-green-400">UW Orbital - University of Waterloo</h2>
            <span className="text-gray-400">September 2024 - Present</span>
          </div>
          <div className="flex flex-col md:flex-row items-center">
            <div className="flex-1 md:pr-6 text-center md:text-left">
              <h3 className="text-lg text-gray-200 mb-2">Firmware and Ground Station Subteam Member</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Member of Univeristy of Waterloo Orbital CubeSat design team.  Currently preparing our CubeSat for CSDC7</li>
                <li>Implemented doppler effect correction algorithms for LEO satellite to ground station communications</li>
                <li>Working with real time programming and HIL concepts, including use of free RTOS for satellite firmware and python with fast API for ground station backend</li>
              </ul>
            </div>
            <div className="w-full md:w-1/5 mt-4 md:mt-0">
              <LazyImage src={uwo} alt="UW Orbital Mission Patch" className="w-full h-auto object-contain" />
            </div>
          </div>
        </div>

        {/* Mina */}
        <div className="bg-gray-800 rounded-lg p-6">
          <div className="flex flex-col md:flex-row justify-between mb-4">
            <h2 className="text-xl font-semibold text-green-400">MiNa Labs - University of Victoria</h2>
            <span className="text-gray-400">July 2023 - Sept 2023</span>
          </div>
          <div className="flex flex-col md:flex-row items-center">
            <div className="flex-1 md:pr-6 text-center md:text-left">
              <h3 className="text-lg text-gray-200 mb-2">Research Assistant</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Microfluidics and nanotechnology engineering lab led by Dr. Mina Hoorfar, Dean of Engineering</li>
                <li>Designed and deployed hardware and software systems to improve lab efficiency and safety</li>
                <li>Gained experience using SolidWorks and Fritzing for CAD and schematic design to produce physical
                components and circuits to deploy code on</li>
                <li>Working independently and managing multiple projects simultaneously to meet delivery deadlines</li>
              </ul>
            </div>
            <div className="w-full md:w-1/5 mt-4 md:mt-0">
              <LazyImage src={mina} alt="Mina labs logo" className="w-full h-auto object-contain" />
            </div>
          </div>
        </div>

        {/* Horner Foundation */}
        <div className="bg-gray-800 rounded-lg p-6">
          <div className="flex flex-col md:flex-row justify-between mb-4">
            <h2 className="text-xl font-semibold text-green-400">Horner Foundation - Victoria, British Columbia</h2>
            <span className="text-gray-400">Jan 2023 - Present</span>
          </div>
          <div className="flex flex-col md:flex-row items-center">
            <div className="flex-1 md:pr-6 text-center md:text-left">
              <h3 className="text-lg text-gray-200 mb-2">Junior Grantmaker</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Leader of the youth grant making committee at the Horner Foundation not-for-profit</li>
                <li>Made multi-thousand dollar grant allocation decisions, reviewed grants to ensure proper allocation of
                funding, organised meetings of members, and formally presented results to the board</li>
              </ul>
            </div>
            <div className="w-full md:w-1/5 mt-4 md:mt-0">
              <LazyImage src={horner} alt="Horner foundation logo" className="w-full h-auto object-contain" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}