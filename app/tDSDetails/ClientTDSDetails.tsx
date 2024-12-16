'use client'
import useWaterQualityContext from "../hooks/UseWaterQualityContext"
import Card from "../components/Card"
import MainLayout from "../components/MainLayout"


const ClientTDSDetails = () => {
    const { data } = useWaterQualityContext()

    const dataForChart = data.slice(-20)
    return (
        <>
            <MainLayout>
                <div className="flex justify-center items-center gap-10 mt-5 ">
                    <Card data={dataForChart} dataKey="ph" title="PH" />

                    <div className="w-[40rem]">
                        <table className="table table-sm table-zebra">
                            <thead>
                                <tr className="bg-base-200">
                                    <th>No</th>
                                    <th>TDS</th>
                                    <th>Time</th>
                                </tr>
                            </thead>
                            <tbody>
                                {dataForChart.map((item, index) => (
                                    <tr key={item.id}>
                                        <th>{index + 1}</th>
                                        <td>{item.tds}</td>
                                        <td>{item.time}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </MainLayout>
        </>
    )
}

export default ClientTDSDetails