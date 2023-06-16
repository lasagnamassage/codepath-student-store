import * as React from "react"
import { useState, useEffect } from "react"
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import ProductDetail from '../_atomic/ProductDetail'
import Home from "../Home/Home"
import NotFound from '../NotFound/NotFound'
import "./App.css"
import axios from 'axios';

export default function App() {
  const [originalProducts, setOriginalProducts] = useState();
  const [products, setProducts] = useState();

  useEffect(() => {
    axios.get(`https://codepath-store-api.herokuapp.com/store`)
    .then((response) => {
        setOriginalProducts(response.data.products)
        setProducts(response.data.products)
    })
    .catch((error) => {
        if (error.response && error.response.status == 404) {
            console.error("Error: " + error.response)
        }
    })
  }, []);

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Navbar />}>
            <Route path="" element={<Home products={products} setProducts={setProducts} originalProducts={originalProducts}  />}/>
            <Route path="products/:id" element={<ProductDetail />} />
          </Route>
          <Route path="*" element={ <NotFound /> } />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
