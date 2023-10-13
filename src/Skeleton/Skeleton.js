import React from 'react';
import ProductsContainer from '../Components/ProductsContainer/ProductsContainer';
import Box from './Box/Box';
import Line from './Line/Line';

const Skeleton = () => (
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
            <div className="col-md-2">
                <Box />
                <div className="mt-3">
                    <Line height="25px" />
                    <Line />
                </div>
            </div>
            <div className="col-md-2">
                <Box />
                <div className="mt-3">
                    <Line height="25px" />
                    <Line />
                </div>
            </div>
            <div className="col-md-2">
                <Box />
                <div className="mt-3">
                    <Line height="25px" />
                    <Line />
                </div>
            </div>
            <div className="col-md-2">
                <Box />
                <div className="mt-3">
                    <Line height="25px" />
                    <Line />
                </div>
            </div>
            <div className="col-md-2">
                <Box />
                <div className="mt-3">
                    <Line height="25px" />
                    <Line />
                </div>
            </div>
            <div className="col-md-2">
                <Box />
                <div className="mt-3">
                    <Line height="25px" />
                    <Line />
                </div>
            </div>
        </div>
    </ProductsContainer>
);

export default Skeleton;
