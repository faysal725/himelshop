import React from 'react';
import { BsFillCaretDownFill, BsFillCaretUpFill, BsSearch } from 'react-icons/bs';
import Title from '../../../../Components/Title/Title';
import './CustomerQA.scss';

const CustomerQA = () => (
    <div id="desktopQna" className="customerQA container bg-white mb-5">
        <Title title="Customer Reviews" />
        <div className="customerQAContainer">
            <div className="inputBox">
                <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Search for your Question"
                    className="customerQAInput"
                />
                <button type="button">
                    <BsSearch />
                </button>
            </div>
            <div className="findYourQuestion">
                <h4 className="me-3">Can't find your Answer?</h4>
                <button type="button" className="writeReviewBtn">
                    Write A Review
                </button>
                <strong className="mx-3">Or</strong>
                <button className="customerBtn" type="button">
                    Customer Service
                </button>
            </div>
            <div className="mt-3">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam doloremque
                    iusto esse, totam repellendus unde animi amet rerum, quae accusantium ex culpa
                    repudiandae ipsum temporibus quas tempore quo quaerat deleniti!
                </p>
            </div>
            <div className="showing">
                <span>Showing | 4 of 4 </span>
                <button className="mx-4 customerBtn" style={{ width: '150px' }} type="button">
                    Show Original
                </button>
                <span>A page of the QA has been</span>
            </div>
            <div className="row mt-4">
                <div className="col-2">
                    <div style={{ width: '50px' }}>
                        <button type="button" className="upDownBtn">
                            <BsFillCaretUpFill />
                        </button>
                        <strong style={{ marginLeft: '5px' }}>0</strong>
                        <button type="button" className="upDownBtn">
                            <BsFillCaretDownFill />
                        </button>
                    </div>
                </div>
                <div className="col-10">
                    <div className="questionItem">
                        <div className="question">
                            <strong>Q:</strong>
                            <span>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
                                ipsa nobis accusantium ut ducimus veritatis est blanditiis eos. ipsa
                                nobis accusantium ut ducimus veritatis est blanditiis eos.
                            </span>
                        </div>
                        <div className="answer">
                            <strong>A:</strong>
                            <span>Answer This Question</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-2">
                    <div style={{ width: '50px' }}>
                        <button type="button" className="upDownBtn">
                            <BsFillCaretUpFill />
                        </button>
                        <strong style={{ marginLeft: '5px' }}>0</strong>
                        <button type="button" className="upDownBtn">
                            <BsFillCaretDownFill />
                        </button>
                    </div>
                </div>
                <div className="col-10">
                    <div className="questionItem">
                        <div className="question">
                            <strong>Q:</strong>
                            <span>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
                                ipsa nobis accusantium ut ducimus veritatis est blanditiis eos. ipsa
                                nobis accusantium ut ducimus veritatis est blanditiis eos.
                            </span>
                        </div>
                        <div className="answer">
                            <strong>A:</strong>
                            <span>Answer This Question</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default CustomerQA;
