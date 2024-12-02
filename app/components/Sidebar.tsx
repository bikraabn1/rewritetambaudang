import React from "react";
import Link from "next/link";

interface SidebarProps {
    children: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = (props) => {
    const path = [
        { name: 'Home', path: '/' },
        { name: 'Details', path: '/details' },
        { name: 'PH Details', path: '/details/ph' },
        { name: 'TDS Details', path: '/details/tds' },
    ]
    return (
        <div className="drawer">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {props.children}
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                    <h2 className="w-full text-center text-2xl font-semibold py-5">Tambak Udang</h2>
                    { path.map((item, index) => <Link href={item.path} key={index}>{item.name}</Link>) }
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;