import { useState, useContext } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Board from "../dahsboard/page";
import { WaterQualityContext } from "@/lib/WaterQualityContext";
import Dashboard from "../dahsboard/page";
export default function MainLayout() {
    const context = useContext(WaterQualityContext)

    // Check if context is undefined
    if (!context) {
        return <div>Loading...</div>; // or handle the error appropriately
    }

    const {data, loading, error} = context

    const [toggle, setToggle] = useState(false)

    function ToggleHandler(): void {
        setToggle(prevToggle => !prevToggle)
    }

    console.log(data)

    return (
        <div>
            <Sidebar open={toggle} onClose={ToggleHandler}>
                <Navbar onOpen={ToggleHandler} />
                <div>
                    <Dashboard />
                </div>
            </Sidebar>
        </div>

    );
}