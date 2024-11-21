import React from "react";
import { motion } from "framer-motion";
import ProjectTemplate from "./template/ProjectTemplate"; // Ensure correct import and capitalization
import techroadmap from "../src/assets/techroadmap.png";
import aichartbox from "../src/assets/aichartbox.png";
import jussolar from "../src/assets/jussolar.png";
import techquiz from "../src/assets/techquiz.png";
function Projects() {
  // Parent container variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.2, // Initial delay for better visibility of stagger
        staggerChildren: 0.25, // Time delay between each child animation
      },
    },
  };

  // Child elements' animation
  const childVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 2 } },
  };

  return (
    <div className="flex flex-col gap-10 overflow-x-hidden mt-10">
      {/* <p className="text-center text-[800]  mt-5 text-[15px]">My projects</p> */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="show" // Animates only when the section is in view
        viewport={{ once: true, amount: 0.1 }} // Triggers when 10% of section is in view
        className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 p-10 "
      >
        <motion.div variants={childVariants} className="">
          <ProjectTemplate
            image={techroadmap}
            purpose="A Tech Roadmap is a comprehensive guide designed to help individuals in the tech field by providing a structured learning path tailored to their chosen role, offering step-by-step guidance on essential skills and technologies, and testing their progress through quizzes to evaluate their understanding and reinforce their learning journey."
            link="https://tech-roadmap-eight.vercel.app/"
            title="Tech Roadmap"
          />
        </motion.div>
        <motion.div variants={childVariants}>
          <ProjectTemplate
            image={aichartbox}
            purpose="
The AI Chart Box leverages AI to offer real-time feedback and personalized solutions. It helps enhance problem-solving skills by analyzing user queries. The tool promotes better decision-making and critical thinking. It’s a valuable resource for efficiently resolving complex issues."
            link="https://ai-chat-box-ashy.vercel.app/"
            title="AI Powered Chart Box "
          />
        </motion.div>
        <motion.div variants={childVariants}>
          <ProjectTemplate
            image={techquiz}
            purpose="The purpose of creating TechyQuiz is to provide an engaging platform for tech enthusiasts to test their knowledge, enhance their skills, and track their progress through interactive quizzes tailored to various technologies and expertise levels."
            link="https://tech-quiz-gxmx.vercel.app/"
            title="TechyQuiz

"
          />
        </motion.div>
        <motion.div variants={childVariants}>
          {" "}
          <ProjectTemplate
            image={jussolar}
            purpose="
The aim of building a solar website is to educate users on the benefits of solar energy, showcase high-quality solar products and services, and provide an accessible platform for inquiries, consultations, and seamless purchasing to promote sustainable energy solutions."
            link="https://sun-energy.vercel.app/"
            title="Jus Solar Website"
          />
        </motion.div>
      </motion.section>
    </div>
  );
}

export default Projects;
