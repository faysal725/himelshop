import { Link } from 'react-router-dom';
import styles from './Product.module.scss';

const Product = ({ product }) => (
    <Link to="/" className={styles.product}>
        <div className={styles.productImg}>
            <img src={product.image} alt="" />
            <div className={`${styles.productPrice} d-md-none`}>
                <div className={styles.price}>৳{product.price} </div>
            </div>
        </div>
        <div className={`${styles.productPrice} d-none d-md-flex`}>
            <div className={styles.price}>৳{product.price} </div>
            <div className={styles.previousPrice}>৳{product.previousPrice} </div>
            <div className={styles.off}>15% OFF</div>
        </div>
        <div className={styles.productName}>
            <span>V-Neck Baggy Shirts </span>
        </div>
    </Link>
);

export default Product;
