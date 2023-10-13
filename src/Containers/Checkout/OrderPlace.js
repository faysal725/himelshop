import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const OrderPlace = () => {
    const history = useHistory();

    return (
        <div className="bg-white p-3 pb-4 rounded">
            <h5 className="checkout-title">Discount</h5>
            <div className="checkout-title mt-2">Coupons</div>
            <div className="coupon-code-wrapper">
                <div className="coupon-code">
                    <input type="text" name="" placeholder="Input coupon code" />
                    <button type="button" className="apply-btn disabled">
                        Apply
                    </button>
                </div>
                <span>There is no coupon available.</span>
            </div>
            <ul className="order-summery">
                <li className="total">
                    <span className="text">Total</span>
                </li>
                <li className="">
                    <span className="text">Order Total</span>
                    <span className="money">৳997.99</span>
                </li>
                <li className="total" style={{ fontSize: '15px' }}>
                    <span className="text">Total Payment</span>
                    <span className="money">৳997.99</span>
                </li>
            </ul>
            <button
                type="button"
                className="order-process-btn custom-button"
                onClick={() => history.push('/payment')}
            >
                Place Order
            </button>
            <span className="text-secondary mt-3 pb-2 d-inline-block">
                Please read Our
                <Link to="/" className="text-secondary ms-2 text-decoration-underline">
                    Privacy Policy
                </Link>
            </span>
        </div>
    );
};

export default OrderPlace;
