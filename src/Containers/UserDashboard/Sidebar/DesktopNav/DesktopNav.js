import React from 'react';
import { AiOutlineIdcard, AiOutlineShop } from 'react-icons/ai';
import { FiShoppingBag, HiOutlineLocationMarker, IoBackspaceOutline } from 'react-icons/all';
import { BiUser } from 'react-icons/bi';
import { FaMoneyBill, FaUserEdit } from 'react-icons/fa';
import { FiHeart } from 'react-icons/fi';
import { ImCancelCircle } from 'react-icons/im';
import { MdRssFeed } from 'react-icons/md';
import { NavLink } from 'react-router-dom';

const DesktopNav = () => {
    return (
        <>
            <div className="c-side-user">
                <div className="avatar-upload">
                    <div className="avatar-preview">
                        <div
                            id="imagePreview"
                            style={{
                                backgroundImage: 'url(http://i.pravatar.cc/500?img=7)',
                            }}
                        />
                        <div className="avatar-edit">
                            <input type="file" id="imageUpload" accept=".png, .jpg, .jpeg" />
                            <label htmlFor="imageUpload">
                                <FaUserEdit />
                            </label>
                        </div>
                    </div>
                </div>
                <h6 className="text-center" style={{ color: '#111' }}>
                    Sujon Hossain (Admin)
                </h6>
            </div>
            <ul className="sidebar-menu">
                <li className="sidebar-menu-item">
                    <NavLink exact className="sidebar-menu-link" to="/user-profile/">
                        <BiUser className="icon" /> My Profile
                    </NavLink>
                </li>
                <li className="sidebar-menu-item">
                    <NavLink className="sidebar-menu-link" to="/user-profile/address">
                        <HiOutlineLocationMarker className="icon" /> Address
                    </NavLink>
                </li>
                <li className="sidebar-menu-item">
                    <NavLink className="sidebar-menu-link" to="/user-profile/voucher">
                        <AiOutlineIdcard className="icon" /> Vouchers
                    </NavLink>
                </li>
                <li className="sidebar-menu-item">
                    <NavLink className="sidebar-menu-link" to="/user-profile/order">
                        <FiShoppingBag className="icon" /> My Order
                    </NavLink>
                </li>
                <li className="sidebar-menu-item">
                    <NavLink className="sidebar-menu-link" to="/user-profile/my-balance">
                        <FaMoneyBill className="icon" /> My Balance
                    </NavLink>
                </li>
                <li className="sidebar-menu-item">
                    <NavLink className="sidebar-menu-link" to="/user-profile/return">
                        <IoBackspaceOutline className="icon" /> Returns
                    </NavLink>
                </li>
                <li className="sidebar-menu-item">
                    <NavLink className="sidebar-menu-link" to="/user-profile/cancel">
                        <ImCancelCircle className="icon" /> Cancellation
                    </NavLink>
                </li>
                <li className="sidebar-menu-item">
                    <NavLink className="sidebar-menu-link" to="/user-profile/review">
                        <MdRssFeed className="icon" /> Reviews
                    </NavLink>
                </li>
                <li className="sidebar-menu-item">
                    <NavLink className="sidebar-menu-link" to="/user-profile/wishlist">
                        <FiHeart className="icon" /> Wishlist
                    </NavLink>
                </li>
                <li className="sidebar-menu-item">
                    <NavLink className="sidebar-menu-link" to="/user-profile/affiliate">
                        <AiOutlineShop className="icon" /> Affiliate
                    </NavLink>
                </li>
            </ul>
        </>
    );
};

export default DesktopNav;
