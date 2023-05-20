import * as React from "react"
import PropTypes from 'prop-types';
import ProductCard from "./ProductCard";


export default function ProductGrid(props) {

  const productElements = props.products ?  props.products.map(productObj => { 
    return <ProductCard showDescription={false} product={productObj} /> 
  }) : []

  console.log(productElements);

  return (
    <div className="product-grid" style={{ 
      width: "100%", 
      display: "flex",
      flexWrap: "wrap",
      height: "auto"}}>
      { productElements }
    </div>
  )
}

ProductGrid.propTypes = {
  products: PropTypes.array,
  handleAddItemToCart: PropTypes.func,
  handleRemoveItemToCart: PropTypes.func
}