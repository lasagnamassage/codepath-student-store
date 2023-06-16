import * as React from "react";
import axios from 'axios';
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import NotFound from '../NotFound/NotFound'


export default function ProductDetail() {

    const { id } = useParams();
    const [product, setProduct] = useState({});


    useEffect(() => {
        axios.get(`https://codepath-store-api.herokuapp.com/store/${id}`)
            .then( response => setProduct(response.data.product))
    }, [])

    // function renderDetails() {
    //     if (!product) { return <h1 className="loading">Loading...</h1>  } // undefined is "falsey"
    //     if (product === -1) {
    //         return <NotFound />
    //     }
    //     else {
    //         return (
    //             <>
    //                 <img style={{ width: '200px' }} src={product.image} />
    //                 <p>{product.description}</p>
    //             </>
    //         )
    //     }
    // }
    
    return ( 
    <>
        <img style={{ width: '200px' }} src={product.image} />
        <p>{product.description}</p>
    </> 
    )
}

ProductDetail.propTypes = {
    handleAddItemToCart: PropTypes.func,
    handleRemoveItemToCart: PropTypes.func
}