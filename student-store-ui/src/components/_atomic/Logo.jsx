import * as React from "react"
import { Link } from "react-router-dom"

export default function Logo() {
  return (
    <div className="logo">
        <Link style={{ color: "white", textDecoration: "None", fontSize: "28px", paddingLeft: '1%'}} to="/">
        Store
        </Link>
    </div>
  )
}
