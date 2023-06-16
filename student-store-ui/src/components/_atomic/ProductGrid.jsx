import * as React from "react"
import PropTypes from 'prop-types';
import ProductCard from "./ProductCard";


export default function ProductGrid({ products }) {

  const productElements = products ?  products.map(productObj => { 
    return <ProductCard product={productObj} key={productObj.id} /> 
  }) : []

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
  productId: PropTypes.any,
  handleAddItemToCart: PropTypes.func,
  handleRemoveItemToCart: PropTypes.func
}