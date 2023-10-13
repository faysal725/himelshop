import React from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';
import { RiDeleteBinLine, RiHeart2Line } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import FlashDeals from '../FlashDeals';
import OrderSummery from '../OrderSummery/OrderSummery';
import './CartMobile.scss';

const CartMobile = () => {
    return (
        <div className="bg-white container">
            <div className="cartList">
                <div className="list-item">
                    <FlashDeals />
                    <div className="cart-ul">
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
                                <Link to="/" className="title">
                                    <span className="type-sign me-2">SALE</span>
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
                                <div className="quantity">
                                    <FaMinus className="gray" />
                                    <div className="value mx-2">1</div>
                                    <FaPlus />
                                </div>
                                <div className="action">
                                    <span>
                                        <RiHeart2Line />
                                        <em>Add to wishlist</em>
                                    </span>
                                    <span className="ms-3">
                                        <em>Delete</em>
                                        <RiDeleteBinLine />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="list-item">
                    <FlashDeals />
                    <div className="cart-ul">
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
                                <Link to="/" className="title">
                                    <span className="type-sign me-2">SALE</span>
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
                                <div className="quantity">
                                    <FaMinus className="gray" />
                                    <div className="value mx-2">1</div>
                                    <FaPlus />
                                </div>
                                <div className="action">
                                    <span>
                                        <RiHeart2Line />
                                        <em>Add to wishlist</em>
                                    </span>
                                    <span className="ms-3">
                                        <em>Delete</em>
                                        <RiDeleteBinLine />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="list-item">
                    <div className="cart-ul">
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
                                <Link to="/" className="title">
                                    <span className="type-sign me-2">SALE</span>
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
                                <div className="quantity">
                                    <FaMinus className="gray" />
                                    <div className="value mx-2">1</div>
                                    <FaPlus />
                                </div>
                                <div className="action">
                                    <span>
                                        <RiHeart2Line />
                                        <em>Add to wishlist</em>
                                    </span>
                                    <span className="ms-3">
                                        <em>Delete</em>
                                        <RiDeleteBinLine />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="list-item">
                    <div className="cart-ul">
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
                                <Link to="/" className="title">
                                    <span className="type-sign me-2">SALE</span>
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
                                <div className="quantity">
                                    <FaMinus className="gray" />
                                    <div className="value mx-2">1</div>
                                    <FaPlus />
                                </div>
                                <div className="action">
                                    <span>
                                        <RiHeart2Line />
                                        <em>Add to wishlist</em>
                                    </span>
                                    <span className="ms-3">
                                        <em>Delete</em>
                                        <RiDeleteBinLine />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <OrderSummery />
                </div>
            </div>
        </div>
    );
};

export default CartMobile;
