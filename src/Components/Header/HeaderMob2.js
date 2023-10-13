import { FaBars, GoSearch, MdAddShoppingCart } from 'react-icons/all';
import { Link } from 'react-router-dom';
import brand from '../../assets/images/himel-shop.png';
import { useSizeMenuContext } from '../../contexts/SideMenuContextProvider';
import styles from './HeaderMob.module.scss';
import './HeaderMob.scss';

const HeaderMob2 = () => {
    const { toggle, setToggle } = useSizeMenuContext();

    return (
        <div className={`${styles.header} d-md-none`}>
            <div className={styles.headerWrapper}>
                <div className={styles.headerTop}>
                    <div className={styles.headerLogo}>
                        <FaBars className={styles.headerBar} onClick={() => setToggle(!toggle)} />
                        <Link to="/">
                            <img src={brand} width="100px" alt="" />
                        </Link>
                    </div>
                    <div className={styles.sign}>
                        <GoSearch className={`${styles.searchIcon}`} style={{ opacity: 1 }} />
                        <Link to="/" style={{ fontSize: '18px' }}>
                            <MdAddShoppingCart />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderMob2;
