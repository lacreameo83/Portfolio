import React from 'react'
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <div className="h-[10vh] text-[10px] sm:text-[12px] w-[100vw] sticky to flex items-center justify-center gap-4 sm:gap-10 ">
      <Link to="/">
        <p className="nav">Home </p>
      </Link>
      <Link to="about">
        <p className="nav">About </p>
      </Link>

      <a
        href="/Osonwa_Precious_CV.pdf"
        download="Osonwa_Precious_CV.pdf"
        className=" nav "
      >
        Download CV
      </a>
      <Link to="projects">
        <p className="nav">Projects</p>
      </Link>
    </div>
  );
}

export default Nav
