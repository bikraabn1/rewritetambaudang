'use client'
import { useState, useContext } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Chart from "./components/Chart";
import Board from "./dahsboard/page";
import WaterQualityProvider from "@/lib/WaterQualityProvider";
import MainLayout from "./components/MainLayout";

export default function Home() {
  const [toggle, setToggle] = useState(false)

  function ToggleHandler(): void {
    setToggle(prevToggle => !prevToggle)
  }

  return (
    <div>
      <WaterQualityProvider>
        <MainLayout />
      </WaterQualityProvider>
    </div>

  );
}
