import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { FaLinkedin, FaGithub, FaEnvelope, FaFile } from "react-icons/fa";
import { useState, useEffect } from "react";
import { TypeAnimation } from 'react-type-animation';

import PageTransition from './components/PageTransition';
import Favicon from "react-favicon";
import Resume from "./documents/Finn_Cullen_Resume.pdf";
import ParticleBackground from "./components/ParticleBackground";
import LazyImage from './components/LazyImage';

import me from "./images/me.jpg";
import ico from "./favicon.ico";

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
        {/* Interactive Background */}
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
                <Route path="/" element={
                  <PageTransition>
                    <HomePage />
                  </PageTransition>
                } />
                <Route path="/projects" element={
                  <PageTransition>
                    <Projects title="Projects" />
                  </PageTransition>
                } />
                <Route path="/experience" element={
                  <PageTransition>
                    <Experience title="Experience" />
                  </PageTransition>
                } />
                <Route path="/education" element={
                  <PageTransition>
                    <Education title="Education" />
                  </PageTransition>
                } />
                <Route path="/other" element={
                  <PageTransition>
                    <Other title="Other" />
                  </PageTransition>
                } />
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
                <a href="https://se-webring.xyz" target="_blank" rel="noopener noreferrer" className="text-blue-400 text-2xl hover:text-blue-300">
                  <svg class="w-8 h-8" viewBox="0 100 960 960" fill="none" xmlns="http://www.w3.org/2000/svg"> <rect width="960" height="960" fill="none"></rect> <path fill-rule="evenodd" clip-rule="evenodd" d="M369.6,223.6v512.5c124.9-18.2,220.9-126,220.9-256.2s-96-238.1-220.9-256.2ZM341.1,812.6c-3,0-5.9.1-8.9.1C148.7,812.7,0,663.7,0,479.8S148.7,146.9,332.1,146.9s6,0,8.9.1c1.1,0,2.3-.1,3.4-.1h615.5v665.9H344.5c-1.1,0-2.3,0-3.4-.1ZM295.8,736.2V223.4c-125.4,17.7-222,125.8-222,256.4s96.5,238.7,222,256.4ZM540.9,220.9h345.3v517.9h-345.3c75.2-61,123.4-154.4,123.4-258.9s-48.1-197.9-123.4-258.9Z" fill="currentColor"></path> </svg>
                </a>
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
      <div className="w-48 h-48 md:w-64 md:h-64 bg-gray-700 rounded-lg">
        <LazyImage src={me} alt="Me" className="w-full h-auto object-contain" />
      </div>
    </div>
  );
}
