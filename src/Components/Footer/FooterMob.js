import React from 'react';
import { BiUpArrowAlt } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import bkash from '../../assets/images/bkash.svg';
import master from '../../assets/images/master.jpg';
import nagad from '../../assets/images/nagad.jpg';
import image from '../../assets/images/rocket.png';
import visa from '../../assets/images/visa.png';
import styles from './Footer.module.scss';

const FooterMob = () => (
    <div className={`${styles.FooterMob} d-md-none`}>
        <div className="container">
            <div className={styles.backToTop}>
                <h6>
                    <BiUpArrowAlt className={styles.upArrow} />
                    Back To Top
                </h6>
            </div>
            <div className={styles.banks}>
                <div className={styles.banksImage}>
                    <img className="img-fluid" src={visa} alt="" />
                </div>
                <div className={styles.banksImage}>
                    <img className="img-fluid" src={master} alt="" />
                </div>
                <div className={styles.banksImage}>
                    <img className="img-fluid" src={bkash} alt="" />
                </div>
                <div className={styles.banksImage}>
                    <img className="img-fluid" src={image} alt="" />
                </div>
                <div className={styles.banksImage}>
                    <img className="img-fluid" src={nagad} alt="" />
                </div>
            </div>
            <div className={styles.footerMobLinks}>
                <Link to="/" className={styles.footerMobLinkItem}>
                    About Us
                </Link>
                <Link to="/" className={styles.footerMobLinkItem}>
                    Privacy Policy
                </Link>
                <Link to="/" className={styles.footerMobLinkItem}>
                    Term And Condition
                </Link>
            </div>
            <div className={styles.copyright}>
                Copyright &copy; 2010-{new Date().getFullYear()} Himel Shop All Rights Reserved
            </div>
        </div>
    </div>
);

export default FooterMob;
