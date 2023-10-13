/* eslint-disable react/no-array-index-key */

import React from 'react';
import ProductSkeleton from './ProductSkeleton';

const ProductsSkeleton = () => {
    return (
        <div className="container mt-5">
            <div className="row g-3">
                {Array(12)
                    .fill('item')
                    .map((item, index) => (
                        <div
                            className="col-6 col-sm-6 col-md-4 col-lg-4 col-xl-3 col-xxl-2"
                            key={index}
                        >
                            <ProductSkeleton key={index} />
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default ProductsSkeleton;
