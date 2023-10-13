import React from 'react';
import './ProductDetailsHeaderBottom.scss';

const ProductDetailsHeaderBottom = () => {
    return (
        <div className="header-buttons">
            <button type="button" className="first">
                Add To Cart
            </button>
            <button type="button" className="second">
                Buy Now
            </button>
        </div>
    );
};

export default ProductDetailsHeaderBottom;
