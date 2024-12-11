'use client'

import React, {  useContext } from "react"
import { WaterQualityContext, WaterQualityContextType } from "../context/WaterQualityContext"

const useWaterQualityContext = () : WaterQualityContextType => {
    const context = useContext<WaterQualityContextType | undefined>(WaterQualityContext)
    if(!context){
        throw new Error("Data Kosong")
    }
    return context
}

export default useWaterQualityContext