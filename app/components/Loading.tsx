'use client'
import { UseGSAP } from "../hooks/UseGSAP"
import gsap from "gsap"
import { useEffect, useRef } from "react"

interface LoadingProps {
    dataFound: boolean; // Definisikan tipe untuk props
}

const Loading: React.FC<LoadingProps> = ({ dataFound }) => {
    const circleRef = UseGSAP(() => {
        const timeline = gsap.timeline({ repeat: -1 });

        timeline
            .to('.circle', { y: '-100%', ease: 'power.in' })
            .to('.circle', { y: 0, ease: 'power.in', duration: 0.25 });

        return timeline;
    });

    useEffect(() => {
        if (dataFound) { // Cek apakah data ditemukan
            const loadingTimeout = setTimeout(() => {
                gsap.killTweensOf(circleRef.current);
            }, 5000);

            return () => clearTimeout(loadingTimeout);
        }
    }, [circleRef, dataFound]); // Tambahkan dataFound ke dalam dependency array

    return (
        <>
            <div className="bg-base-100 absolute w-full h-full flex justify-center items-center">
                <div className="flex justify-center items-end border-black border-b-2 w-16 h-16">
                    <div ref={circleRef} className="circle w-10 h-10 bg-black rounded-full"></div>
                </div>
            </div>
        </>
    );
}

export default Loading;