import { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Dashboard from "../dahsboard/page";

export default function MainLayout() {

    return (
        <div>
            <Sidebar>
                <Navbar />
                <div>
                    <Dashboard />
                </div>
            </Sidebar>
        </div>

    );
}