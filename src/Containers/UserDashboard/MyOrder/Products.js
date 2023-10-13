import React from 'react';
import image from '../../../assets/images/flash/1.jpg';

const Products = ({ isCancel, items }) => {
    return (
        <div className="product-list">
            {Array(items)
                .fill('item')
                .map((product, index) => (
                    <div className="product-item " key={index}>
                        <img src={image} width="60px" alt="" />
                        <div className="product-name font-bolder">
                            Water spray motor car and bike washer
                        </div>
                        <div className="product-name font-bolder">Qty:1</div>
                        <div className="btn process-btn rounded-pill ">
                            {isCancel ? 'Cancelled' : 'Processing'}{' '}
                        </div>
                        <div className="qty a-color w-25 ">
                            Estimate Delivery by Sat 22 Aug - Wed 02 Sep
                        </div>
                    </div>
                ))}
        </div>
    );
};

export default Products;
