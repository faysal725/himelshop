import { Link } from 'react-router-dom';
import image2 from '../../assets/images/Brand/Xiaomi/2.jpg';
import styles from './BrandItem.module.scss';

const BrandItem = () => (
    <Link to="/" className={styles.brandItem}>
        <div className={styles.brandItemLogo}>
            <img src={image2} alt="" />
        </div>
    </Link>
);

export default BrandItem;
