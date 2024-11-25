import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="h-[10vh] px-8 w-full sticky top-0  bg-opacity-90 backdrop-blur-lg shadow-sm flex items-center justify-between z-50">
      {/* Left Navigation Links */}
      <p className="text-sm sm:text-lg Home2  font-medium text-gray-700 hover:text-blue-500 transition-colors duration-300">
        So.
      </p>
      <div className="flex items-center gap-2 sm:gap-10">
        <Link to="/">
          <p className="text-sm sm:text-base font-medium text-gray-700 hover:text-blue-500 transition-colors duration-300">
            Home
          </p>
        </Link>
        <Link to="about">
          <p className="text-sm sm:text-base font-medium text-gray-700 hover:text-blue-500 transition-colors duration-300">
            About
          </p>
        </Link>
        <Link to="projects">
          <p className="text-sm sm:text-base font-medium text-gray-700 hover:text-blue-500 transition-colors duration-300">
            Projects
          </p>
        </Link>
      </div>

      {/* Download CV Button */}
      <div>
        <a
          href="/Osonwa_Precious_CV.pdf"
          download="Osonwa_Precious_CV.pdf"
          className="px-4 py-2 text-sm sm:text-base font-medium text-white bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full shadow-md hover:shadow-lg hover:from-blue-600 hover:to-indigo-600 transition-all duration-300"
        >
          Download CV
        </a>
      </div>
    </div>
  );
}

export default Nav;
