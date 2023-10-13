import React from 'react';
import ProductsContainer from '../../Components/ProductsContainer/ProductsContainer';
import Box from '../Box/Box';
import Line from '../Line/Line';

const TopBrandSkeleton = () => {
    return (
        <ProductsContainer>
            <div className="d-flex justify-content-between mb-3">
                <div style={{ width: '180px' }}>
                    <Line />
                </div>
            </div>
            <div className="row g-4">
                <div className="col-md-2">
                    <Box height="120px" />
                </div>
                <div className="col-md-2">
                    <Box height="120px" />
                </div>
                <div className="col-md-2">
                    <Box height="120px" />
                </div>
                <div className="col-md-2">
                    <Box height="120px" />
                </div>
                <div className="col-md-2">
                    <Box height="120px" />
                </div>
                <div className="col-md-2">
                    <Box height="120px" />
                </div>
            </div>
        </ProductsContainer>
    );
};

export default TopBrandSkeleton;
