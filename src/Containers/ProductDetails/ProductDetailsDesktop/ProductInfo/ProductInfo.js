/* eslint-disable jsx-a11y/anchor-is-valid */
import { AiOutlineFileProtect, AiOutlineQuestionCircle } from 'react-icons/ai';
import { BiChat, BiChevronRight } from 'react-icons/bi';
import { BsFillCaretDownFill } from 'react-icons/bs';
import {
    FaFacebookF,
    FaFacebookMessenger,
    FaLinkedinIn,
    FaPinterestP,
    FaRegHeart,
    FaRegKeyboard,
    // eslint-disable-next-line prettier/prettier
    FaTwitter
} from 'react-icons/fa';
import { RiSecurePaymentLine } from 'react-icons/ri';
import { TiMinus, TiPlus } from 'react-icons/ti';
import { Link } from 'react-router-dom';
import cloth1 from '../../../../assets/images/cloth1.webp';
import cloth2 from '../../../../assets/images/cloth2.webp';
import cloth3 from '../../../../assets/images/colth3.webp';
import Rating from '../../../../Components/Common/Rating/Rating';
import './ProductInfo.scss';

const ProductInfo = () => (
    <>
        <div className="productInfo">
            <h1 className="productTitle">
                Lenovo LP40 TWS bluetooth 5.0 Earphone Wireless Earbuds HiFi Stereo Bass Dual
                Diaphragm Type-C IP54 Waterproof Sport Headphone with Mic - Black
            </h1>
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

            <div className="productPrice">
                <div className="price">৳500 </div>
                <div className="previousPrice">৳50 </div>
                <div className="off">15%</div>
            </div>

            <ul className="eventCoupon">
                <li>
                    <Link to="/">
                        <span className="name">US$2.00 New User Allowance</span>
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        <span>10% OFF Order Over US$19.00</span>
                    </Link>
                </li>
                <li>
                    <Link className="more" to="/">
                        More
                        <BiChevronRight />
                    </Link>
                </li>
            </ul>

            <div className="productBlock">
                <div className="blockTitle">
                    <span className="text">
                        <em>Size(US)</em> : <span className="textName">S</span>
                    </span>
                </div>
            </div>
            <div className="blockCnt">
                <a href="#" title="S">
                    S
                </a>
                <a href="#" title="M">
                    M
                </a>
                <a href="#" title="L">
                    L
                </a>
                <a href="#" title="L">
                    XL
                </a>
                <a href="#" title="L">
                    XXL
                </a>
                <span className="gride" data-bs-toggle="modal" data-bs-target="#Size">
                    <FaRegKeyboard />
                    Size Guide
                </span>
            </div>

            <div className="productBlock">
                <div className="blockTitle">
                    <span className="text">
                        <em>Color</em> : <span className="textName">White</span>
                    </span>
                </div>
            </div>
            <div className="blockCnt">
                <a href="#" className="imgTag" title="White">
                    <img src={cloth1} alt="" />
                </a>
                <a href="#" className="imgTag" title="Yellow">
                    <img src={cloth3} alt="" />
                </a>
                <a href="#" className="imgTag" title="Black">
                    <img src={cloth2} alt="" />
                </a>
            </div>

            <div className="sizeTips">
                Fits M, Bust: 44.09 Inch, Shoulder: 18.7 Inch, Length: 28.54 Inch, Sleeve Length:
                9.45 Inch
            </div>
            <div className="shippingTime">
                Shipping Time:
                <strong> 3-10 </strong> business <strong> Days </strong>
                <span className="shippingTips">
                    <AiOutlineQuestionCircle />
                    <i>Arrival time = dispatch + shipping time</i>
                </span>
            </div>

            <div className="productQty">
                <div className="productBlock">
                    <div className="productBlockQtn">QTY:</div>
                    <div className="blockQtn">
                        <div className="qtnBox">
                            <TiMinus />
                            <input type="text" name="" value="1" id="" />
                            <TiPlus />
                        </div>
                    </div>
                </div>
            </div>
            <div className="productAction">
                <button type="button" className="buyNowBtn">
                    Buy Now
                </button>
                <button type="button" className="addToCartBtn">
                    Add To Cart
                </button>
                <div className="wishBtn">
                    <FaRegHeart /> 39
                </div>
            </div>
            <div className="productProtection">
                <div className="protectionItem">
                    <AiOutlineFileProtect />
                    <a href="#" collected="1" className="exclick">
                        <strong>30-day refund or replacement</strong>
                        <span>Money back guarantee</span>
                    </a>
                </div>
                <div className="protectionItem secure">
                    <RiSecurePaymentLine />
                    <a href="#" collected="1" className="exclick">
                        <strong>Secure Payment</strong>
                        <span>Multiple payment options</span>
                    </a>
                </div>
            </div>

            <div className="liveBtnWrapper">
                <div className="shareInSocialMedia">
                    <span>Share to</span>
                    <ul className="product-share">
                        <li className="product-share-icon">
                            <span>
                                <FaFacebookF />
                            </span>
                        </li>
                        <li className="product-share-icon">
                            <span>
                                <FaFacebookMessenger />
                            </span>
                        </li>
                        <li className="product-share-icon">
                            <span>
                                <FaTwitter />
                            </span>
                        </li>
                        <li className="product-share-icon">
                            <span>
                                <FaLinkedinIn />
                            </span>
                        </li>
                        <li className="product-share-icon">
                            <span>
                                <FaPinterestP />
                            </span>
                        </li>
                    </ul>
                </div>
                <button type="button" className="liveChatBtn">
                    <BiChat /> Live Chat
                </button>
            </div>
        </div>

        <div
            className="modal fade"
            id="Size"
            tabIndex="-1"
            aria-labelledby="SizeLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                <div className="modal-content">
                    <button
                        type="button"
                        className="btn-close crossBtn"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                    />
                    <div className="modal-body">
                        <h5>2nd</h5>
                    </div>
                </div>
            </div>
        </div>
    </>
);

export default ProductInfo;
