import React, { useEffect } from 'react';
import {
    AiOutlineQuestionCircle,
    BsFillCaretDownFill,
    HiChevronRight,
    // eslint-disable-next-line prettier/prettier
    IoFlash
} from 'react-icons/all';
import Rating from '../../../../Components/Common/Rating/Rating';
import ProductOption from '../../../../Components/Custom/ProductOption/ProductOption';
import Slider from '../Slider/Slider';
import './Overview.scss';

const Overview = () => {
    useEffect(() => {
        document.querySelector('.addToCartBox').addEventListener('click', () => {
            document.querySelector('.productOption').style.display = 'block';
            document.querySelector('.bg .main').classList.add('show');
        });
        document.querySelector('.closeBtn').addEventListener('click', () => {
            document.querySelector('.productOption').style.display = 'none';
        });
    }, []);
    return (
        <>
            <div id="overview">
                <Slider />
                <div className="flashProgress">
                    <div className="left">
                        <IoFlash />
                        <div className="left-content">
                            <div className="left-text">Flash Deal</div>
                            <div className="left-progress">
                                <div className="progress-box">
                                    <div className="progress-value" />
                                </div>
                                <span>797 Pcs Left</span>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <div className="right-text">
                            <span>End In</span>
                            <div className="down-count">
                                <span>00</span>d<span>17</span>:<span>54</span>:<span>23</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container productOverview">
                    <div className="productPrice">
                        <div className="price">৳80 </div>
                        <div className="previousPrice">৳50 </div>
                        <div className="off">15% OFF</div>
                    </div>
                    <div className="productName">
                        POCO F3 Global Version 6.67 inch 120Hz E4 AMOLED Display 8GB 256GB 48MP
                        Triple Camera 4520mAh NFC Snapdragon 870 5G Smartphone
                    </div>
                    <div className="reviewerRating">
                        <span className="ratingWrapper">
                            <Rating height="13px" width="70px" rating={90} fontSize="14" />
                            <BsFillCaretDownFill className="downArrow" />
                            <div className="starList">
                                <p>
                                    <strong>4.81</strong> out of 5{' '}
                                </p>
                                <dl className="ratingList">
                                    <dd>
                                        <span className="startNumber">5 Star</span>
                                        <span className="startProgress">
                                            <em style={{ width: '84.5%' }} />
                                        </span>
                                        <span className="starPercentage">414 (84.5%)</span>
                                    </dd>
                                    <dd>
                                        <span className="startNumber">4 Star</span>
                                        <span className="startProgress">
                                            <em style={{ width: '11.8%' }} />
                                        </span>
                                        <span className="starPercentage">58 (11.8%)</span>
                                    </dd>
                                    <dd>
                                        <span className="startNumber">3 Star</span>
                                        <span className="startProgress">
                                            <em style={{ width: '3.5%' }} />
                                        </span>
                                        <span className="starPercentage">17 (3.5%)</span>
                                    </dd>
                                    <dd>
                                        <span className="startNumber">2 Star</span>
                                        <span className="startProgress">
                                            <em style={{ width: '0.5%' }} />
                                        </span>
                                        <span className="starPercentage">1 (0.5%)</span>
                                    </dd>
                                    <dd>
                                        <span className="startNumber">1 Star</span>
                                        <span className="startProgress">
                                            <em style={{ width: '0.0%' }} />
                                        </span>
                                        <span className="starPercentage">0 (0.0%)</span>
                                    </dd>
                                </dl>
                            </div>
                        </span>
                        <span className="reviewNumbers">2 Reviews</span>
                        <span className="productCode">Product Code- 206</span>
                    </div>
                    <div className="addToCartBox">
                        <div className="selectItem">
                            <span>Color</span>
                            <strong>Brow</strong>
                        </div>
                        <div className="selectItem two">
                            <span>Quantity</span>
                            <strong>1</strong>
                        </div>
                        <HiChevronRight className="rightArrow" />
                    </div>
                    <div className="coupon">
                        <div className="coupon-list">
                            <div className="coupon-value">৳2.00 for new users</div>
                            <div className="coupon-limit">Order over ৳500.00</div>
                        </div>
                        <button type="button" className="getBtn">
                            GET
                        </button>
                    </div>

                    <div className="shippingTime my-2">
                        Shipping Time:
                        <strong> 3-10 </strong> business <strong> Days </strong>
                        <span className="shippingTips">
                            <AiOutlineQuestionCircle />
                            <i>Arrival time = dispatch + shipping time</i>
                        </span>
                    </div>
                    <div className="returnPolity">
                        <strong>Return Policy</strong>
                        <span>30 days refund or replacement</span>
                        <HiChevronRight className="rightArrow" />
                    </div>
                </div>
            </div>
            <ProductOption />
        </>
    );
};

export default Overview;
