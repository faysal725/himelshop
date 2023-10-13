import { useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import { BsQuestionSquare } from 'react-icons/bs';
import { HiChevronDown } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import './HelpCenter.scss';

const HelpCenter = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="">
            <div className="container">
                <div className="row">
                    <div className="col-md-3" />
                    <div className=" col-md-8">
                        <div className="input-group">
                            <input
                                type="text"
                                name="search"
                                id=""
                                className="form-control"
                                placeholder="Enter your questions here"
                            />
                            <button type="button" className="input-group-btn">
                                <BiSearch />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="row question-categories">
                    <div className="col-md-3">
                        <div className="sidebar">
                            <h6 className="title">Question Category</h6>
                            <ul className="accordion">
                                <li className="list-item active">
                                    <Link to="/" className="question-index">
                                        <BsQuestionSquare className="icon" />
                                        <span>Frequently Asked Questions</span>
                                    </Link>
                                </li>
                                <li className="list-item">
                                    <div
                                        className="link title"
                                        title="Account and VIP"
                                        role="button"
                                        tabIndex="0"
                                        onClick={() => setIsOpen(!isOpen)}
                                    >
                                        <BsQuestionSquare className="icon" />
                                        <span>Frequently Asked Questions</span>
                                        <HiChevronDown className="arrow-icon" />
                                    </div>
                                    <ul
                                        className="submenu"
                                        style={{
                                            minHeight: `${isOpen ? '100px' : '0'}`,
                                            visibility: `${isOpen ? 'visible' : 'hidden'}`,
                                        }}
                                    >
                                        <li>
                                            <a href="#">Registration & Sign In</a>
                                        </li>
                                        <li>
                                            <a href="#">Registration & Sign In</a>
                                        </li>
                                        <li>
                                            <a href="#">Registration & Sign In</a>
                                        </li>
                                        <li>
                                            <a href="#">Registration & Sign In</a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-9">
                        <div className="main-content">
                            <div className="breadcrumb">Question category</div>
                            <div className="searchResult">
                                <ul>
                                    <li>
                                        <a href="#">Taxas Alfandegárias no Brasil</a>
                                    </li>
                                    <li>
                                        <a href="#">Taxas Alfandegárias no Brasil</a>
                                    </li>
                                    <li>
                                        <a href="#">Taxas Alfandegárias no Brasil</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HelpCenter;
