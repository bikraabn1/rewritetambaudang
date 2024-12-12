import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

interface MainLayoutProps{
    children: React.ReactNode
}

export default function MainLayout({children} : MainLayoutProps) {

    return (
        <div>
            <Sidebar>
                <Navbar />
                <div>
                    {children}
                </div>
            </Sidebar>
        </div>

    );
}