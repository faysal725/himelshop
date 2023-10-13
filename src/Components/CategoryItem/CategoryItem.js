import { Link } from 'react-router-dom';
import image1 from '../../assets/images/hotCategory/computer/cddece7d-3de6-4ed8-919f-b8fdba9d0e8c.jpg';
import styles from './CategoryItem.module.scss';

const CategoryItem = ({ image }) => (
    <Link to="/" className={styles.categoryItem}>
        <img src={image || image1} alt="" />
    </Link>
);

export default CategoryItem;
