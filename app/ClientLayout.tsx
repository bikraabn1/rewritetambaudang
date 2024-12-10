'use client'
import WaterQualityProvider from "@/lib/WaterQualityProvider";
import MainLayout from "./components/MainLayout";

const ClientLayout = ({ children } : { children : React.ReactNode}) => {
    return <>
            <MainLayout>
                {children}
            </MainLayout>
    </>
}

export default ClientLayout