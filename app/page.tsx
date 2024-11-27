'use client'
import WaterQualityProvider from "@/lib/WaterQualityProvider";
import MainLayout from "./components/MainLayout";

export default function Home() {
  return (
    <div>
      <WaterQualityProvider>
        <MainLayout />
      </WaterQualityProvider>
    </div>

  );
}
