import { Link } from 'react-router-dom';
import styles from './RelatedCategory.module.scss';

const RelatedCategory = () => (
    <div className={styles.relatedCategory}>
        <h6> Related Categories</h6>
        <ul className={styles.subCategories}>
            <div className={styles.category}>Electronics</div>
            <li className={styles.subCategoryItem}>
                <Link to="/"> Home Audio & Video</Link>
            </li>
            <li className={styles.subCategoryItem}>
                <Link to="/">Photography & Camera Acc</Link>
            </li>
            <li className={styles.subCategoryItem}>
                <Link to="/">Electronics Accessories & Gadgets</Link>
            </li>
            <li className={styles.subCategoryItem}>
                <Link to="/">Media Players</Link>
            </li>
            <li className={styles.subCategoryItem}>
                <Link to="/"> Smart Home </Link>
            </li>
            <li className={styles.subCategoryItem}>
                <Link to="/"> Digital Accessories </Link>
            </li>
            <li className={styles.subCategoryItem}>
                <Link to="/"> Headphones & EarPhones </Link>
            </li>
        </ul>
    </div>
);

export default RelatedCategory;
