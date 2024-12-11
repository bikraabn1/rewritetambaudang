'use client'
import React from "react";
import MainLayout from "../components/MainLayout";
import useWaterQualityContext from "@/app/hooks/useWaterQualityContext";

const ClientDetails: React.FC = () => {
    const { data } = useWaterQualityContext();

    console.log(data)

    if (!data || data.length === 0) {
        return <p>No data available</p>; // Menampilkan pesan jika tidak ada data
    }

    return (
        <>
            <MainLayout>
                <div className="overflow-x-auto outline">
                    <table className="table table-md table-zebra">
                        <thead>
                            <tr>
                                <th></th>
                                <th>PH</th>
                                <th>TDS</th>
                                <th>Color</th>
                                <th>Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item, index) => (
                                <tr key={item.id}>
                                    <th>{index + 1}</th>
                                    <td>{item.ph}</td>
                                    <td>{item.tds}</td>
                                    <td>{item.color}</td>
                                    <td>{item.time}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </MainLayout>
        </>
    );
}

export default ClientDetails