import React from "react";

function Footer() {
  return (
    <footer className="w-full bg-black text-white  mt-10  p-10  backdrop-blur-md border-t-[1px]  ">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
        <div className="flex items-center space-x-4">
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin text-2xl hover:text-blue-500 transition-all duration-300"></i>
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github text-2xl hover:text-gray-700 transition-all duration-300"></i>
          </a>
          <a
            href="mailto:example@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fas fa-envelope text-2xl hover:text-red-500 transition-all duration-300"></i>
          </a>
        </div>
        <div className="text-center sm:text-right">
          <p className="text-sm">
            © 2024 Osonwa Precious. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
