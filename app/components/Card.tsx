import Chart from "./Chart"

interface CardProps{
    data: any[],
    dataKey: string,
    title: string,
    Ymin: number,
    Ymax: number
}

export default function Card(props : CardProps) {
    return (
        <>
            <div className="card rounded-md bg-base-300 w-[90%] md:w-[80%] lg:w-[40%]">
                <div className="card-body">
                <Chart data={props.data} dataKey={props.dataKey} Ymax={props.Ymax} Ymin={props.Ymin}/>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">{props.title}</div>
                    </div>
                </div>
            </div>
        </>
    )
}