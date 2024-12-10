import React from "react";
import WaterQualityProvider from "@/lib/WaterQualityProvider";
import MainLayout from "./components/MainLayout";
import Dashboard from "./dahsboard/page";

const  Home = () => {
  return (
    <div>
        <MainLayout>
          <Dashboard/>
        </MainLayout>
    </div>

  );
}

export default Home