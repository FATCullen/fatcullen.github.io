import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-6">
        {/* Navbar */}
        <nav className="w-full flex justify-center space-x-6 p-4 bg-gray-800 shadow-md fixed top-0">
          <Link to="/" className="text-lg font-semibold text-white">Home</Link>
          <Link to="/education" className="text-lg text-white">Education</Link>
          <Link to="/experience" className="text-lg text-white">Experience</Link>
          <Link to="/projects" className="text-lg text-white">Projects</Link>
          <Link to="/other" className="text-lg text-white">Other</Link>
        </nav>

        {/* Welcome Page */}
        <div className="mt-20 flex flex-row items-center justify-center w-full max-w-6xl mx-auto flex-grow">
          <div className="text-left flex-1">
            <h1 className="text-4xl font-bold">Hi, my name is Finn</h1>
            <p className="mt-4 text-lg text-gray-300 max-w-md">
              A short about me section goes here. I am a developer passionate about building things.
            </p>
            <div className="mt-6 flex flex-wrap space-x-4">
              <Link to="/education" className="bg-blue-500 text-white px-4 py-2 rounded">Education</Link>
              <Link to="/experience" className="bg-green-500 text-white px-4 py-2 rounded">Experience</Link>
              <Link to="/projects" className="bg-purple-500 text-white px-4 py-2 rounded">Projects</Link>
              <Link to="/other" className="bg-gray-700 text-white px-4 py-2 rounded">Other</Link>
            </div>
          </div>
          <div className="flex-1 flex flex-col justify-center items-center">
            {/* Placeholder for an image */}
            <div className="w-64 h-64 bg-gray-700 rounded-lg"></div>
          </div>
        </div>

        {/* Footer with Social Icons */}
        <div className="w-full mt-10 border-t border-gray-700 p-4 flex justify-start">
          <div className="flex space-x-4 ml-6">
            <a href="https://linkedin.com" target="_blank" className="text-blue-400 text-2xl">
              <FaLinkedin />
            </a>
            <a href="https://github.com" target="_blank" className="text-gray-400 text-2xl">
              <FaGithub />
            </a>
          </div>
        </div>
      </div>

      {/* Placeholder Routes */}
      <Routes>
        <Route path="/education" element={<Placeholder title="Education" />} />
        <Route path="/experience" element={<Placeholder title="Experience" />} />
        <Route path="/projects" element={<Placeholder title="Projects" />} />
        <Route path="/other" element={<Placeholder title="Other" />} />
      </Routes>
    </Router>
  );
}

function Placeholder({ title }) {
  return (
    <div className="min-h-screen flex justify-center items-center text-3xl font-bold text-white">
      {title} Page (Coming Soon)
    </div>
  );
}
