import { FaChevronRight, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSizeMenuContext } from '../../contexts/SideMenuContextProvider';
import './SideMenu.scss';

const SideMenu = () => {
    const { toggle, setToggle } = useSizeMenuContext();
    return (
        <div>
            {toggle && (
                <div className="side-menu-bar d-md-none">
                    <div className="s-bg" />
                    <FaTimes className="close-btn" onClick={() => setToggle(!toggle)} />
                    <div className="s-main">
                        <div className="s-header">
                            <Link to="/" className="sh-avatar">
                                <img
                                    src="https://m.banggood.com/templates/default/images/details/default_customer_avatar.jpg"
                                    alt=""
                                />
                            </Link>
                            <div className="sh-not-login">Hello,Sign In</div>
                        </div>
                        <div className="side-menu-links">
                            <Link to="/" className="get-user">
                                <p>New User Benefits</p>
                                <h5>GET</h5>
                            </Link>
                            <ul className="side-item">
                                <li>
                                    <a href="/" className="side-item-list">
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a href="/" className="side-item-list">
                                        My Account
                                    </a>
                                </li>
                                <li>
                                    <a href="/" className="side-item-list">
                                        My Wishlist
                                    </a>
                                </li>
                                <li>
                                    <a href="/" className="side-item-list">
                                        My Orders
                                    </a>
                                </li>
                                <li>
                                    <a href="/" className="side-item-list">
                                        Customer Service
                                    </a>
                                </li>
                            </ul>
                            <ul className="side-item">
                                <li className="explore">
                                    <span className="side-item-list title"> Explore </span>
                                </li>
                                <li>
                                    <a href="/" className="side-item-list">
                                        Free Trail
                                    </a>
                                </li>
                                <li>
                                    <a href="/" className="side-item-list">
                                        See All Category
                                        <FaChevronRight />
                                    </a>
                                </li>
                            </ul>
                            <ul className="side-item">
                                <li className="explore">
                                    <span className="side-item-list title"> Setting </span>
                                </li>
                                <li>
                                    <a href="/" className="side-item-list">
                                        International Site
                                        <FaChevronRight />
                                    </a>
                                </li>
                                <li>
                                    <a href="/" className="side-item-list">
                                        English (EN)
                                        <FaChevronRight />
                                    </a>
                                </li>
                            </ul>
                            <ul className="side-item">
                                <li>
                                    <a href="/" className="side-item-list">
                                        International Site
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SideMenu;
