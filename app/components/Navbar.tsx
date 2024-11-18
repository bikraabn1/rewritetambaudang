import ThemeController from "./ThemeController"

interface NavbarProps {
  onOpen: () => void,
}

export default function Navbar(props: NavbarProps) {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle" onClick={props.onOpen}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7" />
            </svg>
          </div>
        </div>
        <div>
          <a className="btn btn-ghost text-2xl">Dashboard</a>
        </div>
      </div>
      <div className="navbar-end">
        <ThemeController />
      </div>
    </div>
  )
}

