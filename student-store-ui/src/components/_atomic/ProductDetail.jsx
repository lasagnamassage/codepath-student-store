import * as React from "react";
import axios from 'axios';
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import NotFound from '../NotFound/NotFound'


export default function ProductDetail(props) {

    const [product, setProduct] = useState();
    const { productId } = useParams();

    useEffect(() => {
        axios.get(`/store/${productId}`)
        .then((response) => {
            setProduct(response)
        })
        .catch((error) => {
            if (error.response && error.response.status == 404) {
                setProduct(-1); // sentinel value
            }
        })

    }, []);

    function renderDetails() {
        if (!product) { return <h1 className="loading">Loading...</h1>  } // undefined is "falsey"
        if (product === -1) {
            return <NotFound />
        }
        else {
            return (
                <div className="product-detail"></div>
            )
        }
    }
    
    return ( renderDetails() )
}

ProductCard.propTypes = {
    handleAddItemToCart: PropTypes.func,
    handleRemoveItemToCart: PropTypes.func
}