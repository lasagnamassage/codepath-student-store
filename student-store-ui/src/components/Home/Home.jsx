import * as React from "react"
import Hero from "../_atomic/Hero";
import { useEffect, useState } from "react";
import ProductGrid from "../_atomic/ProductGrid";
import axios from 'axios';
import "./Home.css"

export default function Home() {
  let handleAddItemToCart;
  let handleRemoveItemToCart;
  const [products, setProducts] = useState();



  useEffect(() => {
    axios.get(`http://localhost:3001/store`)
      .then((response) => {
          setProducts(response.data.products);
      })
      .catch((error) => {
        console.log(error);
      })

  }, []);
  
  return (
    <div className="home" style={{ overflow: "scroll"}}>
      <Hero />
      <ProductGrid products={products}/>
    </div>
  )
}
