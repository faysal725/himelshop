import { Link } from 'react-router-dom';
import image from '../../../../assets/images/New/2.jpg';
import styles from './SideProductItem.module.scss';

const SideProductItem = () => {
    return (
        <Link to="/" className={styles.product}>
            <div className={styles.productImg}>
                <img className="img-fluid" src={image} alt="" />
                <div className={`${styles.productPrice}`}>
                    <div className={styles.price}>৳ 120 </div>
                    <div className={styles.previousPrice}>৳ 220</div>
                </div>
            </div>
        </Link>
    );
};

export default SideProductItem;
