import React from 'react';
import { useHistory } from 'react-router-dom';
import './OrderSummery.scss';

const OrderSummery = ({ isButton }) => {
    const history = useHistory();
    return (
        <div className="cart-right">
            <div className="bg-white p-3 pb-4 rounded">
                <h4 className="title">Order summary</h4>
                <ul className="order-summery">
                    <li>
                        <span className="text">Product Price</span>
                        <span className="money">৳997.99</span>
                    </li>
                    <li>
                        <span className="text">Discount</span>
                        <span className="money">
                            (-) <span className="ms-3">৳997.99</span>
                        </span>
                    </li>
                    <li className="subTotal">
                        <span className="text">Subtotal</span>
                        <span className="money">৳997.99</span>
                    </li>
                    <li>
                        <span className="text">Shipping Cost</span>
                        <span className="money">
                            (+) <span className="ms-3">৳997.99</span>
                        </span>
                    </li>
                    <li className="total">
                        <span className="text">Total(10)</span>
                        <span className="money">৳997.99</span>
                    </li>
                </ul>
                {isButton && (
                    <button
                        type="button"
                        className="order-process-btn custom-button"
                        onClick={() => history.push('/checkout')}
                    >
                        Proceed To Checkout
                    </button>
                )}
            </div>
            <div className="accept bg-white p-3 mt-3 rounded" />
        </div>
    );
};

export default OrderSummery;
