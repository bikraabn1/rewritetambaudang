interface MiniCardProps{
    text : string,
    data : string,
    style?: React.CSSProperties 
}

const MiniCard : React.FC<MiniCardProps> = (props) => {
    return (
        <>
            <div className="card lg:w-[19.25%] rounded-md min-h-max shadow-xl bg-base-300" style={props.style}>
                <div className="card-body">
                    <div className="card-actions justify-start">
                        <p className="sm:text-sm">{props.text}</p>
                        <p className="flex-grow text-center ">{props.data}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MiniCard