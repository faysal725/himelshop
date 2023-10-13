/* eslint-disable no-unused-expressions */
import { useEffect } from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import { FiChevronRight } from 'react-icons/fi';
import { GoThreeBars } from 'react-icons/go';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import Categories from '../../../Containers/Home/Categories';
// import fakeRoutes from '../../../Containers/Home/fakeRoutes.json';
import styles from './HeaderMenu.module.scss';
import './HeaderMenu.scss';

const HeaderMenu = () => {
    const { pathname } = useLocation();
    // const { categories } = fakeRoutes;

    const { categories } = useSelector(state => state.category);

    useEffect(() => {
        if (pathname === '/') {
            document.querySelector('.categoryWrapper').addEventListener('mouseover', () => {
                document.body.classList.remove('categoryOverlay');
            });
            document.querySelector('.categoryWrapper').addEventListener('mouseleave', () => {
                document.body.classList.remove('categoryOverlay');
            });
        } else {
            document.querySelector('.categoryWrapper').addEventListener('mouseover', () => {
                document.body.classList.add('categoryOverlay');
            });
            document.querySelector('.categoryWrapper').addEventListener('mouseleave', () => {
                document.body.classList.remove('categoryOverlay');
            });
        }
    }, [pathname]);

    return (
        <div className={styles.headerMenu}>
            <div className="row">
                <div className="col-md-3 col-lg-2 pe-lg-0">
                    <div className="categoryWrapper">
                        <div className="category">
                            <div className="categoryBar">
                                <GoThreeBars className="bars" />
                                <span>Category</span>
                            </div>
                            <FiChevronRight className="rightArrow" />
                        </div>
                        {pathname !== '/' && (
                            categories && (
                                <div className="categoriesList">
                                    <Categories categories={categories} />
                                </div>
                            )
                        )}
                    </div>
                </div>
                <div className="col-md-9 col-lg-8">
                    <ul className={styles.links}>
                        <li className={styles.linkItem}>
                            <Link to="/" className={styles.link}>
                                Global
                            </Link>
                        </li>
                        <li className={styles.linkItem}>
                            <Link to="/" className={styles.link}>
                                Trimmer
                            </Link>
                        </li>
                        <li className={styles.linkItem}>
                            <Link to="/" className={styles.link}>
                                New
                            </Link>
                        </li>
                        <li className={styles.linkItem}>
                            <Link to="/" className={styles.link}>
                                Top Products
                            </Link>
                        </li>
                        <li className={styles.linkItem}>
                            <Link to="/" className={styles.link}>
                                Pre Order
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="col-md-0 col-lg-2 d-md-none d-lg-block">
                    <div className={styles.phoneNumber}>
                        <a href="tel:+01716755768">
                            <FaPhoneAlt />
                            01716755768
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderMenu;
