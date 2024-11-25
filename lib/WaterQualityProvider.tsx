'use client'
import React, { useState, useEffect } from "react";
import { WaterQualityContext, WaterQualityData } from "./WaterQualityContext";

const WaterQualityProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [data, setData] = useState<WaterQualityData[]>(() => {
        // Retrieve data from local storage on initial load
        const storedData = localStorage.getItem('waterQualityData');
        return storedData ? JSON.parse(storedData) : [];
    });
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [socket, setSocket] = useState<WebSocket | null>(null);

    useEffect(() => {
        const socket = new WebSocket('ws://localhost:5000/');
        setSocket(socket);

        socket.onopen = () => {
            console.log("WebSocket connection established");
            setLoading(false);
        };

        socket.onmessage = (event) => {
            try {
                const res: WaterQualityData = JSON.parse(event.data);
                setData(prevData => {
                    const updatedData = [...prevData, res];
                    // Save updated data to local storage
                    localStorage.setItem('waterQualityData', JSON.stringify(updatedData));
                    return updatedData;
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

    return (
        <WaterQualityContext.Provider value={{ data, loading, error }}>
            {children}
        </WaterQualityContext.Provider>
    );
};

export default WaterQualityProvider;