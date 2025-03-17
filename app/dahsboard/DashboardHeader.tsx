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
            
            const wibHours = (date.getUTCHours() + 7) % 24;
            const formattedTime = `${String(wibHours).padStart(2, '0')}:${String(date.getUTCMinutes()).padStart(2, '0')}:${String(date.getUTCSeconds()).padStart(2, '0')}`;
            
            setTime(formattedTime);
        }
    }, [latestData]);

    return (
        <>
            {latestData ? (
                <div className="flex flex-row flex-wrap justify-center items-center gap-4 md:gap-6 bg-base-100 w-full ">
                    <MiniCard text={`pH :`} data={latestData.ph.toString()}/>
                    <MiniCard text={`DO :`} data={latestData.doValue.toString()}/>
                    <MiniCard text={`TDS :`} data={latestData.tds.toString()}/>
                    <MiniCard text={`Temp :`} data={latestData.temp.toString()}/>
                    <MiniCard text={`Sal :`} data={latestData.sal.toString()}/>
                    <MiniCard text={`Color :`} data={'#' + latestData.color.toString()} style={{backgroundColor: `#${latestData.color.toString()}`}}/>
                    <MiniCard text={`Time :`} data={time}/>
                </div>
            ) :
                <div>No Data Available</div>
            }
        </>
    )
}

export default DashboardHeader