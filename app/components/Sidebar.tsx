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
                <div className="drawer-content flex flex-col items-center justify-center bg-base-100" onClick={props.onClose}>
                    {props.children}
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu bg-base-100 text-base-content min-h-full w-80 p-4">
                        <li><a>Sidebar Item 1</a></li>
                        <li><a>Sidebar Item 2</a></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Sidebar

{/* <div class="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content flex flex-col items-center justify-center">
    <!-- Page content here -->
    <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">
      Open drawer
    </label>
  </div>
  <div class="drawer-side">
    <label for="my-drawer-2" aria-label="close sidebar" class="drawer-overlay"></label>
    <ul class="menu bg-base-200 text-base-content min-h-full w-80 p-4">
      <!-- Sidebar content here -->
      <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>
    </ul>
  </div>
</div> */}