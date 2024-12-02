'use client'
import React, { useState, useEffect } from "react";
import { WaterQualityContext, WaterQualityData } from "./WaterQualityContext";
import Loading from "@/app/components/Loading";

const WaterQualityProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [data, setData] = useState<WaterQualityData[]>([])
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const storedData = localStorage.getItem('waterQualityData');
        if (storedData) {
            setData(JSON.parse(storedData));
        }
        setLoading(false)
    }, []);

    useEffect(() => {
        const socket = new WebSocket('ws://localhost:5000/');

        socket.onopen = () => {
            console.log("WebSocket connection established");
            setLoading(false);
        };

        socket.onmessage = (event) => {
            try {
                const res: WaterQualityData = JSON.parse(event.data);
                setData(prevData => {
                    const updatedData = [...prevData, res];
                    const latestData = updatedData.slice(-100)
                    localStorage.setItem('waterQualityData', JSON.stringify(latestData));
                    return latestData;
                });
            } catch (e) {
                setError("Failed to parse incoming data: " + e);
            }
        };

        socket.onerror = (e) => {
            setError("WebSocket error: " + e);
        };

        socket.onclose = () => {
            console.log("WebSocket connection closed");
        };

        // Cleanup function to close the socket when the component unmounts
        return () => {
            socket.close();
        };
    }, []);

    if(loading){
        return (
            <Loading />
        )
    }

    return (
        <WaterQualityContext.Provider value={{ data, loading, error }}>
            {children}
        </WaterQualityContext.Provider>
    );
};

export default WaterQualityProvider;