import { AiOutlineComment } from 'react-icons/ai';
import { BsQuestionSquare, HiOutlineShoppingCart } from 'react-icons/all';
import { BiSearch } from 'react-icons/bi';
import { FiHeadphones, FiShoppingBag, FiUser } from 'react-icons/fi';
import { MdPayment } from 'react-icons/md';
import { Link } from 'react-router-dom';
import './HelpCenter.scss';

const MainHelpCenter = () => {
    return (
        <>
            <div className="main-help-center">
                <div className="search-container">
                    <div className="container">
                        <div className="row ">
                            <div className="col-md-7  mx-auto">
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
                    </div>
                </div>
            </div>
            <div className="container mt-3">
                <div className="p-3 bg-white">
                    <h4 className="panel-header">Self-service Tool</h4>
                    <div className="row">
                        <div className="col-md-4 col-lg-3">
                            <div className="panel-item">
                                <div className="panel-icon">
                                    <div className="manage_order" />
                                </div>
                                <div className="panel-des">
                                    <h5>Manage Orders</h5>
                                    <p>View and manage orders</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-3">
                            <div className="panel-item">
                                <div className="panel-icon">
                                    <div className="manage_order" />
                                </div>
                                <div className="panel-des">
                                    <h5>Change Password</h5>
                                    <p>Change the password to improve account sercurity</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-3">
                            <div className="panel-item">
                                <div className="panel-icon">
                                    <div className="manage_order" />
                                </div>
                                <div className="panel-des">
                                    <h5>Shipping Address</h5>
                                    <p>Manage shipping address</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-3">
                            <div className="panel-item">
                                <div className="panel-icon">
                                    <div className="manage_order" />
                                </div>
                                <div className="panel-des">
                                    <h5>Change Email Address</h5>
                                    <p>Change the email address</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-3">
                            <div className="panel-item">
                                <div className="panel-icon">
                                    <div className="manage_order" />
                                </div>
                                <div className="panel-des">
                                    <h5>Edit Profile</h5>
                                    <p>Edit and complete your profile</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-3">
                            <div className="panel-item">
                                <div className="panel-icon">
                                    <div className="manage_order" />
                                </div>
                                <div className="panel-des">
                                    <h5>Return/Repair</h5>
                                    <p>Quickly submit the request of return/repair</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-3">
                            <div className="panel-item">
                                <div className="panel-icon">
                                    <div className="manage_order" />
                                </div>
                                <div className="panel-des">
                                    <h5>Cancel Order</h5>
                                    <p>Apply to cancel the order, delivery stopped</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-3">
                            <div className="panel-item">
                                <div className="panel-icon">
                                    <div className="manage_order" />
                                </div>
                                <div className="panel-des">
                                    <h5>Membership Privileges</h5>
                                    <p>Quickly learn about the membership privileges</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container my-3">
                <div className="p-3 bg-white">
                    <h4 className="panel-header">Customer Service</h4>
                    <div className="row tabs-group mx-1">
                        <div className="col-6 col-md-2">
                            <div className="tab-item ">
                                <FiUser className="tab-icon" />
                                <p>Account and VIP</p>
                            </div>
                        </div>
                        <div className="col-6 col-md-2">
                            <div className="tab-item ">
                                <BsQuestionSquare className="tab-icon" />
                                <p>Order</p>
                            </div>
                        </div>
                        <div className="col-6 col-md-2">
                            <div className="tab-item ">
                                <FiShoppingBag className="tab-icon" />
                                <p>Shopping guide</p>
                            </div>
                        </div>
                        <div className="col-6 col-md-2">
                            <div className="tab-item ">
                                <MdPayment className="tab-icon" />
                                <p>Payment and Promotion</p>
                            </div>
                        </div>
                        <div className="col-6 col-md-2">
                            <div className="tab-item ">
                                <FiHeadphones className="tab-icon" />
                                <p>Aftersales service</p>
                            </div>
                        </div>
                        <div className="col-6 col-md-2">
                            <div className="tab-item ">
                                <HiOutlineShoppingCart className="tab-icon" />
                                <p>Delivery and logistics</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-10 mx-auto mt-3">
                        <div className="row">
                            {Array(2)
                                .fill('item')
                                .map((item, index) => (
                                    <div className="col-md-6" key={index}>
                                        <dl className="question-list">
                                            <dd>
                                                <a href="#">What are VIP credits?</a>
                                            </dd>
                                            <dd>
                                                <a href="#">
                                                    Where can I change my login password？
                                                </a>
                                            </dd>
                                            <dd>
                                                <a href="#">Why can I not exchange my points?</a>
                                            </dd>
                                            <dd>
                                                <a href="#">How can I earn more Himel credits?</a>
                                            </dd>
                                            <dd>
                                                <a href="#">New user gifts</a>
                                            </dd>
                                            <dd>
                                                <a href="#">
                                                    When will I receive the VIP expedited shipping
                                                    coupon?
                                                </a>
                                            </dd>
                                            <dd>
                                                <a href="#">
                                                    How can I check my Banggood credits balance?
                                                </a>
                                            </dd>
                                        </dl>
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="container my-3">
                <div className="p-3 bg-white">
                    <h4 className="panel-header">Contact Us</h4>
                    <div className="row g-3 g-sm-4">
                        <div className="col-md-6">
                            <div className="contact">
                                <div className="">
                                    <h6 className="d-flex">
                                        <AiOutlineComment className="fs-4" />
                                        <span className="ms-2">Contact Us</span>
                                    </h6>
                                    <p className="text">
                                        Solve your problem, efficient and conveneient
                                    </p>
                                </div>
                                <Link to="/" className="contact-btn">
                                    Contact Us
                                </Link>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="contact">
                                <div className="">
                                    <h6 className="d-flex">
                                        <AiOutlineComment className="fs-4" />
                                        <span className="ms-2">Contact Us</span>
                                    </h6>
                                    <p className="text">
                                        Solve your problem, efficient and conveneient
                                    </p>
                                </div>
                                <Link to="/" className="contact-btn">
                                    Contact Us
                                </Link>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="contact">
                                <div className="">
                                    <h6 className="d-flex">
                                        <AiOutlineComment className="fs-4" />
                                        <span className="ms-2">Contact Us</span>
                                    </h6>
                                    <p className="text">
                                        Solve your problem, efficient and conveneient
                                    </p>
                                </div>
                                <Link to="/" className="contact-btn">
                                    Contact Us
                                </Link>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="contact">
                                <div className="">
                                    <h6 className="d-flex">
                                        <AiOutlineComment className="fs-4" />
                                        <span className="ms-2">Contact Us</span>
                                    </h6>
                                    <p className="text">
                                        Solve your problem, efficient and conveneient
                                    </p>
                                </div>
                                <Link to="/" className="contact-btn">
                                    Contact Us
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MainHelpCenter;
