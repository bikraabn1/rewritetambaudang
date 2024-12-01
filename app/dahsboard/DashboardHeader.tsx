import React, { useContext, useState, useEffect } from "react"
import MiniCard from "./MiniCard"
import { WaterQualityContext } from "@/lib/WaterQualityContext"
import { WaterQualityData } from "@/lib/WaterQualityContext"

const DashboardHeader: React.FC = () => {
    const context = useContext(WaterQualityContext)
    const [time, setTime] = useState('')

    if (!context) {
        return <div>Loading...</div>
    }

    const { data } = context

    const latestData: WaterQualityData | undefined = data[data.length - 1]

    useEffect(() => {
        if (latestData) {
            const date = new Date(latestData.time);
            const formattedTime = `${String(date.getUTCHours()).padStart(2, '0')}:${String(date.getUTCMinutes()).padStart(2, '0')}:${String(date.getUTCSeconds()).padStart(2, '0')}`;
            setTime(formattedTime);
        }
    }, [latestData]);

    return (
        <>
            {latestData ? (
                <div className="w-full flex flex-row justify-center items-center gap-10 bg-base-200">
                    <MiniCard text={`ph :`} data={latestData.ph.toString()}/>
                    <MiniCard text={`tds :`} data={latestData.tds.toString()}/>
                    <MiniCard text={`color :`} data={'#' + latestData.color.toString()} style={{backgroundColor: `#${latestData.color.toString()}`}}/>
                    <MiniCard text={`time :`} data={time}/>

                </div>
            ) :
                <div>No Data Available</div>
            }
        </>
    )
}

export default DashboardHeader