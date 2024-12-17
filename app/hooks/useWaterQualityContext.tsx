'use client'

import {  useContext } from "react"
import { WaterQualityContext, WaterQualityContextType } from "../context/WaterQualityContext"

const UseWaterQualityContext = () : WaterQualityContextType => {
    const context = useContext<WaterQualityContextType | undefined>(WaterQualityContext)
    if(!context){
        throw new Error("Data Kosong")
    }
    return context
}

export default UseWaterQualityContext