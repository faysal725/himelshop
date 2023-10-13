import React from 'react';
import './CartHeaderBottom.scss';

const CartHeaderBottom = () => {
    return (
        <div className="header-buttons">
            <button type="button" className="first">
                Checkout our With
                <br />
                bKash
            </button>
            <button type="button" className="second">
                Checkout (3)
            </button>
        </div>
    );
};

export default CartHeaderBottom;
