import React from 'react';
import { HiChevronRight } from 'react-icons/hi';
import Rating from '../../../../Components/Common/Rating/Rating';
import './Description.scss';

const Description = () => {
    return (
        <div id="description">
            <div className="description">
                <div className="container">
                    <div className="pt-3">
                        <h6>Description</h6>
                        <p style={{ fontSize: '13px' }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quod,
                            voluptates pariatur labore eius consectetur quibusdam aperiam voluptas.
                            Obcaecati veritatis, saepe in quia, voluptas numquam exercitationem
                            dolores eius corrupti deleniti facilis.
                        </p>
                    </div>
                    <div className="seeAllDescription">
                        See All Description
                        <HiChevronRight className="rightArrow" />
                    </div>
                </div>
            </div>

            <div className="review">
                <div className="container">
                    <div className="reviewTitle">
                        <h6>Reviews(2)</h6>
                        <div className="reviewRating">
                            <Rating height="13px" width="70px" rating={90} fontSize="14" />
                            <HiChevronRight className="rightArrow" />
                        </div>
                    </div>
                    <div className="reviewList">
                        <div className="reviewListItem">
                            Image <span>23</span>
                        </div>
                        <div className="reviewListItem">
                            Positive <span>23</span>
                        </div>
                    </div>
                    <div className="reviewItem">
                        <div className="reviewPerson">
                            <img
                                src="https://m.banggood.com/templates/default/images/details/default_customer_avatar.jpg"
                                alt=""
                            />
                            <span className="name">Mehedi Hasan</span>
                        </div>
                        <div className="word">
                            <Rating height="13px" width="70px" rating={90} fontSize="14" />
                            <span className="span">500w</span>
                        </div>
                        <div className="comment">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, enim.
                        </div>
                    </div>
                </div>
            </div>

            <div className="questionAndAnswer">
                <div className="container">
                    <h6>Question And Answer(0)</h6>
                    <p>If you have any questions about the product, please submit your question</p>

                    <button type="button" className="btn askAQsn">
                        Ask a Question
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Description;
