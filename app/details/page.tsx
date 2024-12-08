// Details.tsx
import React, { useContext } from "react";
import { WaterQualityContext, WaterQualityContextType } from "@/lib/WaterQualityContext";

export default function Details() {
    const context = useContext<WaterQualityContextType | undefined>(WaterQualityContext);

    if (!context) {
        return <p>Detail Kosong</p>; // Menangani kasus di mana konteks tidak tersedia
    }

    const { data } = context;

    if (!data || data.length === 0) {
        return <p>No data available</p>; // Menampilkan pesan jika tidak ada data
    }

    return (
        <div className="overflow-x-auto">
            <table className="table">
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
    );
}