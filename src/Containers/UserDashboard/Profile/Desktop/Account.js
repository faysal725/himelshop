/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { FiEdit } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';

const Account = () => {
    const history = useHistory();

    return (
        <div className="row g-2">
            <div className="col-md-12 col-lg-4">
                <div className="box-item">
                    <div
                        onClick={() => history.push('/user-profile/edit-address')}
                        className="edit-action"
                    >
                        <FiEdit className="edit-icon" />
                    </div>
                    <div className="user-info">
                        <span>User Id: 13238</span>
                        <h6>Sujon Hossain</h6>

                        <div className="mt-2">
                            <div className="user-info-item">
                                <span>Phone:</span>
                                <a href="tel:+01980653626">01980653626</a>
                            </div>
                            <div className="user-info-item">
                                <span>Email:</span>
                                <a href="mailto:sujon.hossain758@gmail.com">
                                    sujon.hossain758@gmail.com
                                </a>
                            </div>
                        </div>

                        <div className="mt-3">
                            <a className="newsletter" href="#something">
                                Subscribe to our Newsletter
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-6 col-lg-4">
                <div className="box-item">
                    <div
                        className="edit-action"
                        onClick={() => history.push('/user-profile/edit-address')}
                    >
                        <FiEdit className="edit-icon" />
                    </div>
                    <div className="user-info">
                        <h6>Address</h6>
                        <span>Default Shopping Address</span>

                        <div className="mt-3">
                            <h6>Sujon Hossain</h6>
                            <div className="user-info-item">
                                House-13, Road-06, Block-B Section-6, Mirpur, Dhaka-1216
                            </div>
                            <div className="user-info-item mt-1">
                                <a href="tel:+01980653626">01980653626</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-6 col-lg-4">
                <div className="box-item">
                    <div
                        className="edit-action"
                        onClick={() => history.push('/user-profile/edit-address')}
                    >
                        <FiEdit className="edit-icon" />
                    </div>
                    <div className="user-info">
                        <h6>Address</h6>
                        <span>Default Billing Address</span>

                        <div className="mt-3">
                            <h6>Sujon Hossain</h6>
                            <div className="user-info-item">
                                House-13, Road-06, Block-B Section-6, Mirpur, Dhaka-1216
                            </div>
                            <div className="user-info-item mt-1">
                                <a href="tel:+01980653626">01980653626</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Account;
