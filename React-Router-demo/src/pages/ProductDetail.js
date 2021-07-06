import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = (props) => {
    const params = useParams();
    return (
        <section>
            <h1>Products Detail</h1>
            <p>{params.productId}</p>
        </section>
    );
}

export default ProductDetail;