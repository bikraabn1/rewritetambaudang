'use client'
import Card from "../components/Card"
import UseWaterQualityContext from "@/app/hooks/UseWaterQualityContext"
import DashboardHeader from "./DashboardHeader"

const Dashboard: React.FC = () => {
    
    const { data } = UseWaterQualityContext()

    const dataForChart = data.slice(-10)

    return (
        <>
            <div className="hero bg-base-100 flex flex-col pb-10 min-h-[90vh] pt-10 md:pt-14 lg:pt-18 justify-start gap-4 md:gap-6">
                <DashboardHeader />
                <div className="flex flex-col lg:flex-row flex-wrap justify-center items-center gap-4 md:gap-6 w-full ">
                    <Card
                        data={dataForChart}
                        dataKey="ph"
                        title="pH"
                        Ymin={0}
                        Ymax={14}
                    />

                    <Card
                        data={dataForChart}
                        dataKey="doValue"
                        title="Dissolved Oxygen"
                        Ymin={0}
                        Ymax={20}
                    />
                    <Card
                        data={dataForChart}
                        dataKey="temp"
                        title="Temperature"
                        Ymin={0}
                        Ymax={40}
                    />
                    <Card
                        data={dataForChart}
                        dataKey="sal"
                        title="Salinity"
                        Ymin={0}
                        Ymax={100}
                    />
                    <Card
                        data={dataForChart}
                        dataKey="tds"
                        title="Total Dissolved Solids"
                        Ymin={0}
                        Ymax={300}
                    />
                </div>
            </div>
        </>
    )
}

export default Dashboard