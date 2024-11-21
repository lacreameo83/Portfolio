import React from 'react'
import Home from '../Projects'
import { Outlet } from 'react-router-dom'
import Nav from '../Nav';
import HomeOutput from '../HomeOutput';
function HomePage() {
  return (
    <div className="h-[100vh] w-[100vw] flex flex-col items-center bg-  ">
      <div className="ball1 blurred-ball"></div>
      <div className="ball2 blurred-ball"></div>
      <div className="ball3 blurred-ball"></div>
      <div className="ball4 blurred-ball"></div>
      <div className="h-[10vh] mb-4 sticky top-0 z-30 border-b-[1px] border-white w-full shadow-sm bg-white/30 backdrop-blur-sm">
        <Nav />
      </div>
      <div class="glass-div"><Outlet /></div>
    </div>
  );
}

export default HomePage
