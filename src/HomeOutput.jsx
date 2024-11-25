import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image from "../src/assets/mypicture.png";
import ProjectSample from "./ProjectSample";
import Skills from "./Skills";
import ContactForm from "./ContactForm";

function HomeOutput() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    arrows: false,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="">
      {/* Hero Section */}
      <div className="grid h-[80vh] bg-black grid-cols-1 lg:grid-cols-2 gap-10 px-6 py-10 sm:px-20 sm:py-16 items-center">
        <div className="flex justify-center relative">
          <img
            className="h-48 w-48 sm:h-72 sm:w-72 lg:h-80 lg:w-80 rounded-full object-cover shadow-lg relative z-10"
            src={image}
            alt="mypicture"
          />
          <div className="absolute h-56 w-56 sm:h-80 sm:w-80 lg:h-76 lg:w-76 rounded-full blur-xl bg-gradient-to-r from-pink-500 via-pink-200 to-pink-100 opacity-50 z-0"></div>
        </div>
        <div className="text-center  lg:text-left space-y-4">
          <p className="text-lg sm:text-2xl font-medium text-gray-300">
            Hi, I'm Osonwa Precious.
          </p>
          <h1 className="text-3xl sm:text-5xl font-bold text-gray-100">
            A Frontend Developer
          </h1>
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
            As a skilled frontend developer with a proven track record of
            creating responsive, user-friendly applications using modern
            technologies like React, Tailwind CSS, and Redux, I excel at
            delivering innovative solutions that enhance user experiences and
            drive business success.
          </p>
          {/* Skills Slider */}
          <div className="h-24 mt-6">
            <Slider {...settings}>
              <div className="p-4    shadow-lg rounded-lg text-center text-gray-200 transition-transform duration-300 transform hover:scale-105 ">
                React
              </div>
              <div className="p-4 shadow-lg rounded-lg text-center text-gray-200 transition-transform duration-300 transform hover:scale-105 ">
                React Native
              </div>
              <div className="p-4   shadow-lg rounded-lg text-center text-gray-200 transition-transform duration-300 transform  hover:scale-105 ">
                Tailwind CSS
              </div>
              <div className="p-4 shadow-lg   rounded-lg text-center text-gray-200 transition-transform duration-300 transform hover:scale-105 ">
                Material UI
              </div>
              <div className="p-4 shadow-lg   rounded-lg text-center text-gray-200 transition-transform duration-300 transform hover:scale-105 ">
                Framer Motion
              </div>
            </Slider>
          </div>
        </div>

        {/* Image Section */}
      </div>

      {/* Projects Section */}
      <section className=" ">
        <ProjectSample />
      </section>

      {/* Skills Section */}
      <section className="">
        <Skills />
      </section>

      {/* Contact Form */}
      <section className="">
        <ContactForm />
      </section>
    </div>
  );
}

export default HomeOutput;
