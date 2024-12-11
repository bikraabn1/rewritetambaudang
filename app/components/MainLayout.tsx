import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Dashboard from "../dahsboard/page";
import Loading from "./Loading";

interface MainLayoutProps{
    children: React.ReactNode
}

export default function MainLayout({children} : MainLayoutProps) {

    return (
        <div>
            <Sidebar>
                <Navbar />
                <div className="outline min-w[100dvw]">
                    {children}
                </div>
            </Sidebar>
        </div>

    );
}