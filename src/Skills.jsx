import React from "react";
import { motion } from "framer-motion";

function Skills() {
  const skills = [
    { name: "HTML", level: "Expert", icon: "🌐" },
    { name: "CSS", level: "Expert", icon: "🎨" },
    { name: "JavaScript", level: "Advanced", icon: "📜" },
    { name: "React", level: "Advanced", icon: "⚛️" },
    { name: "React Native", level: "Advanced", icon: "📱" },
    { name: "Tailwind CSS", level: "Advanced", icon: "💨" },
    { name: "Material UI", level: "Intermediate", icon: "🖌️" },
    { name: "Redux", level: "Intermediate", icon: "📦" },
    { name: "Git", level: "Intermediate", icon: "🔧" },
    { name: "Zod (Validation)", level: "Intermediate", icon: "✔️" },
  ];

  return (
    <div className="p-6 border-t bg-black  sm:p-10   backdrop-blur-md  ">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center pb-6">
        <h2 className="text-3xl font-bold text-gray-300 mb-2">My Skills</h2>
        <p className="text-lg text-gray-300">Proficiency & Expertise</p>
      </div>

      {/* Skills Grid with Animation */}
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              staggerChildren: 0.2,
              duration: 0.5,
            },
          },
        }}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="p-4 rounded-lg shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 bg-white/90 backdrop-blur-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="flex items-center space-x-3">
              <span className="text-4xl">{skill.icon}</span>
              <h3 className="text-sm sm:text-xl font-semibold text-gray-700">
                {skill.name}
              </h3>
            </div>
            <p className="mt-2 text-sm text-gray-500">{skill.level}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Skills;
