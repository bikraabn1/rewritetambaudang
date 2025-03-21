'use client'
import React, { useState, useEffect } from "react";
import { WaterQualityContext, WaterQualityData } from "./WaterQualityContext";
import Loading from "@/app/components/Loading";

const WaterQualityProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [data, setData] = useState<WaterQualityData[]>([])
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [socket, setSocket] = useState<WebSocket | null>(null);

    useEffect(() => {
        // Reconnection logic
        const connectWebSocket = () => {
            const newSocket = new WebSocket('ws://localhost:5500');

            newSocket.onopen = () => {
                console.log("WebSocket connection established");
                setError(null);
                setSocket(newSocket);
            };

            newSocket.onmessage = (event) => {
                try {
                    const res: WaterQualityData = JSON.parse(event.data);
                    setData(prevData => {
                        const updatedData = [...prevData, res];
                        const latestData = updatedData.slice(-100)
                        localStorage.setItem('waterQualityData', JSON.stringify(latestData));
                        return latestData;
                    });
                    setLoading(false)
                } catch (e) {
                    setError("Failed to parse incoming data: " + e);
                }
            };

            newSocket.onerror = (e) => {
                console.error("WebSocket error:", e);
                setError("WebSocket connection error");
                setLoading(true);
            };

            newSocket.onclose = (event) => {
                console.log("WebSocket connection closed", event);
                setError("WebSocket disconnected");
                setLoading(true);

                // Attempt to reconnect after 5 seconds
                setTimeout(connectWebSocket, 5000);
            };
        };

        connectWebSocket();

        // Cleanup function
        return () => {
            if (socket) {
                socket.close();
            }
        };
    }, []); // Empty dependency array to run only once

    if (loading) {
        console.log("loading...")
        return <Loading dataFound={data.length > 0}/>;
    }

    return (
        <WaterQualityContext.Provider value={{ data, loading, error }}>
            {children}
        </WaterQualityContext.Provider>
    );
};

export default WaterQualityProvider;