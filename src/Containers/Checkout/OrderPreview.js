import React from 'react';
import { Link } from 'react-router-dom';

const OrderPreview = () => {
    return (
        <div className="bg-white p-3 rounded mt-3">
            <h5 className="checkout-title add-border">Order Previews</h5>
            <div className="orderPreview ">
                <div className="list-item">
                    <div className="order-ul">
                        <div className="main">
                            <div className="img">
                                <Link to="/">
                                    <img
                                        className="lazy"
                                        src="https://imgaz1.staticbg.com/thumb/grid/oaupload/banggood/images/90/9D/2910eaad-7daa-4ce2-8009-da00e8ea9501.jpg.webp"
                                        alt=""
                                    />
                                </Link>
                            </div>
                            <div className="info">
                                <Link
                                    to="/"
                                    className="title"
                                    title="AKKO 3084 Silent Mechanical Keyboard 84 Keys Wireless bluetooth
                                    5.0 / USB Type-C Wired Dual Mode Morandi Grey Gateron Switch PBT
                                    Keycap Gaming Keyboard"
                                >
                                    AKKO 3084 Silent Mechanical Keyboard 84 Keys Wireless bluetooth
                                    5.0 / USB Type-C Wired Dual Mode Morandi Grey Gateron Switch PBT
                                    Keycap Gaming Keyboard
                                </Link>
                                <div className="poa">
                                    <span className="poa-title">Color: Black</span>
                                </div>

                                <div className="bot">
                                    <span className="price">৳997.99</span>
                                </div>
                            </div>
                            <div className="option">
                                <div className="quantity">1x</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <ul className="total-list">
                <li className="total-list-item">
                    <div className="list-left-wrap">Subtotal</div>
                    <div className="list-right">৳59.99</div>
                </li>
                <li className="total-list-item">
                    <div className="list-left-wrap">Shipping </div>
                    <div className="list-right">৳59.99</div>
                </li>
                <li className="total-list-item">
                    <div className="list-left-wrap " style={{ color: '#333', fontWeight: '600' }}>
                        Total
                    </div>
                    <div className="list-right">৳59.99</div>
                </li>
            </ul>
        </div>
    );
};

export default OrderPreview;
