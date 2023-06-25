import * as React from "react"
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import { Outlet } from "react-router-dom"

export default function AppOverlay({shoppingCart, setShoppingCart, products}) {
  
  return (
    <>
        <Navbar />
        <main>
          <Sidebar shoppingCart={shoppingCart} setShoppingCart={setShoppingCart} products={products} />
          <Outlet />
        </main>
    </>
  )
}
