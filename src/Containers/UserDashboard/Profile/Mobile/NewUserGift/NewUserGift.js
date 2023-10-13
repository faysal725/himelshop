import { FaAngleRight } from 'react-icons/fa';
import styles from './NewUserGift.module.scss';

const NewUserGift = () => {
    return (
        <div className={styles.newUserGiftWrapper}>
            <h6 className={styles.title}>New User Gift</h6>
            <div className={styles.info}>
                <a href="/">
                    <div className={styles.text}>
                        <span className="notranslate">Free Gift & tk 50</span>
                        <span>Coupons</span>
                    </div>
                    <FaAngleRight className={styles.icon} />
                </a>
            </div>
        </div>
    );
};

export default NewUserGift;
