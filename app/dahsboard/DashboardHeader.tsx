'use client'
import React, { useContext, useState, useEffect } from "react"
import MiniCard from "./MiniCard"
import useWaterQualityContext from "../hooks/UseWaterQualityContext"

const DashboardHeader: React.FC = () => {
    const [time, setTime] = useState('')
    
    const context = useWaterQualityContext()

    const { data } = context

    const latestData = data[data.length - 1]

    useEffect(() => {
        if (latestData && latestData.time) {
            const date = new Date(latestData.time);
            const formattedTime = `${String(date.getUTCHours()).padStart(2, '0')}:${String(date.getUTCMinutes()).padStart(2, '0')}:${String(date.getUTCSeconds()).padStart(2, '0')}`;
            setTime(formattedTime);
        }
    }, [latestData]);

    return (
        <>
            {latestData ? (
                <div className="flex flex-row flex-wrap justify-center items-center gap-6 bg-base-100 w-full">
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