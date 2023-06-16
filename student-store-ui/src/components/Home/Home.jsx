import * as React from "react"
import Hero from "../_atomic/Hero";
import Search from '../_atomic/Search';
import { useEffect, useState } from "react";
import ProductGrid from "../_atomic/ProductGrid";
import axios from 'axios';
import "./Home.css"

export default function Home({products, setProducts, originalProducts}) {

  const [formData, setFormData] = useState();
  
  return (
    <div className="home" style={{ overflow: "scroll"}}>
      <Hero/>
      <Search 
        formData={formData} 
        setFormData={setFormData} 
        products={products} 
        setProducts={setProducts}
        originalProducts={originalProducts} />
      <ProductGrid products={products}/>
    </div>
  )
}
