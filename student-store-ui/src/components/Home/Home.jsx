import * as React from "react"
import Hero from "../_atomic/Hero";
import ProductGrid from "../_atomic/ProductGrid";
import "./Home.css"

export default function Home(props) {
  let products = props.products;
  let handleAddItemToCart = props.handleAddItemToCart;
  let handleRemoveItemToCart = props.handleRemoveItemToCart;
  
  return (
    <div className="home">
      <Hero />
      <ProductGrid />
    </div>
  )
}
