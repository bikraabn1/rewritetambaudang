interface MiniCardProps{
    text : string,
    data : string,
    style?: React.CSSProperties 
}

const MiniCard : React.FC<MiniCardProps> = (props) => {
    return (
        <>
            <div className="card w-[18.75rem] min-h-max shadow-xl bg-base-300" style={props.style}>
                <div className="card-body">
                    <div className="card-actions justify-start">
                        <p>{props.text}</p>
                        <p className="flex-grow text-center">{props.data}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MiniCard