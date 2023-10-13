import React from 'react';

const OrderSummery = () => {
    return (
        <div className="bg-white p-3 pb-4 rounded mt-3">
            <div className="checkout-title mt-2">Order Summery</div>
            <ul className="order-summery">
                <li
                    style={{
                        fontSize: '13px',
                    }}
                >
                    <span
                        className="text"
                        style={{
                            fontWeight: 'normal',
                            color: '#999',
                        }}
                    >
                        SubTotal (2 Items and shipping fee included)
                    </span>
                    <span className="money">৳997.99</span>
                </li>
                <li className="mt-3">
                    <span className="text" style={{ fontSize: '14px' }}>
                        Total Payment
                    </span>
                    <span className="money" style={{ fontSize: '15px', color: '#ef9721' }}>
                        ৳997.99
                    </span>
                </li>
            </ul>
        </div>
    );
};

export default OrderSummery;
