import * as React from "react"
import { useState } from 'react';
import "./Sidebar.css"
import ShoppingCart from "../_atomic/ShoppingCart";
import CheckoutForm from "../_atomic/CheckoutForm";

export default function Sidebar({shoppingCart}) {
  const [isOpen, setIsOpen] = useState(false);

  function handleOnToggle() {
    setIsOpen(!isOpen)
  }

  function handleAdditionalDetails() {
    if (isOpen) {
      return (
        <>
          {
            shoppingCart.map( (item) => {
              <div className="cart-product">
                  <div className="cart-product-name">{item.id}</div> 
                  <div className="cart-product-quantity">{item.quantity}</div>
              </div>
          } )
          }
          <ShoppingCart />
          <CheckoutForm />
        </>
      )
    } else {
      return null
    }
  }

  return (
    <section className="sidebar" style={{ width: isOpen ? '351px' : '150px' }}>
      <button className="toggle-button" onClick={() => setIsOpen(!isOpen)}>
        { isOpen ? "Close ←" : "Checkout →"}
      </button>
      { handleAdditionalDetails() }
    </section>
  )
}