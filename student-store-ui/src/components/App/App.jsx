import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppOverlay from "./AppOverlay";
import Home from "../Home/Home";
import "./App.css";
import ProductDetail from "../_atomic/ProductDetail";
import axios from 'axios';

export default function App() {
  const [shoppingCart, setShoppingCart] = useState([]);
  const [products, setProducts] = useState();

  useEffect(() => {
    axios.get(`http://localhost:3001/`)
      .then((response) => {
          setProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      })

  }, []);

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <AppOverlay
                shoppingCart={shoppingCart}
                setShoppingCart={setShoppingCart}
                products={products}
              />
            }
          >
            <Route
              path=""
              element={
                <Home
                  shoppingCart={shoppingCart}
                  setShoppingCart={setShoppingCart}
                  products={products}
                />
              }
            />
            <Route path="/products/:id" element={<ProductDetail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
