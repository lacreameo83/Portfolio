import React from "react";

function ProjectTemplate({ image, purpose, link, title }) {
  return (
    <div className="bg-white   lg:w-[20vw] h-[65vh] p-5 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
      {/* Image Section */}
      <div className="h-[30vh] mb-4">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      {/* Title */}
      <p className="text-[13px] font-semibold text-gray-800 mb-2">{title}</p>

      {/* Purpose */}
      <p className="text-[12px] h-[20vh] text-gray-600 mb-3">{purpose}</p>

      {/* Link */}
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 text-[10px] hover:text-blue-700 transition-colors duration-300"
      >
        View Project
      </a>
    </div>
  );
}

export default ProjectTemplate;
