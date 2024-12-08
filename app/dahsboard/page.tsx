'use client'

import Card from "../components/Card"
import { useContext } from "react"
import { WaterQualityContext, WaterQualityContextType } from "@/lib/WaterQualityContext"
import DashboardHeader from "./DashboardHeader"

const Dashboard: React.FC = () => {
    const context = useContext<WaterQualityContextType | undefined>(WaterQualityContext)
    if (!context) {
        throw new Error('Dashboard error entahlah kenapa')
    }

    const { data } = context

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