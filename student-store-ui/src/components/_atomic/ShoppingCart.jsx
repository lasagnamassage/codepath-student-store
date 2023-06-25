import { useEffect } from 'react';

export default function ShoppingCart({ shoppingCart, products, setCheckout }) {

  useEffect(() => {
   setCheckout({ 
    cart: shoppingCart.map( shoppingCartProduct => {
      return {
        id: shoppingCartProduct.id,
        name: getProduct(shoppingCartProduct.id).name,
        quantity: shoppingCartProduct.quantity,
        totalPrice: (getProduct(shoppingCartProduct.id).price * shoppingCartProduct.quantity).toFixed(2),
      }
    }),
    tax: (getSubtotal() * .0725).toFixed(2),
    total: ((getSubtotal() * .0725) + + getSubtotal()).toFixed(2)
  })}, [shoppingCart])

  let accumulatorFunction = (total, shoppingCartProduct) => total + getProduct(shoppingCartProduct.id).price * shoppingCartProduct.quantity;
  function getSubtotal() {
    let initialValue = 0;
    return shoppingCart.reduce(accumulatorFunction, initialValue).toFixed(2);
  }

  function getProduct(id) {
    let specificProduct = products.filter((product) => product.id === id);
    return specificProduct.length > 0 ? specificProduct[0] : null;
  }
  
  

  return (
    <div className="shopping-cart">
      <u>
        <h4><b>Shopping Cart</b></h4>
      </u>
      {shoppingCart.map((shoppingCartProduct) => {
        return (
          <div
            className="cart-product"
            style={{ display: "flex" }}
            key={shoppingCartProduct.id}
          >
            <div className="cart-product-name" style={{ width: "60%" }}>
              {getProduct(shoppingCartProduct.id).name}
            </div>
            <div className="cart-product-quantity" style={{ width: "10%" }}>
              {shoppingCartProduct.quantity}
            </div>
            <div className="cart-product-price" style={{ width: "30%" }}>
              ${(
                getProduct(shoppingCartProduct.id).price *
                shoppingCartProduct.quantity
              ).toFixed(2)}
            </div>
          </div>
        );
      })}
      <hr/>
      <h4><u>Totals</u></h4>
      <div className="totals" style={{ display: "flex", fontWeight: "bolder"}}>
        <div className="subtotal-label" style={{ width: "70%"}}>Subtotal</div>
        <div className="subtotal-value" style={{ width: "30%"}}>${getSubtotal()}</div>
      </div>
      <div className="tax" style={{ display: "flex", fontWeight: "bolder"}}>
        <div className="tax-label" style={{ width: "70%"}}>Tax</div>
        <div className="tax-value" style={{ width: "30%"}}>${(getSubtotal() * .0725).toFixed(2)}</div>
      </div>
      <div className="total" style={{ display: "flex", fontWeight: "bolder"}}>
        <div className="total-label" style={{ width: "70%"}}>Total</div>
        <div className="total-value" style={{ width: "30%"}}>${((getSubtotal() * .0725) + + getSubtotal()).toFixed(2)}</div>
      </div>
    </div>
  );
}
