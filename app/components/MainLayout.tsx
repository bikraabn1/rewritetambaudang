import { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Dashboard from "../dahsboard/page";

export default function MainLayout() {

    const [toggle, setToggle] = useState(false)

    function OpenSideHandler(){
        setToggle(true)
        console.log("side bar open")
    }

    function CloseSideHandler(){
        setToggle(false)
        console.log("sidebar closed")
    }

    return (
        <div>
            <Sidebar open={toggle} onClose={CloseSideHandler}>
                <Navbar onOpen={OpenSideHandler} />
                <div>
                    <Dashboard />
                </div>
            </Sidebar>
        </div>

    );
}