import React from 'react';
import { BsCaretDownFill } from 'react-icons/bs';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import Rating from '../../../../Components/Common/Rating/Rating';
import Title from '../../../../Components/Title/Title';
import Reviews from '../Reviews/Reviews';
import './CustomerReviews.scss';

const CustomerReviews = () => (
    <div className="container bg-white" id="desktopReview">
        <Title title="Customer Reviews" />
        <div className="customerReviewsContainer">
            <div className="row g-3">
                <div className="col-md-3">
                    <div className="customerReviews">
                        <span className="rate">
                            <strong>4.81</strong> out of 5
                        </span>
                        <br />
                        <Rating height="29px" width="150px" rating={90} fontSize="30" />
                        <br />
                        <Link className="seeAll" to="/">
                            See All Reviews
                        </Link>
                    </div>
                </div>
                <div className="col-md-5">
                    <div className="ratingListWrapper">
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
                </div>
                <div className=" col-md-4">
                    <div className="writeAReview">
                        <button type="button" className="writeReviewBtn">
                            Write A Review
                        </button>
                        <p>
                            Get double review points if you are one of the first 3 reviews
                            published!
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div className="tabsWrapper">
            <Tabs>
                <TabList>
                    <Tab>All Reviews (30)</Tab>
                    <Tab>Image (3)</Tab>
                    <Tab> Video (0)</Tab>
                    <span className="react-tabs__tab preventNone">
                        <div className="allStar">
                            <span>
                                All Star
                                <BsCaretDownFill
                                    style={{ marginLeft: '5px', color: 'gray' }}
                                />{' '}
                            </span>
                            <ul>
                                <li>
                                    All <i className="starItem">1</i>
                                </li>
                                <li>
                                    5 Star
                                    <i className="starItem">30</i>
                                    <span className="startList">
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                    </span>
                                </li>
                                <li>
                                    4 Star
                                    <i className="starItem">4</i>
                                    <span className="startList">
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                    </span>
                                </li>
                                <li>
                                    3 Star
                                    <i className="starItem">0</i>
                                    <span className="startList">
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                    </span>
                                </li>
                                <li>
                                    2 Star
                                    <i className="starItem">1</i>
                                    <span className="startList">
                                        <FaStar />
                                        <FaStar />
                                    </span>
                                </li>
                                <li>
                                    1 Star
                                    <i className="starItem">02</i>
                                    <span className="startList">
                                        <FaStar />
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </span>

                    <span className="react-tabs__tab pushRight">
                        <div className="allStar">
                            <span>
                                Sort by: <strong className="ms-1">Top Review </strong>
                                <BsCaretDownFill
                                    style={{ marginLeft: '5px', color: 'gray' }}
                                />{' '}
                            </span>
                            <ul style={{ right: 0 }}>
                                <li>Top Review</li>
                                <li>Most Helpful</li>
                                <li>Most Recent</li>
                            </ul>
                        </div>
                    </span>
                </TabList>
                <TabPanel>
                    <Reviews />
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
            </Tabs>
        </div>
    </div>
);

export default CustomerReviews;
