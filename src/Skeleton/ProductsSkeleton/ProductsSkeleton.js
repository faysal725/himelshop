/* eslint-disable react/no-array-index-key */
import React from 'react';
import ProductsContainer from '../../Components/ProductsContainer/ProductsContainer';
import Box from '../Box/Box';
import Line from '../Line/Line';

const ProductsSkeleton = () => (
    <ProductsContainer>
        <div className="d-flex justify-content-between mb-3">
            <div style={{ width: '180px' }}>
                <Line />
            </div>
            <div style={{ width: '100px' }}>
                <Line />
            </div>
        </div>
        <div className="row g-3">
            {Array(6)
                .fill('item')
                .map((item, index) => (
                    <div className="col-md-2" key={`${item}${index} `}>
                        <Box />
                        <div className="mt-3">
                            <Line height="25px" />
                            <Line />
                        </div>
                    </div>
                ))}
        </div>
    </ProductsContainer>
);

export default ProductsSkeleton;
