import * as React from "react";
import ProductGrid from "../_atomic/ProductGrid";
import "./Home.css";
import image from "../../assets/hero.gif";

export default function Home({ setShoppingCart, shoppingCart, products }) {
  return (
    <div className="home" style={{ overflow: "scroll" }}>
      <div className="hero" style={{ textAlign: "center" }}>
        <span
          className="intro"
          style={{ fontSize: "50px", fontFamily: "monaco" }}
        >
          Welcome, shopper
        </span>
        <br />
        <img className="hero-img" alt="logo" src={image} />
      </div>
      <ProductGrid
        products={products}
        setShoppingCart={setShoppingCart}
        shoppingCart={shoppingCart}
      />
    </div>
  );
}
