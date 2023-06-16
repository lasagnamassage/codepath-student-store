import * as React from "react"
import Logo from '../_atomic/Logo'
import "./Navbar.css"
import { Outlet } from "react-router-dom"

export default function Navbar() {
  return (
    <>
      <nav className="navbar">
        <Logo />
      </nav>
      <Outlet />
    </>
  )
}
