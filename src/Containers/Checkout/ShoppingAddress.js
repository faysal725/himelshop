import React from 'react';
import { AiFillHome } from 'react-icons/ai';

const ShoppingAddress = () => {
    return (
        <div className="address-wrap">
            <ul className="address-list">
                <li>
                    <div className="select-address-wrap">
                        <label htmlFor="address" className="radio-wrap">
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="flexRadioDefault"
                                    checked
                                />
                            </div>
                        </label>
                    </div>
                    <div className="address-info-wrap">
                        <div className="basic-info">Simul Uddin, 01745454545</div>
                        <div className="other-info">
                            <p>12/A Road:12, Posikha More</p>
                            <p>Mirpur, Dhaka-1216, Bangladesh</p>
                        </div>
                        <div className="item-btn">
                            <button type="button" className="first">
                                Edit
                            </button>
                            <button type="button" className="first">
                                Delete
                            </button>
                            <span className="default">Default</span>
                        </div>
                    </div>
                    <div className="address-btn-wrapper">
                        <button type="button" disabled className="address-btn ">
                            <AiFillHome /> Home
                        </button>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default ShoppingAddress;
