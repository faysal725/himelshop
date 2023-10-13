import { Link } from 'react-router-dom';
import styles from './FlashItem.module.scss';

const FlashItem = ({ product }) => (
    <div className={styles.FlashItemWrapper}>
        <Link to="/" className={styles.FlashItem}>
            <div className={styles.FlashItemImage}>
                <img src={product.image} alt="" className="img-fluid" />
                <span className={styles.FlashItemSales}> {product.sale} %</span>
            </div>
            <div className={styles.FlashItemContext}>
                <div className={styles.FlashItemName}> {product.name} </div>
                <div className={styles.FlashItemPriceAndSolid}>
                    <div className={styles.FlashItemPrice}>
                        <div className={styles.price}>৳{product.price}</div>
                        <div className={styles.previousPrice}>৳{product.previousPrice}</div>
                    </div>
                    <div className={styles.FlashItemSolid}>Solid {product.solid}</div>
                </div>
            </div>
        </Link>
        <div className={styles.stock}>
            <div className={styles.stockBar}>
                <div className={styles.stockLevel}>Stock- 15</div>
            </div>
        </div>
    </div>
);

export default FlashItem;
