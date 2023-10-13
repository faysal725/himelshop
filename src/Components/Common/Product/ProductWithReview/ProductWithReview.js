import { Link } from 'react-router-dom';
import styles from './ProductWithReview.module.scss';

const ProductItem2 = ({ product }) => (
    <div className={styles.productItem}>
        <Link to="/product-details">
            <div className={styles.productImage}>
                <img src={product.image} alt="" />
                {product.newUser && <span className={styles.gift}> New User Only</span>}
            </div>
            <div className={styles.productContent}>
                <div className={styles.productPrice}>
                    <div className={styles.price}>৳{product.price} </div>
                    <div className={styles.previousPrice}>৳50 </div>
                    <div className={styles.off}>15% OFF</div>
                </div>
                <div className={`${styles.productName}`}>
                    <a href="/"> {product.name} </a>
                </div>
                <div className={styles.review}> {product.review} reviews </div>
            </div>
        </Link>
    </div>
);

export default ProductItem2;
