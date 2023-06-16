import * as React from "react"
import Hero from "../_atomic/Hero";
import { useEffect, useState } from "react";

export default function Search({ formData, setFormData, products, setProducts, originalProducts }) {

  function getValue(event) {
    console.log(event.target.value);
    setFormData(event.target.value)
  }

  function search(event) {
    event.preventDefault();
    console.log("original products")
    setProducts(originalProducts.filter(product => product.name.toLowerCase().includes(formData)))
    console.log("products");
  }
  
  return (
      <form style={{ margin: '0 auto', padding: "20px" }}>
        <label htmlFor="search">Search</label>
        <input type="text" name="search" onChange={(event) => getValue(event)} />
        <button onClick={(event) => search(event)}>Submit</button>
      </form>
  )
}
