import { FaBars, GoSearch, HiArrowLeft } from 'react-icons/all';
import { Link } from 'react-router-dom';
import { useSizeMenuContext } from '../../../contexts/SideMenuContextProvider';
import styles from '../HeaderMob.module.scss';
import '../HeaderMob.scss';

const CartHeaderMob = () => {
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
                        <h5 className="d-inline-block text-white pt-1 mb-0"> Cart (3) </h5>
                    </div>
                    <div className={styles.sign}>
                        <Link to="/search">
                            <GoSearch
                                className={`${styles.searchIcon}`}
                                style={{ opacity: 1, marginTop: '10px' }}
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartHeaderMob;
