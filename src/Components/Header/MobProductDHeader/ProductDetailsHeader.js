import { FaBars, GoSearch, HiArrowLeft, MdAddShoppingCart } from 'react-icons/all';
import { Link } from 'react-router-dom';
import brand from '../../../assets/images/himel-shop.png';
import { useSizeMenuContext } from '../../../contexts/SideMenuContextProvider';
import styles from '../HeaderMob.module.scss';
import '../HeaderMob.scss';

const ProductDetailsHeader = () => {
    const { toggle, setToggle } = useSizeMenuContext();

    return (
        <div className={`${styles.header} d-md-none`}>
            <div className={styles.headerWrapper}>
                <div className={styles.headerTop}>
                    <div className={styles.headerLogo}>
                        <Link to="/">
                            <HiArrowLeft
                                style={{ fontSize: '25px', color: '#fff', marginRight: '15px' }}
                            />
                        </Link>
                        <FaBars className={styles.headerBar} onClick={() => setToggle(!toggle)} />
                        <Link to="/">
                            <img src={brand} width="100px" alt="" />
                        </Link>
                    </div>
                    <div className={styles.sign}>
                        <Link to="/search">
                            <GoSearch className={`${styles.searchIcon}`} style={{ opacity: 1 }} />
                        </Link>
                        <Link to="/shopping-cart" style={{ fontSize: '18px' }}>
                            <MdAddShoppingCart />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailsHeader;
