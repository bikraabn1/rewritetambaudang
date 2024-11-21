'use client'
import { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Chart from "./components/Chart";

export default function Home() {
  const [toggle, setToggle] = useState(false)

  function ToggleHandler() : void{
    setToggle(prevToggle => !prevToggle)
  }

  return (
    <div>
      <Sidebar open = {toggle} onClose={ToggleHandler}/>
      <Navbar onOpen={ToggleHandler}/>
      <div>
        <Chart />
      </div>
    </div>
    
  );
}
