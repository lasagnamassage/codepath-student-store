import * as React from "react"
import PropTypes from 'prop-types';


export default function ShoppingCart(props) {

    function generateSubtotal() {
        let total = 0;
    }

    function generateItemElems() {
        const elems = props.shoppingCart.map( (item) => {
            <div className="cart-product">
                <div className="cart-product-name">{item.id}</div> 
                <div className="cart-product-quantity">{item.quantity}</div>
            </div>
        })
        return elems;
    }

    return (
        <div className="shopping-cart">
            Shopping Cart
            {/* {generateItemElems()} */}
        </div>
    )
}