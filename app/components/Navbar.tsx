'use client'
import ThemeController from "./ThemeController"
import { usePathname } from "next/navigation"

interface NavbarProps {
  onOpen: () => void,
}

export default function Navbar(props: NavbarProps) {
  // const pathname = usePathname()
  
  return (
    <div className="navbar bg-base-200 h-[10dvh]" onClick={props.onOpen}>
      <div className="flex-none">
        <button className="btn btn-square btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-5 w-5 stroke-current">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Tambak Udang</a>
      </div>
      <div className="flex-none">
        <ThemeController />
      </div>
    </div>
  )
}

