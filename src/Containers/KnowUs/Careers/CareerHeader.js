import React from 'react';
import { Link } from 'react-router-dom';

const CareerHeader = ({ title }) => {
    return (
        <>
            <div className="bg-dark fixed-top d-block d-md-none">
                <div className="container">
                    <div className="career-header">
                        <Link to="/careers" className="header-title">
                            Careers
                        </Link>
                        <div className="link-list">
                            <Link to="/" className="link-item">
                                Home
                            </Link>
                            <Link to="/about-us" className="link-item">
                                About
                            </Link>
                            <Link to="login" className="link-item">
                                Sign Up
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="career-header-wrapper">
                <div className="container">
                    <div className="career-header d-none d-md-flex ">
                        <Link to="/careers" className="header-title">
                            Careers
                        </Link>
                        <div className="link-list">
                            <Link to="/" className="link-item">
                                Home
                            </Link>
                            <Link to="/about-us" className="link-item">
                                About
                            </Link>
                            <Link to="login" className="link-item">
                                Sign Up
                            </Link>
                            <Link to="sign-up" className="link-item">
                                Login
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="position">
                    <h1 className="text-white">{title} </h1>
                </div>
            </div>
        </>
    );
};

export default CareerHeader;
