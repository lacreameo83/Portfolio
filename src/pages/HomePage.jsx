import React from 'react'
import Home from '../Projects'
import { Outlet } from 'react-router-dom'
import Nav from '../Nav';
import HomeOutput from '../HomeOutput';
function HomePage() {
  return (
    <div className="h-[100vh] w-[100vw] flex flex-col items-center bg-  ">
      <div className="ball1 blurred-ball h-[50px] w-[50px] top-[10px] left-[10px] sm:w-[200px] sm:h-[200px] sm:top-[50px] sm:left-[50px]  "></div>
      <div className="ball2 blurred-ball h-[50px] w-[50px] top-[10px] right-[10px] sm:w-[180px] sm:h-[180px] sm:top-[50px] sm:right-[-50px] "></div>
      <div className="ball3 blurred-ball h-[50px] w-[50px] left-[10px] bottom-[10px] sm:w-[220px] sm:h-[220px] sm:left-[50px] sm:bottom-[-50px] "></div>
      {/* <div className="ball4 blurred-ball w-[200px] h-[200px] right-[50px] bottom-[-50px] "></div> */}
      <div className="h-[10vh] mb-4 sticky top-0 z-30 border-b-[1px] border-white w-full shadow-sm bg-white/30 backdrop-blur-sm">
        <Nav />
      </div>
      <div class="glass-div">
        <Outlet />
      </div>
    </div>
  );
}

export default HomePage
