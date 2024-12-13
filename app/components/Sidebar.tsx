import React from "react";
import Link from "next/link";

interface SidebarProps {
    children: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = (props) => {
    const path = [
        { name: 'Home', path: '/' },
        { name: 'Details', path: '/details' },
        { name: 'PH Details', path: '/ph' },
        { name: 'TDS Details', path: '/tds' },
    ]
    return (
        <div className="drawer">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                {props.children}
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                    <h2 className="w-full text-center text-2xl font-semibold py-5">Tambak Udang</h2>
                    <div className="flex flex-col gap-1">
                        { path.map((item, index) => <Link href={item.path} key={index} className="font-medium hover:bg-base-300 rounded-xl py-4 px-4">{item.name}</Link>) }
                    </div>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;