import React from 'react';
import Address from './Address';
import './Order.scss';
import Products from './Products';
import Steps from './Steps';
import Total from './Total';

const Order = () => {
    return (
        <div className="order-wrapper">
            <h4> Order Details</h4>

            <div className="order-top-info">
                <div className="left">
                    <span className="d-block">
                        <span className="font-bolder">Order</span>{' '}
                        <span className="a-color">#4723482423</span>{' '}
                    </span>
                    <span className="d-block">Place on 23 Aug 2020, 13:33:09</span>
                </div>
                <div className="right">
                    <span className="a-color"> Manage</span>
                </div>
            </div>

            <div className="order-details">
                <div className="order-top-info p-0 ">
                    <div className="left">
                        <span className="font-bolder d-block">Package 1</span>
                        <span className="d-block">
                            <span className="font-bolder">Solid</span>{' '}
                            <span className="a-color">Himel Shop</span>
                        </span>
                        <span className="d-block a-color font-bolder ">
                            Estimate Delivery by Sat 22 Aug - Wed 02 Sep
                        </span>
                    </div>
                    <div className="right">
                        <span className="a-color font-bolder d-block "> Chat Now</span>
                        <span className=" font-bolder d-block "> ARJ Courier</span>
                    </div>
                </div>

                <Steps />
                <Products />
            </div>
            <div className="row mt-3">
                <Address />
                <Total />
            </div>
        </div>
    );
};

export default Order;
