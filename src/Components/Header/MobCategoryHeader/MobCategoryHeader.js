import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { GoThreeBars } from 'react-icons/go';
import { HiArrowLeft } from 'react-icons/hi';
import { MdAddShoppingCart } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { useSizeMenuContext } from '../../../contexts/SideMenuContextProvider';
import './MobCategoryHeader.scss';

const MobCategoryHeader = () => {
    const { toggle, setToggle } = useSizeMenuContext();

    return (
        <div className="MobCategoryHeader">
            <div className="headerWrapper">
                <Link to="/" className="leftArrow">
                    <HiArrowLeft />
                </Link>
                <GoThreeBars className="bars" onClick={() => setToggle(!toggle)} />
                <div className="searchBox">
                    <AiOutlineSearch className="searchIcon" />
                    <input type="text" name="" id="" />
                </div>
                <Link className="cart" to="/shopping-cart">
                    <MdAddShoppingCart />
                </Link>
            </div>
        </div>
    );
};

export default MobCategoryHeader;
