import { Link } from "react-router-dom"
import "./Navbar.css"

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link style={{ color: "white", textDecoration: "None", fontSize: "28px", paddingLeft: '1%'}} to="/">
        ashauns-store.com
        </Link>
    </div>
    </nav>
  )
}
