import * as React from "react"
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
