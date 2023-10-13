import React from 'react';
import Description from './Description/Description';
import Overview from './Overview/Overview';
import './ProductDetails.scss';
import Recommendation from './Recommendation/Recommendation';
import TopNavs from './TopNavs/TopNavs';

const ProductDetailsMobile = () => {
    return (
        <div className="productDetails d-md-none">
            <TopNavs />
            <div
                data-bs-spy="scroll"
                data-bs-target="#productDetails"
                data-bs-offset="0"
                className="scrollspy-example"
                tabIndex="0"
            >
                <Overview />
                <Description />
                <Recommendation />
            </div>
        </div>
    );
};

export default ProductDetailsMobile;
