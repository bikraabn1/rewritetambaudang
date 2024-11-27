import React, { useRef, useEffect } from "react";

interface SidebarProps {
    open: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = (props) => {
    const sidebarRef = useRef<HTMLDivElement>(null);

    const handleClickOutside = (event: MouseEvent) => {
        if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
            props.onClose();
        }
    };

    useEffect(() => {
        if (props.open) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [props.open]);

    return (
        <div className={`drawer ${props.open ? "drawer-open" : "drawer-close"}`}>
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center bg-base-100">
                {props.children}
            </div>
            <div className="drawer-side" ref={sidebarRef}>
                <label htmlFor="my-drawer-2" className="drawer-overlay" onClick={props.onClose}></label>
                <h2 className="self-center text-center">Tambak Udang</h2>
                <ul className="menu bg-base-100 text-base-content min-h-full w-80 p-4">
                    <li><a>Sidebar Item 1</a></li>
                    <li><a>Sidebar Item 2</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;