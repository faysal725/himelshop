import { Link } from 'react-router-dom';
import styles from '../ProductItem/ProductItem.module.scss';

const ProductWithoutSolid = ({ product }) => (
    <div className={styles.productItem}>
        <Link to="/product-details">
            <div className={styles.productImage}>
                <img src={product.image} alt="" />
                {product.newUser && <span className={styles.gift}> New User Only</span>}
            </div>
            <div className={styles.productContent}>
                <div className={`${styles.productName} ${styles.productNameMob} d-md-none`}>
                    <a href="/"> {product.name} </a>
                </div>
                <div className={styles.productPrice}>
                    <div className={styles.price}>৳{product.price} </div>
                    <div className={styles.previousPrice}>৳50 </div>
                    <div className={styles.off}>15% OFF</div>
                </div>
                <div className={`${styles.productName} ${styles.productNameDes}`}>
                    <a href="/"> {product.name} </a>
                </div>
            </div>
        </Link>
    </div>
);

export default ProductWithoutSolid;
