import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppOverlay from './AppOverlay'
import Home from "../Home/Home"
import "./App.css"

export default function App() {
  const [shoppingCart, setShoppingCart] = useState();
  
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppOverlay shoppingCart={shoppingCart} />}>
            <Route path="" element={<Home setShoppingCart={setShoppingCart} />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
