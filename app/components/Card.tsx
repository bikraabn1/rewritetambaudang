import Chart from "./Chart"

interface CardProps{
    data: any[],
    dataKey: string,
    title: string,
}

export default function Card(props : CardProps) {
    return (
        <>
            <div className="card bg-base-300 w-[40rem] min-h-max shadow-xl">
                <div className="card-body">
                <Chart data={props.data} dataKey={props.dataKey}/>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">{props.title}</div>
                    </div>
                </div>
            </div>
        </>
    )
}