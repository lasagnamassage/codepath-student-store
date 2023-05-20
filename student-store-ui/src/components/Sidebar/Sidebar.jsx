import * as React from "react"
import { useState } from 'react';
import "./Sidebar.css"
import PropTypes from 'prop-types';

export default function Sidebar(props) {
  [isOpen, setIsOpen] = useState(props.isOpen);

  function handleOnToggle() {
    setIsOpen(!isOpen)
  }

  function handleAdditionalDetails() {
    if (isOpen) {
      return (
        <>
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
      <button className="toggle-button" onClick={handleOnToggle}>Toggle</button>
      { handleAdditionalDetails() }
    </section>
  )
}

Sidebar.propTypes = {
  isOpen: PropTypes.bool,
  shoppingCart: PropTypes.shape({
    itemId: PropTypes.any,
    quantity: PropTypes.number
  }),
  products: PropTypes.any,
  checkoutForm: PropTypes.any,
  handleOnCheckoutFormChange: PropTypes.func,
  handleOnSubmitCheckoutForm: PropTypes.func,
}
