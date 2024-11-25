import React from "react";
import image from "../src/assets/mypicture.png";
function AboutMe() {
  return (
    <div className="p-6 sm:p-10 bg-gray-50  border-gray-300">
      <div className="flex flex-col sm:flex-row items-center sm:items-start sm:space-x-8">
        {/* Optional Picture Section */}
        <div className="flex-shrink-0 mb-6 sm:mb-0">
          <div className="w-32 h-32 sm:w-48 sm:h-48 rounded-full overflow-hidden shadow-md">
            {/* Replace the src link below with your picture if needed */}
            <img
              src={image}
              alt="Osonwa Precious"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* About Me Content */}
        <div>
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            About Me
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Hi there! I'm{" "}
            <span className="font-bold text-gray-800">Osonwa Precious</span>, a
            passionate{" "}
            <span className="text-blue-600 font-semibold">
              Front-End Developer
            </span>{" "}
            with 6 months of hands-on experience crafting visually appealing,
            interactive, and responsive user interfaces.
          </p>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed mt-4">
            I thrive on turning ideas into digital realities, whether it's
            building modern web applications, creating intuitive user
            experiences, or pushing boundaries in design. With expertise in{" "}
            <span className="font-semibold text-gray-800">
              React, Tailwind CSS, Material UI
            </span>
            , and other technologies, I aim to deliver innovative solutions that
            leave a lasting impression.
          </p>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed mt-4">
            Outside of coding, I love exploring how technology shapes our world
            and helping others discover its potential. Let’s build something
            amazing together!
          </p>

          {/* Contact Section */}
          <div className="mt-6 space-y-2">
            <p className="text-gray-600">
              📧{" "}
              <a
                href="mailto:osonwap083@gmail.com"
                className="text-blue-600 font-semibold hover:underline"
              >
                osonwap083@gmail.com
              </a>
            </p>
            <p className="text-gray-600">
              📞{" "}
              <a
                href="tel:+2348142310543"
                className="text-blue-600 font-semibold hover:underline"
              >
                +234 814 231 0543
              </a>
            </p>
          </div>

          {/* Optional Button */}
          <div className="mt-4">
            <a
              href="#contact" // Change this to your contact section or remove if unnecessary
              className="px-6 py-3 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 transition-all"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
