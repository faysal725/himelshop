/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */

import { useEffect, useState } from 'react';
import {
    AiFillAndroid,
    FaApple,
    HiOutlineDeviceMobile,
    IoIosArrowDown,
    // eslint-disable-next-line prettier/prettier
    RiCustomerService2Fill
} from 'react-icons/all';
import { Link } from 'react-router-dom';
import './AsideBar.scss';

const AsideBar = () => {
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        window.onscroll = () => {
            setOffset(window.pageYOffset);
        };
    }, []);

    const handleTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    return (
        <div className="asideBar">
            <ul className="asideOptions">
                <li className="contact">
                    <RiCustomerService2Fill className="icon" />
                    <div className="contactBox">
                        <Link to="/contact-us" className="contactBtn" collected="1">
                            Contact Himel Shop
                        </Link>
                    </div>
                </li>
                <li className="qrCode">
                    <HiOutlineDeviceMobile className="icon" />
                    <div className="app">
                        <div className="downBox">
                            <div className="info">
                                Download App to get <b>US$3</b> off coupon
                                <span>(Apply to all items)</span>
                            </div>
                            <div className="img">
                                <img
                                    src="https://s.staticbg.com/web/src/img/app_qrcode.png?v=037d5b2"
                                    alt=""
                                />
                            </div>
                            <p>OR</p>
                            <ul className="buttons">
                                <li>
                                    <a href="/">
                                        <FaApple /> Apple
                                    </a>
                                </li>
                                <li>
                                    <a href="/">
                                        <AiFillAndroid /> Android
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </li>
                <li
                    className="topArrow"
                    style={{
                        visibility: `${offset >= 300 ? 'visible' : 'hidden'}`,
                        cursor: 'pointer',
                    }}
                    onClick={handleTop}
                >
                    <IoIosArrowDown className="icon upArrow" />
                    <span className="tip">Go Top</span>
                </li>
            </ul>
        </div>
    );
};

export default AsideBar;
