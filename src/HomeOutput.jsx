import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image from '../src/assets/mypicture.png'
import Projects from "./Projects";

function HomeOutput() {

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
//   slidesToScroll: 4,
  arrows: false,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  pauseOnHover: true,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
};

    
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 m-8  sm:m-20">
        <div>
          <p className="text-[20px] text-center sm:text-start Home">
            Hi Am Osonwa Precious.
          </p>
          <p className="sm:text-[60px] text-[30px] text-center sm:text-start Home ">
            A Frontend Developer{" "}
          </p>
          <p className="text-[20px] text-pretty  Home2">
            As a skilled frontend developer with a proven track record of
            creating responsive, user-friendly applications using modern
            technologies like React, Tailwind CSS, and Redux, I excel at
            delivering innovative solutions that enhance user experiences and
            drive business success.
          </p>
          <div className=" h-[10vh] mt-10   ">
            <Slider {...settings}>
              <div className="text-black  p-1 ">React</div>
              <div>React Native</div>
              <div>Tailwind</div>
              <div>Material UI</div>
              <div>Frama Motion</div>
            </Slider>
          </div>
        </div>
        <div className="flex items-center relative justify-center row-start-1 row-end-2  ">
          <img
            className=" h-[20vh] w-[40vw] sm:h-[50vh] sm:w-[60vw]   lg:h-[60vh] lg:w-[30vw] rounded-[100%] relative z-10 object-cover "
            src={image}
            alt="mypicture"
          />
          <div className="h-[65vh] w-[32vw] rounded-full blur-sm opacity-30 bg-gradient-to-r from-pink-500 via-pink-100 to-pink-100 absolute"></div>
        </div>
      </div>
      <Projects />
    </div>
  );
}

export default HomeOutput;
