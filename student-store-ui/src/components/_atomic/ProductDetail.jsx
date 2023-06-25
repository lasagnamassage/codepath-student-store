import * as React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NotFound from "../NotFound/NotFound";
import { Link } from "react-router-dom";

/**
 * Renders the product details page from query parameters.
 */
export default function ProductDetail() {
  const [product, setProduct] = useState();
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:3001/products/${id}`)
      .then((response) => {
        setProduct(response.data[0]);
      })
      .catch((error) => {
        if (error.response && error.response.status == 404) {
          setProduct(-1); // sentinel value
        }
      });
  }, []);

  /**
   * Conditionally renders for the following conditions:
   * 1. If product not loaded yet, show loading message
   * 2. If product not found, show "Not Found" component
   * 3. If product is found and loaded, show product name and description
   */
  function renderDetails() {
    if (!product) {
      return <h1 className="loading">Loading...</h1>;
    }
    if (product === -1) {
      return <NotFound />;
    } else {
      return (
        <div className="product-detail">
          <h1>{product.name}</h1>
          <p>{product.description}</p>
        </div>
      );
    }
  }

  return (
    <>
      <div>{renderDetails()}</div>
      <br />
      <Link to="/">
        <button>Back</button>
      </Link>
    </>
  );
}
