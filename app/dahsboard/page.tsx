import Card from "../components/Card"
import { useContext } from "react"
import { WaterQualityContext, WaterQualityContextType } from "@/lib/WaterQualityContext"

const Dashboard : React.FC = () => {
    const context = useContext<WaterQualityContextType | undefined>( WaterQualityContext )
    if (!context) {
        throw new Error('Dashboard error entahlah kenapa')
    }

    const {data, loading, error} = context

    const dataForChart = data.slice(-10)

    return (
        <>
            <div className="hero bg-base-200 outline outline-1 min-w-[100dvw] min-h-screen flex flex-row justify-center items-start rounded-lg ">
                <div>
                    <Card data={dataForChart} dataKey="ph"/>
                </div>
            </div>
        </>
    )
}

export default Dashboard