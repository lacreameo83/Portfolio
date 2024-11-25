import React from "react";

function ProjectSample() {
  const projects = [
    {
      id: 1,
      title: "Tech Roadmap",
      description:
        "A structured learning guide tailored for tech enthusiasts, offering step-by-step learning paths and interactive quizzes.",
      link: "https://tech-roadmap-eight.vercel.app/",
    },
    {
      id: 2,
      title: "AI Chart Box",
      description:
        "An AI-powered solution that analyzes queries, provides real-time feedback, and enhances decision-making skills.",
      link: "https://ai-chat-box-ashy.vercel.app/",
    },
    {
      id: 3,
      title: "Jus Solar Website",
      description:
        "Promoting solar energy with high-quality products and services while educating users about sustainable energy solutions.",
      link: "https://sun-energy.vercel.app/",
    },
  ];

  return (
    <div className="p-10 ">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold ">My Projects</h2>
        <a
          href="#"
          className="text-sm  underline hover:text-blue-200 transition duration-300"
        >
          View More
        </a>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="p-6 bg-opacity-50 bg-white backdrop-blur-md rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <h3 className="text-xl font-semibold text-gray-800">
              {project.title}
            </h3>
            <p className="mt-2 text-sm text-gray-600">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-blue-600 underline hover:text-blue-800 transition duration-300"
            >
              Learn More
            </a>
          </div>
        ))}
      </div>

      {/* View More Button */}
      <div className="flex justify-center mt-10">
        <button className="px-6 py-3  text-lg bg-opacity-50 bg-white backdrop-blur-md rounded-full shadow-lg hover:bg-opacity-75 transition duration-300">
          View More Projects
        </button>
      </div>
    </div>
  );
}

export default ProjectSample;
