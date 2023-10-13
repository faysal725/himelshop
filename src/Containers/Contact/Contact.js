import React from 'react';
import { FaChevronRight } from 'react-icons/fa';
import { IoMdContacts } from 'react-icons/io';
import { Link } from 'react-router-dom';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import HeaderBottom from '../../Components/Header/HeaderBottom';
import ProductDetailsHeader from '../../Components/Header/MobProductDHeader/ProductDetailsHeader';
import { useSizeContext } from '../../contexts/SizeContextProvider';
import './Contact.scss';

const Contact = () => {
    const { isMobile, isDesktop } = useSizeContext();
    return (
        <>
            {isDesktop && <Header />}
            {isMobile && <ProductDetailsHeader />}

            <div className="container">
                <div className="bg-white px-4 pt-4 pb-5 mt-3">
                    <h5>Hi, how can we help you?</h5>

                    <div className="row g-3">
                        <div className="col-md-4">
                            <Link className="contactItem">
                                <div className="contactTitle">
                                    <img
                                        src="https://laz-img-cdn.alicdn.com/images/ims-web/TB1wuVdh3ZC2uNjSZFnXXaxZpXa.png"
                                        alt=""
                                    />
                                    <span>I want to know where my order is</span>
                                </div>
                                <div className="contactContent">
                                    Get status updates about your order with our Tracking Tool
                                </div>
                            </Link>
                        </div>
                        <div className="col-md-4">
                            <Link className="contactItem">
                                <div className="contactTitle">
                                    <img
                                        src="https://laz-img-cdn.alicdn.com/images/ims-web/TB1wuVdh3ZC2uNjSZFnXXaxZpXa.png"
                                        alt=""
                                    />
                                    <span>I want to know where my order is</span>
                                </div>
                                <div className="contactContent">
                                    Get status updates about your order with our Tracking Tool
                                </div>
                            </Link>
                        </div>
                        <div className="col-md-4">
                            <Link className="contactItem">
                                <div className="contactTitle">
                                    <img
                                        src="https://laz-img-cdn.alicdn.com/images/ims-web/TB1wuVdh3ZC2uNjSZFnXXaxZpXa.png"
                                        alt=""
                                    />
                                    <span>I want to know where my order is</span>
                                </div>
                                <div className="contactContent">
                                    Get status updates about your order with our Tracking Tool
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className="have-question mt-3">
                        <div>I have a Question?</div>
                        <Link to="/">
                            Help Center <FaChevronRight />
                        </Link>
                    </div>
                </div>
                <div className="bg-white px-4 pt-4 pb-5 mt-4">
                    <h6 className="mb-4"> Contact Us</h6>
                    <div className="row">
                        <div className="col-md-4">
                            <img
                                className="img-fluid"
                                src="https://laz-img-cdn.alicdn.com/images/ims-web/TB14DfzgUT1gK0jSZFhXXaAtVXa.png"
                                alt=""
                            />
                        </div>
                        <div className="col-md-8">
                            <div className="contact-us-content">
                                <p>Can't find the answer you are looking for?</p>
                                <h6>
                                    HIMEL assistant, your friendly automated chat assistant is here
                                    to assist you 24 hours a day.
                                </h6>
                                <h6> Live Chat is available everyday from 9:00 AM – 9:00 PM </h6>
                                <button type="button" className="contact-us-btn custom-button">
                                    <IoMdContacts style={{ fontSize: '20px' }} /> Live Contact
                                </button>
                                <p className="pt-2">
                                    Still need help?
                                    <Link to="/"> Click Here</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {isDesktop && <Footer />}
            {isMobile && <HeaderBottom />}
        </>
    );
};

export default Contact;
