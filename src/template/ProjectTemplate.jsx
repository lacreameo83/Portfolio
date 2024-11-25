import React from "react";

function ProjectTemplate({ image, purpose, link, title }) {
  return (
    <div className="bg-white backdrop-blur-md p-5 lg:w-[25vw] h-[72vh] rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
      {/* Image Section */}
      <div className="h-[35vh] mb-4 rounded-lg overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>

      {/* Title */}
      <h3 className="text-lg font-bold text-gray-800 mb-3">{title}</h3>

      {/* Purpose */}
      <p className="text-sm text-gray-600 h-[17vh] mb-4 overflow-hidden">
        {purpose}
      </p>

      {/* Link */}
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-fit px-4 py-2 mt-auto text-center text-white bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full shadow-md hover:shadow-lg hover:from-blue-600 hover:to-indigo-600 transition-all duration-300"
      >
        View Project
      </a>
    </div>
  );
}

export default ProjectTemplate;
