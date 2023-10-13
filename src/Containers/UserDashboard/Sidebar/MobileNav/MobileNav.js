import { AiOutlineShop } from 'react-icons/ai';
import { BsCardChecklist } from 'react-icons/bs';
import { FiShoppingCart } from 'react-icons/fi';
import { IoNotificationsOutline } from 'react-icons/io5';
import { MdPayment } from 'react-icons/md';
import { RiMoneyDollarCircleLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import './MobileNav.scss';

const MobileNav = () => {
    return (
        <div className="mobile-nav">
            <Link to="/user-profile/my-balance" className="mobile-nav-item">
                <div className="mobile-nav-item-box">
                    <RiMoneyDollarCircleLine className="mobile-nav-item-box-icon" />
                </div>
                <h6 className="mobile-nav-item-title">My Balance</h6>
            </Link>
            <Link to="/" className="mobile-nav-item">
                <div className="mobile-nav-item-box">
                    <IoNotificationsOutline className="mobile-nav-item-box-icon" />
                </div>
                <h6 className="mobile-nav-item-title">Notification</h6>
            </Link>
            <Link to="/user-profile/order" className="mobile-nav-item">
                <div className="mobile-nav-item-box">
                    <FiShoppingCart className="mobile-nav-item-box-icon" />
                </div>
                <h6 className="mobile-nav-item-title">My Order</h6>
            </Link>
            <Link to="/user-profile/wishlist" className="mobile-nav-item">
                <div className="mobile-nav-item-box">
                    <BsCardChecklist className="mobile-nav-item-box-icon" />
                </div>
                <h6 className="mobile-nav-item-title">Wishlist</h6>
            </Link>
            <Link to="/" className="mobile-nav-item">
                <div className="mobile-nav-item-box">
                    <MdPayment className="mobile-nav-item-box-icon" />
                </div>
                <h6 className="mobile-nav-item-title">Payment Pending</h6>
            </Link>
            <Link to="/user-profile/affiliate" className="mobile-nav-item">
                <div className="mobile-nav-item-box">
                    <AiOutlineShop className="mobile-nav-item-box-icon" />
                </div>
                <h6 className="mobile-nav-item-title">Affiliate</h6>
            </Link>
        </div>
    );
};

export default MobileNav;
