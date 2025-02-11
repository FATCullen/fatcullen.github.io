import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { FaLinkedin, FaGithub, FaEnvelope, FaFile } from "react-icons/fa";
import { useState, useEffect } from "react";
import { TypeAnimation } from 'react-type-animation';
import Favicon from "react-favicon";
import Resume from "./documents/Finn_Cullen_Resume.pdf";
import ParticleBackground from "./components/ParticleBackground";
import me from "./images/me.jpg";
import ico from "./favicon.ico";
// import SELogo from "./images/logo_w.svg"

import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Other from "./components/Other";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    document.title = 'Finn Cullen';
  }, []);

  return (
    <Router>
      <Favicon url={ico} />

      <div className="relative min-h-screen bg-gray-900">
        <div className="fixed inset-0 z-0">
          <ParticleBackground />
        </div>
        <div className="flex flex-col min-h-screen relative z-10">
        {/* Main content wrapper */}
        <div className="flex flex-col min-h-screen">
          {/* Navbar */}
          <nav className="w-full flex justify-between items-center p-4 bg-gray-800 shadow-md fixed top-0 z-50">
            <Link to="/" className="text-lg font-semibold text-white ml-2 md:ml-6">
              Finn Cullen
            </Link>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="w-6 h-0.5 bg-white mb-1"></div>
              <div className="w-6 h-0.5 bg-white mb-1"></div>
              <div className="w-6 h-0.5 bg-white"></div>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-6 mr-6">
              <Link to="/" className="text-lg text-white hover:text-gray-300">Home</Link>
              <Link to="/projects" className="text-lg text-white hover:text-gray-300">Projects</Link>
              <Link to="/experience" className="text-lg text-white hover:text-gray-300">Experience</Link>
              <Link to="/education" className="text-lg text-white hover:text-gray-300">Education</Link>
              <Link to="/other" className="text-lg text-white hover:text-gray-300">Other</Link>
            </div>

            {/* Mobile Navigation */}
            <div className={`${isMenuOpen ? 'flex' : 'hidden'} md:hidden absolute top-full left-0 right-0 flex-col bg-gray-800 p-4 shadow-lg`}>
              <Link to="/" className="text-lg text-white py-2" onClick={() => setIsMenuOpen(false)}>Home</Link>
              <Link to="/projects" className="text-lg text-white py-2" onClick={() => setIsMenuOpen(false)}>Projects</Link>
              <Link to="/experience" className="text-lg text-white py-2" onClick={() => setIsMenuOpen(false)}>Experience</Link>
              <Link to="/education" className="text-lg text-white py-2" onClick={() => setIsMenuOpen(false)}>Education</Link>
              <Link to="/other" className="text-lg text-white py-2" onClick={() => setIsMenuOpen(false)}>Other</Link>
            </div>
          </nav>

          {/* Content Area */}
          <main className="flex-grow pt-20 px-4 md:px-6">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/projects" element={<Projects title="Projects" />} />
              <Route path="/experience" element={<Experience title="Experience" />} />
              <Route path="/education" element={<Education title="Education" />} />
              <Route path="/other" element={<Other title="Other" />} />
            </Routes>
          </main>

          {/* Footer */}
          <footer className="w-full border-t border-gray-700 p-4 bg-gray-900">
            <div className="flex space-x-4 justify-center md:justify-start md:ml-6">
              <a href="https://www.linkedin.com/in/finn-cullen-a6a012346/" target="_blank" rel="noopener noreferrer" className="text-blue-400 text-2xl hover:text-blue-300">
                <FaLinkedin />
              </a>
              <a href="https://github.com/fatcullen" target="_blank" rel="noopener noreferrer" className="text-blue-400 text-2xl hover:text-blue-300">
                <FaGithub />
              </a>
              <a href="mailto:fatcullen2@gmail.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 text-2xl hover:text-blue-300">
                <FaEnvelope />
              </a>
              <a href={Resume} target="_blank" rel="noopener noreferrer" className="text-blue-400 text-2xl hover:text-blue-300">
                <FaFile />
              </a>
              {/* <a href="https://se-webring.xyz/" target="_blank" rel="noopener noreferrer" className="text-blue-400 text-2xl hover:text-blue-300">
                <img src={SELogo} alt="Waterloo SE Webring Logo" className="w-8 h-8 fill-current" />
              </a> */}
            </div>
          </footer>
        </div>
      </div>
      </div>
    </Router>
  );
}

// HomePage component for the main content
function HomePage() {
  const [showParagraph, setShowParagraph] = useState(false);

  // Calculate when to show paragraph based on typing animation duration
  useEffect(() => {
    // 50ms per character for "Hi, my name is Finn" (17 characters)
    const typingDuration = 17 * 50;
    const timer = setTimeout(() => {
      setShowParagraph(true);
    }, typingDuration);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto">
      <div className="text-center md:text-left w-full md:w-1/2 mb-8 md:mb-0">
        <TypeAnimation
          sequence={[
            'Hi, my name is Finn'
          ]}
          speed={50}
          className="text-3xl md:text-4xl font-bold text-white"
          repeat={0}
        />
        <p className={`mt-4 text-base md:text-lg text-gray-300 max-w-md mx-auto md:mx-0 transition-opacity duration-1000 ${showParagraph ? 'opacity-100' : 'opacity-0'}`}>
          I'm a first-year software engineering student at the Univeristy of Waterloo.  
          I'm interested in all areas of programming, but especially firmware development, backend programming, and robotics.
          Check out the rest of my website to learn more about me, my interests, and my work.
        </p>
  
        {/* Buttons */}
        <div className="mt-6 flex flex-wrap gap-4 justify-center md:justify-start">
          <Link to="/projects" className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600">Projects</Link>
          <Link to="/experience" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Experience</Link>
          <Link to="/education" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Education</Link>
          <Link to="/other" className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-600">Other</Link>
        </div>
  
        {/* Skills Section */}
        <div className="mt-6 text-gray-300">
          <h3 className="text-xl font-bold mb-2">Skills</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold">Languages</h4>
              <p>C#, Python, JS, CSS, C++, C, Assembly</p>
            </div>
            <div>
              <h4 className="font-semibold">Technologies/Frameworks</h4>
              <p>HTML, React, Node.js, AWS, Tailwind CSS, Latex, Git, Unity, OpenGL, SolidWorks, Docker, Bash, Linux</p>
            </div>
            <div>
              <h4 className="font-semibold">Other Skills</h4>
              <p>Soldering, 3D Modeling, Circuit Design, Breadboarding, Engineering Schematic Creation, Agile Methodology, UI/UX Design</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-48 h-48 md:w-64 md:h-64 bg-gray-700 rounded-lg"><img src={me} alt="Me" className="w-full h-auto object-contain" /></div>
    </div>
  );
}

// function Placeholder({ title }) {
//   return (
//     <div className="flex justify-center items-center text-2xl md:text-3xl font-bold text-white px-4 text-center h-[calc(100vh-180px)]">
//       {title} Page (Coming Soon)
//     </div>
//   );
// }