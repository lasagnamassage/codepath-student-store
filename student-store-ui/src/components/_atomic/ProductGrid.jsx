import * as React from "react"
import PropTypes from 'prop-types';
import ProductCard from "./ProductCard";


export default function ProductGrid(props) {

  const productElements = props.products.map(productObj => { 
    <ProductCard showDescription='false' product={productObj} /> 
  })

  return (
    <div className="product-grid">
      { productElements }
    </div>
  )
}

ProductGrid.propTypes = {
  products: PropTypes.array,
  handleAddItemToCart: PropTypes.func,
  handleRemoveItemToCart: PropTypes.func
}