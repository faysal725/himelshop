/* eslint-disable arrow-body-style */
import React from 'react';
import { Link } from 'react-router-dom';
import Rating from '../../Rating/Rating';
import styles from './ProductList.module.scss';

const ProductList = ({ product }) => {
    return (
        <Link to="/" className={styles.productList}>
            <div className="row">
                <div className="col-4">
                    <div className={styles.productListImage}>
                        <img src={product.image} alt="" className="img-fluid" />
                    </div>
                </div>
                <div className="col-8">
                    <div className={styles.productListInfo}>
                        <p className={styles.name}>
                            <span className={styles.fsLabel}>Flash Deals</span>
                            {product.name}
                        </p>
                        <Rating height="13px" width="70px" rating={90} fontSize="14" />
                        <h2>৳{product.price}</h2>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default ProductList;
