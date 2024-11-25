import React from "react";

interface SidebarProps{
    open : boolean,
    onClose : () => void,
    children : React.ReactNode
}

const Sidebar : React.FC<SidebarProps> = (props) => {
    return (
        <>
            <div className={`drawer ${props.open? "drawer-open": "drawer-close"}`}>
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center bg-base-200 w-full h-full" onClick={props.onClose}>
                    {props.children}
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu bg-base-100 text-base-content min-h-screen w-80 p-4">
                        <li><a>Sidebar Item 1</a></li>
                        <li><a>Sidebar Item 2</a></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Sidebar