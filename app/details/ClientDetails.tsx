'use client'
import React, { useState } from "react";
import MainLayout from "../components/MainLayout";
import UseWaterQualityContext from "@/app/hooks/UseWaterQualityContext";
import UseExcelWriter from "../hooks/UseExcelWriter";
import { MdOutlineFileDownload } from "react-icons/md";

const ClientDetails: React.FC = () => {
    const { data } = UseWaterQualityContext();

    console.log(data)

    if (!data || data.length === 0) {
        return <p>No data available</p>; // Menampilkan pesan jika tidak ada data
    }

    const itemPerPage = 10
    const [currentPage, setCurrentPage] = useState<number>(1)
    const totalPages = Math.ceil(data.length / itemPerPage)

    const handlePageChange = (page: number) => {
        setCurrentPage(page)
    }

    const paginatedData = data.slice(
        (currentPage - 1) * itemPerPage,
        currentPage * itemPerPage
    )

    const { exportToExcel } = UseExcelWriter()

    const handleExport = async () => {
        await exportToExcel(data, 'data')
    }

    return (
        <>
            <MainLayout>
                <div className="w-full flex justify-end mt-5">
                    <button className="btn bg-base-300 rounded-full me-5" onClick={handleExport}>
                        <span><MdOutlineFileDownload /></span>
                        <span className="border-l-2 border-neutral ps-1">Download</span>
                    </button>
                </div>

                <div className="overflow-x-auto flex flex-col justify-evenly items-center min-h-[90dvh]">
                    <table className="table table-sm table-zebra w-[80%]">
                        <thead>
                            <tr className="bg-base-200 rounded-md">
                                <th>No</th>
                                <th>PH</th>
                                <th>TDS</th>
                                <th>Color</th>
                                <th>Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            {paginatedData.map((item, index) => (
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
                    <div className="join">
                        {Array.from({ length: totalPages }, (_, i) => (
                            <button
                                key={i}
                                onClick={() => handlePageChange(i + 1)}
                                className={`join-item btn btn-md mt-10 ${currentPage === i + 1 ? 'btn-active' : ''} ${totalPages === 1 ? 'full rounded' : ''}`}
                            >
                                {i + 1}
                            </button>
                        ))}
                    </div>

                </div>
            </MainLayout>
        </>
    );
}

export default ClientDetails