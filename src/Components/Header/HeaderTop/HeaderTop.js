import { Link } from 'react-router-dom';
import styles from './HeaderTop.module.scss';

const HeaderTop = () => (
    <div className={styles.headerTop}>
        <ul className={styles.headerLinks}>
            <li className={styles.headerLink}>
                <Link className={styles.headerLinkItem} to="/">
                    Track Order
                </Link>
            </li>
            <li className={styles.headerLink}>
                <Link className={styles.headerLinkItem} to="/main-help-center">
                    Help
                </Link>
            </li>
            <li className={styles.headerLink}>
                <Link className={styles.headerLinkItem} to="/">
                    বাংলা
                </Link>
            </li>
            <li className={styles.headerLink}>
                <Link className={styles.headerLinkItem} to="/">
                    English
                </Link>
            </li>
        </ul>
    </div>
);

export default HeaderTop;
