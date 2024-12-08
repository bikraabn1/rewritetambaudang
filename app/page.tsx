'use client'
import WaterQualityProvider from "@/lib/WaterQualityProvider";
import MainLayout from "./components/MainLayout";
import Dashboard from "./dahsboard/page";
import Details from "./details/page";

export default function Home() {
  return (
    <div>
      <WaterQualityProvider>
        <MainLayout>
          <Dashboard />
          <Details  />
        </MainLayout>
      </WaterQualityProvider>
    </div>

  );
}
