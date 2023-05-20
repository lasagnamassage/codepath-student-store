import * as React from "react"
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { CurrencyFormatter } from "../../helpers";


export default function ProductCard(props) {
  return (
    <div className="product-card">
        <section className="media">
            <Link to={"/products/" + props.productId}>
                <img src={props.product.image} alt="product image"/>
            </Link>
        </section>
        <div className="product-name">{props.product.name}</div>
        <div className="product-price">{CurrencyFormatter.format(props.product.price)}</div>
        { props.showDescription && <div className="product-description">{props.product.description}</div> }
        { props.quantity &&  <div className="product-quantity">{props.quantity} in cart</div> }
        <button className="add" onClick={props.handleAddItemToCart(props.productId)}>Add</button>
        <button className="remove" onClick={props.handleRemoveItemToCart(props.productId)}>Remove</button>
    </div>
  )
}

ProductCard.propTypes = {
    product: PropTypes.object,
    productId: PropTypes.number,
    quantity: PropTypes.number,
    handleAddItemToCart: PropTypes.func,
    handleRemoveItemToCart: PropTypes.func,
    showDescription: PropTypes.bool
}