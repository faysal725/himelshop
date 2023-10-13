import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../../../../assets/images/New/2.jpg';
import Title from '../../../../../Components/Title/Title';
import styles from './RecentProductView.module.scss';

const RecentProductView = () => (
    <div className="d-md-none">
        <div className=" bg-white py-2 my-3 rounded">
            <Title title="Recent View" link="/see" color="red" />
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
        </div>
    </div>
);

export default RecentProductView;
