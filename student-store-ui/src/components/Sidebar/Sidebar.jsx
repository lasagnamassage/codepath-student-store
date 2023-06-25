import * as React from "react";
import { useState } from "react";
import "./Sidebar.css";
import ShoppingCart from "../_atomic/ShoppingCart";
import CheckoutForm from "../_atomic/CheckoutForm";

/**
 * Handles all sidebar/sidepanel functioanlity
 * @param formData Passed through this component to CheckoutForm
 * @param products Passed through this component to CheckoutForm and ShoppingCart 
 * @param shoppingCart Passed through this component to CheckoutForm and ShoppingCart 
*/
export default function Sidebar({ shoppingCart, setShoppingCart, products }) {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [checkout, setCheckout] = useState({});

  function handleOnToggle() {
    setIsOpen(!isOpen);
  }

  function handleAdditionalDetails() {
    // if open with items
    if (isOpen && shoppingCart.length > 0) {  // display shopping cart and checkout option
      return (
        <>
          <ShoppingCart
            shoppingCart={shoppingCart}
            products={products}
            checkout={checkout}
            setCheckout={setCheckout}
          />
          <CheckoutForm
            formData={formData}
            setFormData={setFormData}
            shoppingCart={shoppingCart}
            setShoppingCart={setShoppingCart}
            products={products}
            checkout={checkout}
            setCheckout={setCheckout}
          />
        </>
      );
      // if open with no items
    } else if (isOpen && shoppingCart.length === 0) { // show user that no items are present
      return <h3 className="notice">No items in cart</h3>;
      // if closed
    } else { // show no additional details
      return null;
    }
  }

  return (
    <section className="sidebar" style={{ width: isOpen ? "551px" : "150px" }}>
      <button className="toggle-button" onClick={() => handleOnToggle()}>
        {isOpen ? "Close ←" : "Checkout →"}
      </button>
      {handleAdditionalDetails()}
    </section>
  );
}
