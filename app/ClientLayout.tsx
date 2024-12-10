import WaterQualityProvider from "@/lib/WaterQualityProvider";
import MainLayout from "./components/MainLayout";

const ClientLayout = ({ children } : { children : React.ReactNode}) => {
    return <>
        <WaterQualityProvider>
            <MainLayout>
                {children}
            </MainLayout>
        </WaterQualityProvider>
    </>
}

export default ClientLayout