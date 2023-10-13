import React from 'react';
import { AiFillPrinter } from 'react-icons/ai';
import { BiChevronsRight } from 'react-icons/bi';
import { BsFillClockFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const OrderConfirm = () => {
    return (
        <div className="bg-white py-5">
            <div className="container">
                <div className="order-title">
                    <BsFillClockFill />
                    Thank you for your purchase!
                </div>
                <div className="order-subTitle">Your order number is 617826045402285</div>
                <div className="row pt-3">
                    <div className="col-lg-7">
                        <p>
                            An email will be sent containing information about your purchase. If you
                            have any questions about your purchase, email us at{' '}
                            <a href="mailto:abs@example.com">abs@example.com</a>
                        </p>
                        <div className="cash-on-delivery">
                            Type your cash on delivery instructions in
                            <Link to="/cash-on-delivery"> here</Link> .
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="order-summery-wrapper">
                            <div className="order-summeryTitle">
                                <span>Order Summary</span>
                                <Link className="print">
                                    <AiFillPrinter />
                                    Print
                                </Link>
                            </div>

                            <div className="list-item">
                                <h6>Item(1)</h6>
                                <div className="order-summery-ul">
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
                                                AKKO 3084 Silent Mechanical Keyboard 84 Keys
                                                Wireless bluetooth 5.0 / USB Type-C Wired Dual Mode
                                                Morandi Grey Gateron Switch PBT Keycap Gaming
                                                Keyboard
                                            </Link>
                                        </div>
                                        <div className="option">
                                            <strong>৳2,000</strong>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <ul className="order-summery">
                                <li className="subTotal">
                                    <span className="text">Subtotal</span>
                                    <span className="money">৳997.99</span>
                                </li>
                                <li>
                                    <span className="text">Shipping Cost</span>
                                    <span className="money">Free</span>
                                </li>
                                <li>
                                    <span className="text">Tax</span>
                                    <span className="money">0.0</span>
                                </li>
                                <li className="total">
                                    <span className="text">Total(10)</span>
                                    <span className="money">৳997.99</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="text-center mt-4 pt-3">
                    <button type="button" className="btn btn-outline-secondary text-uppercase ">
                        Continue Shopping <BiChevronsRight />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default OrderConfirm;
