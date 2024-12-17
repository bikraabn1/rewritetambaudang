'use client'
import Card from "../components/Card"
import UseWaterQualityContext from "@/app/hooks/UseWaterQualityContext"
import DashboardHeader from "./DashboardHeader"

const Dashboard: React.FC = () => {
    
    const { data } = UseWaterQualityContext()

    const dataForChart = data.slice(-10)

    return (
        <>
            <div className="hero bg-base-100 flex flex-col h-[100vh] lg:pt-20 justify-start gap-6">
                <DashboardHeader />
                <div className="flex flex-col lg:flex-row justify-center items-center gap-6 w-full">
                    <Card
                        data={dataForChart}
                        dataKey="ph"
                        title="ph"
                    />

                    <Card
                        data={dataForChart}
                        dataKey="tds"
                        title="tds"
                    />
                </div>
            </div>
        </>
    )
}

export default Dashboard