'use client'
import { useEffect, useState } from "react"
import ThemeController from "./ThemeController"
import { usePathname } from "next/navigation"

export default function Navbar() {
  const [sidebarTitle, setSidebarTitle] = useState("")
  let pathname = usePathname()

  useEffect(() => {
    if (pathname == "/") {
      pathname = 'dashboard'
    }

    const formattedSideBarTitle = pathname.slice(0, 0) + pathname.charAt(0).toUpperCase() + pathname.slice(1)

    setSidebarTitle(formattedSideBarTitle)
  }, [pathname])

  console.log(pathname)

  return (
    <div className="navbar bg-base-200 h-[10dvh]">
      <div className="flex-1">
        <label htmlFor="my-drawer-2" className="btn btn-ghost drawer-button top-0 left-0">
          <div className="flex-none">

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
          </div>
        </label>
        <a className="font-semibold text-xl">{sidebarTitle}</a>
      </div>
      <div className="flex-none">
        <ThemeController />
      </div>
    </div>
  )
}

