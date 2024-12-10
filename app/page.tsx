'use client'
import React from "react";
import WaterQualityProvider from "@/lib/WaterQualityProvider";
import MainLayout from "./components/MainLayout";
import Dashboard from "./dahsboard/page";

const  Home = () => {
  return (
    <div>
      <WaterQualityProvider>
        <MainLayout>
          <Dashboard/>
        </MainLayout>
      </WaterQualityProvider>
    </div>

  );
}

export default Home