import { FiShoppingCart } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Image, Shimmer } from 'react-shimmer';
import styles from './ProductItem.module.scss';

const ProductItem = ({ product }) => (
    <div className={styles.productItem}>
        <Link to="/product-details">
            <div className={styles.productImage}>
                <Image
                    src={product.image}
                    fallback={<Shimmer width="100%" height={220} />}
                    alt=""
                />
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
                <div className={`${styles.soldWrapper} d-md-none solid`}>
                    <div className={styles.sold}> 2102 Sold </div>
                    <div className={styles.soldCart}>
                        <FiShoppingCart className={styles.soldCartIcon} />
                    </div>
                </div>
            </div>
        </Link>
    </div>
);

export default ProductItem;
