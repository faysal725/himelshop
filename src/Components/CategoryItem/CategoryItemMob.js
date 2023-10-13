import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../assets/images/New/4.jpg';
import styles from './CategoryItemMob.module.scss';

const CategoryItemMob = () => (
    <Link to="/category" className={styles.product}>
        <div className={styles.productImg}>
            <img src={image} alt="" />
        </div>
        <div className={styles.productName}>
            <span> Watch </span>
        </div>
    </Link>
);

export default CategoryItemMob;
