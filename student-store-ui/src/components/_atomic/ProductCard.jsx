import * as React from "react"
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { CurrencyFormatter } from "../../helpers";


export default function ProductCard(props) {

  console.log("PROPS BELOW")
  console.log(props)

  return (
    <div className="product-card" style={{ 
      width: "20%", 
      height: "auto", 
      border: "3px solid black", 
      marginLeft: "10%", 
      borderRadius: "5px",
      marginBottom: "5%"}}>
        <section className="media">
            <Link to={"/products/" + props.product.id}>
                <img src={props.product.image} alt="product image" style={{ width: "100%", height: "200px"}}/>
            </Link>
        </section>
        <div className="product-name">{props.product.name}</div>
        <div className="product-price">{CurrencyFormatter.format(props.product.price)}</div>
        { props.showDescription && <div className="product-description">{props.product.description}</div> }
        { props.quantity &&  <div className="product-quantity">{props.quantity} in cart</div> }
        <button className="add">Add</button>
        <button className="remove">Remove</button>
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