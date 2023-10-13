import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../assets/images/New/2.jpg';
import ProductsContainer from '../../Components/ProductsContainer/ProductsContainer';
import Title from '../../Components/Title/Title';
import styles from './NewUserBenefit.module.scss';

const NewUserBenefit = () => (
    <div className="d-md-none">
        <ProductsContainer>
            <Title title="New User Benefits" link="/see" color="red" />
            <div className="row g-2 g-sm-3">
                <div className="col-4">
                    <Link to="/" className={styles.product}>
                        <div className={styles.productImg}>
                            <img src={image} alt="" />
                            <div className={`${styles.productPrice} d-md-none`}>
                                <div className={styles.price}>৳ 120 </div>
                                <div className={styles.previousPrice}>৳ 220</div>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="col-4">
                    <Link to="/" className={styles.product}>
                        <div className={styles.productImg}>
                            <img src={image} alt="" />
                            <div className={`${styles.productPrice} d-md-none`}>
                                <div className={styles.price}>৳ 120 </div>
                                <div className={styles.previousPrice}>৳ 220</div>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="col-4">
                    <Link to="/" className={styles.coupon}>
                        <p>
                            <strong>৳25.00</strong>Allowance
                        </p>
                        <span>Get</span>
                    </Link>
                </div>
            </div>
        </ProductsContainer>
    </div>
);

export default NewUserBenefit;
