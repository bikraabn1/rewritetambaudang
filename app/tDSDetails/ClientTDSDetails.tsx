'use client'
import UseWaterQualityContext from "../hooks/UseWaterQualityContext"
import Card from "../components/Card"
import MainLayout from "../components/MainLayout"


const ClientTDSDetails = () => {
    const { data } = UseWaterQualityContext()

    const dataForChart = data.slice(-20)
    return (
        <>
            <MainLayout>
                <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-10 mt-5 ">
                    <Card data={dataForChart} dataKey="tds" title="TDS" />

                    <div className="w-[90%] md:w-[50%] pb-20">
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