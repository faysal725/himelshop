import React from 'react';
import { useHistory } from 'react-router-dom';

const TabContent = () => {
    const history = useHistory();
    return (
        <div className="bg-white p-5 tabContent ">
            <p>
                1. Users paying with bkash for the first time: Enter bKash Wallet Number and OTP for
                successful account saving
            </p>
            <p>2. For All subsequent users: Enter make payment</p>
            <p className="py-3">
                Disclaimer: you will be redicrect back to Checkout for first transction to complete
                payment
            </p>

            <div className="">
                <p>Please Note</p>
                <div className="ms-3">
                    <p>1. You have an activated bKash account</p>
                    <p>
                        2. Ensure you have sufficient balance in your bKash account to cover the
                        total cost of the order
                    </p>
                    <p>
                        3. Ensure you are able to receive your OTP (one-time-password) on your
                        mobile and have bKash PIN
                    </p>
                </div>
            </div>

            <div className="pt-3">
                *** Please not that one bKash account can only be saved in one HIMEL SHOP account
                ***
            </div>

            <button
                type="button"
                className="payment-btn custom-button"
                onClick={() => history.push('/order-confirm')}
            >
                Pay
            </button>
        </div>
    );
};

export default TabContent;
