import { useEffect, useState } from 'react';
import { ImWhatsapp, RiShoppingCartLine } from 'react-icons/all';
import {
    FaFacebookF,
    FaInstagram,
    FaPinterestP,
    FaTwitter,
    // eslint-disable-next-line prettier/prettier
    FaYoutube
} from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import AsideBar from './AsideBar';

const Aside = () => {
    const [show, setShow] = useState(null);
    const paths = [
        '/login',
        '/sign-up',
        '/categories',
        '/shopping-cart',
        '/order-confirm',
        '/checkout',
        '/payment',
        '/contact-us',
        '/user-profile',
        '/about-us',
        '/help-center',
        '/blogs',
        '/main-help-center',
        '/affiliate',
        '/wholesale',
        '/careers',
        '/privacy-policy',
    ];
    const { pathname } = useLocation();

    const isPath = paths.find((path) => pathname.includes(path));

    useEffect(() => {
        if (isPath) {
            setShow(false);
        } else {
            setShow(true);
        }
    }, [isPath]);

    if (!show) {
        return null;
    }

    return (
        <div id="aside" className="d-none d-lg-block">
            <div className="asideBar asideBarFirst">
                <ul className="asideOptions">
                    <li>
                        <a href="http://" target="_blank" rel="noopener noreferrer">
                            <FaFacebookF className="icon" />
                        </a>
                        <div className="tip">Facebook</div>
                    </li>
                    <li>
                        <a href="http://" target="_blank" rel="noopener noreferrer">
                            <FaInstagram className="icon" />
                        </a>
                        <div className="tip">Instagram</div>
                    </li>
                    <li>
                        <a href="http://" target="_blank" rel="noopener noreferrer">
                            <ImWhatsapp className="icon" />
                        </a>
                        <div className="tip">WhatsApp</div>
                    </li>
                    <li>
                        <a href="http://" target="_blank" rel="noopener noreferrer">
                            <FaPinterestP className="icon" />
                        </a>
                        <div className="tip">Pinterest</div>
                    </li>
                    <li>
                        <a href="http://" target="_blank" rel="noopener noreferrer">
                            <FaYoutube className="icon" />
                        </a>
                        <div className="tip">Youtube</div>
                    </li>
                    <li>
                        <a href="http://" target="_blank" rel="noopener noreferrer">
                            <FaTwitter className="icon" />
                        </a>
                        <div className="tip">Twitter</div>
                    </li>
                    <li className="asideCart">
                        <Link style={{ color: '#fff' }} to="/shopping-cart">
                            <div className="cartCount">9+</div>
                            <RiShoppingCartLine style={{ fontSize: '24px' }} />
                        </Link>
                        <div className="cartTk">12000 tk</div>
                    </li>
                </ul>
            </div>
            <AsideBar />
        </div>
    );
};

export default Aside;
