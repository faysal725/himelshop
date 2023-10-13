import React from 'react';
import { AiFillLike } from 'react-icons/ai';
import image from '../../../../assets/images/avatar.png';
import flag from '../../../../assets/images/Flag-Bangladesh.jpg';
import Rating from '../../../../Components/Common/Rating/Rating';
import './Reviews.scss';

const Reviews = () => (
    <div className="reviews">
        <div className="reviewItem">
            <div className="row">
                <div className="col-3">
                    <div className="reviewUser">
                        <img src={image} alt="" />
                        <div className="reviewUserName">
                            <div className="name">
                                Jhon Deo
                                <span>VIP</span>
                            </div>
                            <span>
                                <img src={flag} width="25px" alt="" />
                                <span className="ms-2">BD</span>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <div className="review">
                        <div className="reviewStar">
                            <Rating height="13px" width="70px" rating={90} fontSize="14" />
                            <span className="ms-2">02/10/21</span>
                        </div>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum quis,
                            ipsam repellat suscipit maiores nemo unde. Voluptate alias praesentium
                            itaque iure molestias repudiandae minima recusandae natus accusantium,
                            ipsa ut atque.
                        </p>
                    </div>
                    <div className="comments">
                        <AiFillLike /> <span>0</span> Comments
                    </div>
                </div>
                <div className="col-3">
                    <div className="pushRightBottom">
                        <button type="button" className="showOriginalBtn">
                            Show Original
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div className="reviewItem">
            <div className="row">
                <div className="col-3">
                    <div className="reviewUser">
                        <img src={image} alt="" />
                        <div className="reviewUserName">
                            <div className="name">
                                Jhon Deo
                                <span>VIP</span>
                            </div>
                            <span>
                                <img src={flag} width="25px" alt="" />
                                <span className="ms-2">BD</span>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <div className="review">
                        <div className="reviewStar">
                            <Rating height="13px" width="70px" rating={90} fontSize="14" />
                            <span className="ms-2">02/10/21</span>
                        </div>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum quis,
                            ipsam repellat suscipit maiores nemo unde. Voluptate alias praesentium
                            itaque iure molestias repudiandae minima recusandae natus accusantium,
                            ipsa ut atque.
                        </p>
                    </div>
                    <div className="comments">
                        <AiFillLike /> <span>0</span> Comments
                    </div>
                </div>
                <div className="col-3">
                    <div className="pushRightBottom">
                        <button type="button" className="showOriginalBtn">
                            Show Original
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Reviews;
