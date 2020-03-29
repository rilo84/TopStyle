import React from 'react';
import {useParams} from 'react-router-dom';

const ProductDetails = () => {
    let { id } = useParams();
    
    return (
        <div>
        <h1>{id}</h1>
            <p>Details</p>
        </div>
    );
}

export default ProductDetails;