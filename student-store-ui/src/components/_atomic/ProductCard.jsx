import * as React from "react";
import { Link } from "react-router-dom";
import { CurrencyFormatter } from "../../helpers";

/**
 * Handles functionality of a generic indivifual product card
 * @param product The specific product metadata associated with this product
 * @param setShoppingCart Used to set shopping cart state on increment/decrement of product
 * @param shoppingCart The current state of the shopping cart
 */
export default function ProductCard({
  product,
  setShoppingCart,
  shoppingCart,
}) {
  /**
   * Increments shopping cart state.
   */
  function addToShoppingCart() {
    let newItem = { id: product.id, quantity: 1 };
    let index = shoppingCart.findIndex(
      (shoppingCartProduct) => shoppingCartProduct.id === newItem.id
    );
    // if existing shopping cart item
    if (index !== -1) { 
      // increment from existing item quantity count and set new shopping cart state
      let newShoppingCart = [...shoppingCart];
      newShoppingCart[index] = {
        id: product.id,
        quantity: ++newShoppingCart[index].quantity,
      };
      setShoppingCart(newShoppingCart);
    }
    else { 
      // add new item to shopping cart
      setShoppingCart([...shoppingCart, newItem]);
    }
  }

  /**
   * Decrements shopping cart state.
   */
  function removeFromShoppingCart() {
    // find selected item
    let foundItemIndex = shoppingCart.findIndex(
      (shoppingCartProduct) => shoppingCartProduct.id === product.id
    );
    // if selected item in shopping cart
    if (foundItemIndex !== -1) {
      // create object with selected item's decremented quantity value
      let target = shoppingCart[foundItemIndex];
      target = { id: target.id, quantity: --target.quantity };
      // if quantity decremented below one:
      if (target.quantity < 1) {
        // remove that entry from the shopping cart
        setShoppingCart(shoppingCart.toSpliced(foundItemIndex, 1));
        return;
      } // create new shopping cart state with decremented target object
      else {
        let newShoppingCart = [...shoppingCart];
        newShoppingCart[foundItemIndex] = target;
        setShoppingCart(newShoppingCart);
      }
    }
  }

  /**
   * Gets quantity in shopping cart for this specific product 
   */
  function getQuantity() {
    let foundItemIndex = shoppingCart.findIndex(
      (shoppingCartProduct) => shoppingCartProduct.id === product.id
    );
    if (foundItemIndex !== -1) {
      return shoppingCart[foundItemIndex].quantity;
    } else {
      // not in shopping cart
      return 0;
    }
  }

  return (
    <div
      style={{
        width: "20%",
        height: "auto",
        border: "3px solid black",
        marginLeft: "10%",
        borderRadius: "5px",
        marginBottom: "5%"
      }}
    >
      {getQuantity() > 0 && (
        <span className="cart-notification">x{getQuantity()}</span>
      )}
      <section className="media">
        <Link to={"http://localhost:3000/products/" + product.id}>
          <img
            src={product.image}
            alt="product image"
            style={{ width: "100%", height: "200px" }}
          />
        </Link>
      </section>
      <div>{product.name}</div>
      <div>
        {CurrencyFormatter.format(product.price)}
      </div>
      {false && (
        <div>{product.description}</div>
      )}
      <button className="product-button" onClick={addToShoppingCart}>
        Add
      </button>
      <button className="product-button" onClick={removeFromShoppingCart}>
        Remove
      </button>
    </div>
  );
}
