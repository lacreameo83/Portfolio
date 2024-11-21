import React from 'react'
import AboutTemplate from './template/AboutTemplate';
//  text1, text2, text3, Title, reason, image; 
function About() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2">
      <div>
        <AboutTemplate
          text1="who"
          text2="i "
          text3="am"
          Title="Who i am"
          reason=" Osonwa Precious is a dedicated front-end developer with 6 months of experience in building responsive and user-friendly web applications and app aplications using React and React Native. With proficiency in HTML, CSS, JavaScript, and frameworks like React, I have developed a solid foundation in creating interactive and visually appealing user interfaces. Osonwa is passionate about leveraging modern web technologies such as Tailwind CSS, React Hook Form, and Material UI to enhance user experience and streamline development. My skill set also includes state management with Redux and integrating third-party APIs to add functionality to applications."
        />
        <div className="pl-6">
          <div className="flex items-center gap-2">
            <h2>Name :</h2>
            <p>Osonwa precious</p>
          </div>
          <div className="flex items-center gap-2">
            <h2>Year of Experience :</h2>
            <p>6 months.</p>
          </div>
          <div className="flex items-center gap-2">
            <h2>Nationality :</h2>
            <p>Nigrerian</p>
          </div>
          <div className="flex items-center gap-2">
            <h2>Gender :</h2>
            <p>Female</p>
          </div>
          <div className="flex items-center gap-2">
            <h2>Stack :</h2>
            <p>Frontend Developer</p>
          </div>
          <div className="flex items-center gap-2">
            <h2>Linkdlin :</h2>
            <a
              href="https://www.linkedin.com/in/osonwa-precious/"
              className="text-blue-700"
            >
              visit
            </a>
          </div>
          <div className="flex items-center gap-2">
            <h2>GitHub :</h2>
            <a href="https://github.com/lacreameo83" className="text-blue-700">
              visit
            </a>
          </div>
        </div>
      </div>
      <div className=" md:mt-40">
        <AboutTemplate
          text1="who"
          text2="i "
          text3="am"
          Title="Why choose Precious ?"
          reason=" Osonwa Precious should be trusted and given a job due to my solid foundation in front-end development, enhanced by hands-on experience during my internship at Ril, a well-known tech lab. Through this internship, i gained practical knowledge by working on real-world projects, including building and maintaining web applications. My ability to handle API integration, manage data flow, and create responsive designs demonstrates their readiness for professional work. Furthermore, My passion for learning and growing in the field ensures i can adapt quickly to new challenges and continue delivering high-quality results."
        />
      </div>
    </div>
  );
}

export default About
