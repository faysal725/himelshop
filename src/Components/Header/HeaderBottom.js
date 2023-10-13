import React from 'react';
import { BiHome, BiSupport, CgMenuBoxed, CgShoppingCart, FaRegUser } from 'react-icons/all';
import { NavLink } from 'react-router-dom';
import './HeaderBottom.scss';

const HeaderBottom = () => (
    <div className="header-bottom d-md-none">
        <li>
            <NavLink exact to="/">
                <BiHome />
                <div className="bottom-bar-text">Home</div>
            </NavLink>
        </li>
        <li>
            <NavLink to="/categories">
                <CgMenuBoxed />
                <div className="bottom-bar-text">Category</div>
            </NavLink>
        </li>
        <li>
            <NavLink to="/shopping-cart">
                <CgShoppingCart />
                <div className="bottom-bar-text">Cart</div>
            </NavLink>
        </li>
        <li>
            <NavLink to="/chat">
                <BiSupport />
                <div className="bottom-bar-text">Chat</div>
            </NavLink>
        </li>

        <li>
            <NavLink to="/user-profile">
                <FaRegUser style={{ height: '19px' }} />
                <div className="bottom-bar-text">Account</div>
            </NavLink>
        </li>
    </div>
);

export default HeaderBottom;
