import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import image from '../../assets/images/flash/1.jpg';
import image2 from '../../assets/images/flash/2.jpg';
import image3 from '../../assets/images/flash/3.jpg';
import ProductsContainer from '../../Components/ProductsContainer/ProductsContainer';
import styles from './FlashDealsMob.module.scss';

const FlashDealsMob = () => (
    <div className="d-md-none" style={{ marginTop: '-20px' }}>
        <ProductsContainer>
            <div className={styles.flashTitle}>
                <div className={styles.flashTitleName}>
                    <h6>Flash Deals</h6>
                    <p>Hot Now at up to 90% off</p>
                </div>
                <div className={styles.flashTitleTime}>
                    <div className={styles.flashTitleTimeItem}> 20 </div>:
                    <div className={styles.flashTitleTimeItem}> 00 </div>:
                    <div className={styles.flashTitleTimeItem}> 31 </div>
                    <FiChevronRight className={styles.flashRightArrow} />
                </div>
            </div>
            <div className="row g-2 g-sm-3">
                <div className="col-4">
                    <div className={styles.flashItem}>
                        <Link to="/">
                            <div className={styles.flashImage}>
                                <img src={image} alt="" />
                            </div>
                            <div className={styles.flashContent}>
                                <div className={styles.flashPrice}>
                                    <div className={styles.price}>৳245 </div>
                                    <div className={styles.previousPrice}>৳50 </div>
                                    <div className={styles.off}>15% OFF</div>
                                </div>
                                <div className={`${styles.soldWrapper}`}>
                                    <div className={styles.sold}> 2102 Sold </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="col-4">
                    <div className={styles.flashItem}>
                        <Link to="/">
                            <div className={styles.flashImage}>
                                <img src={image2} alt="" />
                            </div>
                            <div className={styles.flashContent}>
                                <div className={styles.flashPrice}>
                                    <div className={styles.price}>৳245 </div>
                                    <div className={styles.previousPrice}>৳50 </div>
                                    <div className={styles.off}>15% OFF</div>
                                </div>
                                <div className={`${styles.soldWrapper}`}>
                                    <div className={styles.sold}> 2102 Sold </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="col-4">
                    <div className={styles.flashItem}>
                        <Link to="/">
                            <div className={styles.flashImage}>
                                <img src={image3} alt="" />
                            </div>
                            <div className={styles.flashContent}>
                                <div className={styles.flashPrice}>
                                    <div className={styles.price}>৳245 </div>
                                    <div className={styles.previousPrice}>৳50 </div>
                                    <div className={styles.off}>15% OFF</div>
                                </div>
                                <div className={`${styles.soldWrapper}`}>
                                    <div className={styles.sold}> 2102 Sold </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </ProductsContainer>
    </div>
);

export default FlashDealsMob;
