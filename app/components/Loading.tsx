import { useGSAP } from "./UseGSAP"
import gsap from "gsap"
import { useEffect } from "react"

export default function Loading(){
    const circleRef = useGSAP(()=> {
        const timeline = gsap.timeline({repeat : -1})

        timeline
            .to('.circle', {y: '-100%', ease: 'power.in'})
            .to('.circle', {y: 0, ease: 'power.in', duration: .25})

        return timeline
    })

    useEffect(() => {
        const loadingTimeout = setTimeout(() => {
            gsap.killTweensOf(circleRef.current); 
        }, 5000); 

        return () => clearTimeout(loadingTimeout); 
    }, [circleRef]);

    return(
        <>
            <div className="bg-base-100 absolute w-full h-full flex justify-center items-center">
                <div className="flex justify-center items-end border-black border-b-2 w-16 h-16">
                    <div ref={ circleRef } className="circle w-10 h-10 bg-black rounded-full"></div>
                </div>
            </div>
        </>
    )
}