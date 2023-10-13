import React, { useEffect } from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';
import { GoChevronRight } from 'react-icons/go';
import { RiDeleteBinLine, RiHeart2Line } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import StickyBox from 'react-sticky-box';
import ShoppingHeader from '../../../Components/ShopingHeader/ShoppingHeader';
import FlashDeals from '../FlashDeals';
import OrderSummery from '../OrderSummery/OrderSummery';
import './ShoppingCart.scss';

const ShoppingCart = () => {
    useEffect(() => {
        document.querySelector('.cart-right').parentElement.style.width = '100%';
    }, []);
    return (
        <>
            <ShoppingHeader step={1} />

            <div className="cardComponent">
                <div className="container">
                    <div
                        className=" mt-3 gap-3 "
                        style={{ display: 'flex', alignItems: 'flex-start' }}
                    >
                        <div className="col-md-8">
                            <div className="bg-white p-3 rounded ">
                                <h4 className="title">Shopping Cart (4)</h4>
                            </div>
                            <div className="bg-white p-3 rounded mt-3">
                                <span className="type-sign"> Free Gift</span>
                                You have a free gift,
                                <a href="/" target="_blank">
                                    <span className="px-2">Please choose it</span>
                                    <GoChevronRight />
                                </a>
                            </div>
                            <div className="listBlock ">
                                <div className="list-item pt-3">
                                    <FlashDeals />
                                    <div className="list-ul">
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
                                                    title=" AKKO 3084 Silent Mechanical Keyboard 84 Keys
                                                    Wireless bluetooth 5.0 / USB Type-C Wired Dual
                                                    Mode Morandi Grey Gateron Switch PBT Keycap
                                                    Gaming Keyboard"
                                                >
                                                    <span className="type-sign me-2">SALE</span>
                                                    AKKO 3084 Silent Mechanical Keyboard 84 Keys
                                                    Wireless bluetooth 5.0 / USB Type-C Wired Dual
                                                    Mode Morandi Grey Gateron Switch PBT Keycap
                                                    Gaming Keyboard
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
                                <div className="list-item pt-3">
                                    <div className="list-ul">
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
                                                    AKKO 3084 Silent Mechanical Keyboard 84 Keys
                                                    Wireless bluetooth 5.0 / USB Type-C Wired Dual
                                                    Mode Morandi Grey Gateron Switch PBT Keycap
                                                    Gaming Keyboard
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
                        </div>
                        <StickyBox offsetTop={0} offsetBottom={10}>
                            <OrderSummery isButton />
                        </StickyBox>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ShoppingCart;
