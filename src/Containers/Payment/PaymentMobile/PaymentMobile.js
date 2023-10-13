import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import masterCart from '../../../assets/images/master.jpg';
import nagadImage from '../../../assets/images/nagad.jpg';
import dbbl from '../../../assets/images/rocket.png';
import OrderSummery from '../OrderSummery/OrderSummery';
import './PaymentMobile.scss';

const PaymentMobile = () => {
    return (
        <div className="mobile-paymentWrap">
            <div className="container">
                <h6>Payment Method</h6>
                <div className="bg-white">
                    <div className="payment-mobile">
                        <div className="paymentItem">
                            <div className="paymentImage">
                                <img className="img-fluid" src={nagadImage} alt="" />
                                <div className="paymentName">Nagand Account</div>
                            </div>

                            <div className="rightArrowSign">
                                <FiChevronRight />
                            </div>
                        </div>
                        <div className="paymentItem">
                            <div className="paymentImage">
                                <img className="img-fluid" src={dbbl} alt="" />
                                <div className="paymentName">Rocket Account</div>
                            </div>

                            <div className="rightArrowSign">
                                <FiChevronRight />
                            </div>
                        </div>
                        <div className="paymentItem">
                            <div className="paymentImage">
                                <img className="img-fluid" src={masterCart} alt="" />
                                <div className="paymentName">Master Card</div>
                            </div>

                            <div className="rightArrowSign">
                                <FiChevronRight />
                            </div>
                        </div>
                        <div className="paymentItem">
                            <div className="paymentImage">
                                <img className="img-fluid" src={nagadImage} alt="" />
                                <div className="paymentName">Nagand Account</div>
                            </div>

                            <div className="rightArrowSign">
                                <FiChevronRight />
                            </div>
                        </div>
                        <div className="paymentItem">
                            <div className="paymentImage">
                                <img className="img-fluid" src={nagadImage} alt="" />
                                <div className="paymentName">Nagand Account</div>
                            </div>

                            <div className="rightArrowSign">
                                <FiChevronRight />
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12">
                            <OrderSummery />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaymentMobile;
