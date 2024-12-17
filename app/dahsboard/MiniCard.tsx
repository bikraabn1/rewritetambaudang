interface MiniCardProps{
    text : string,
    data : string,
    style?: React.CSSProperties 
}

const MiniCard : React.FC<MiniCardProps> = (props) => {
    return (
        <>
            <div className="card w-[11rem] sm:w-[20rem] lg:w-[19.25%] rounded-md md:min-h-max shadow-xl bg-base-300" style={props.style}>
                <div className="card-body">
                    <div className="card-actions justify-start">
                        <p className="text-sm lg:text-lg">{props.text}</p>
                        <p className="text-sm lg:text-lg flex-grow text-center ">{props.data}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MiniCard