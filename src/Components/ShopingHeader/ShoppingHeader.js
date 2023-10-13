import React from 'react';
import { RiSecurePaymentLine } from 'react-icons/ri';
import { MultiStepForm, Step } from 'react-multi-form';
import './ShoppingHeader.scss';

const ShoppingHeader = ({ step }) => {
    return (
        <div className="shoppingHeader d-none d-md-block ">
            <div className="container">
                <div
                    className="row justify-content-between align-items-center"
                    style={{ height: '60px' }}
                >
                    <div className="col-md-6">
                        <div className="headerLeft">
                            <h5 className="secure">
                                <RiSecurePaymentLine />
                                Secure Checkout
                            </h5>
                        </div>
                    </div>
                    <div className="col-md-6 step-label">
                        <MultiStepForm activeStep={step} accentColor="#00a84f">
                            <Step label="Shopping Cart" />
                            <Step label="Place Order" />
                            <Step label="Pay" />
                            <Step label="Complete" />
                        </MultiStepForm>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShoppingHeader;
