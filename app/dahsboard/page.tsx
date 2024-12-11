'use client'
import Card from "../components/Card"
import useWaterQualityContext from "@/app/hooks/useWaterQualityContext"
import DashboardHeader from "./DashboardHeader"

const Dashboard: React.FC = () => {
    
    const { data } = useWaterQualityContext()

    const dataForChart = data.slice(-10)

    return (
        <>
            <div className="hero bg-base-200 min-w-[100dvw] min-h-[90dvh] flex flex-col gap-5 justify-center items-center rounded-lg ">
                <DashboardHeader />
                <div className="flex flex-row justify-center items-center gap-10">
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