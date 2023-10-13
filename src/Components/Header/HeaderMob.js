import { useEffect } from 'react';
import { FaBars, GoSearch } from 'react-icons/all';
import { Link } from 'react-router-dom';
import brand from '../../assets/images/himel-shop.png';
import { useSizeMenuContext } from '../../contexts/SideMenuContextProvider';
import styles from './HeaderMob.module.scss';
import './HeaderMob.scss';

const HeaderMob = () => {
    const { toggle, setToggle } = useSizeMenuContext();

    useEffect(() => {
        const searchIcon = document.getElementById('searchIcon');
        const navbar = document.getElementById('Navbar');

        let scrollPosition = window.pageYOffset;

        window.addEventListener('scroll', () => {
            const currentScrollPos = window.pageYOffset;

            if (scrollPosition > currentScrollPos) {
                navbar.style.height = '82px';
                searchIcon.classList.add('searchIconNone');
                searchIcon.classList.remove('searchIconShow');
            } else {
                navbar.style.height = '44px';
                searchIcon.classList.add('searchIconShow');
                searchIcon.classList.remove('searchIconNone');
            }
            scrollPosition = currentScrollPos;
        });
    }, []);

    return (
        <div className={`${styles.header} d-md-none`} id="Navbar">
            <div className={styles.headerWrapper}>
                <div className={styles.headerTop}>
                    <div className={styles.headerLogo}>
                        <FaBars className={styles.headerBar} onClick={() => setToggle(!toggle)} />
                        <Link to="/">
                            <img src={brand} width="100px" alt="" />
                        </Link>
                    </div>
                    <div className={styles.sign}>
                        <Link to="/search">
                            <GoSearch className={styles.searchIcon} id="searchIcon" />
                        </Link>
                        <Link to="/login">Sign In</Link>
                    </div>
                </div>
                <form action="" className={styles.headerSearchBox}>
                    <GoSearch className={styles.searchIcon} />
                    <input type="text" name="" placeholder="Search Himel Shop" />
                </form>
            </div>
        </div>
    );
};

export default HeaderMob;
