import { AiFillAndroid, AiFillApple, AiOutlineCaretDown, AiOutlineScan } from 'react-icons/ai';
import {
    FaFacebookF,
    FaInstagram,
    FaPinterestP,
    FaReddit,
    FaTwitter,
    // eslint-disable-next-line prettier/prettier
    FaYoutube
} from 'react-icons/fa';
import { FiSend } from 'react-icons/fi';
import { SiTiktok } from 'react-icons/si';
import { Link } from 'react-router-dom';
import qrCodeImage from '../../assets/images/payment/download.png';
import eCabImage from '../../assets/images/payment/ecab.png';
import paymentWith from '../../assets/images/payment/sllcommerce.png';
import styles from './Footer.module.scss';

const Footer = () => (
    <>
        <div className={`${styles.footer}`}>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className={styles.footerLinks}>
                            <div className={styles.footerTitle}>Get to Know Us</div>
                            <Link to="/about-us" className={styles.footerLinkItem}>
                                About HimelShop
                            </Link>
                            <Link to="/payment-guide" className={styles.footerLinkItem}>
                                Digital Payments
                            </Link>
                            <Link to="/careers" className={styles.footerLinkItem}>
                                Careers
                            </Link>
                            <Link to="/blogs" className={styles.footerLinkItem}>
                                Blog
                            </Link>
                            <Link to="/privacy-policy" className={styles.footerLinkItem}>
                                Privacy Policy
                            </Link>
                            <Link to="/site-map" className={styles.footerLinkItem}>
                                Site Map
                            </Link>
                            <Link to="/main-help-center" className={styles.footerLinkItem}>
                                Help Center
                            </Link>
                        </div>
                        <div className={styles.footerLinks}>
                            <div className={styles.footerTitle}>Member Of</div>
                            <img className={styles.eCab} src={eCabImage} alt="" />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className={styles.footerLinks}>
                            <div className={styles.footerTitle}>Customer Care</div>
                            <Link to="/help-center" className={styles.footerLinkItem}>
                                Help Center
                            </Link>
                            <Link to="/help-center" className={styles.footerLinkItem}>
                                How to Buy
                            </Link>
                            <Link to="/return-refund" className={styles.footerLinkItem}>
                                Returns & Refunds
                            </Link>
                            <Link to="/term-condition" className={styles.footerLinkItem}>
                                Terms & Conditions
                            </Link>
                            <Link to="/contact-us" className={styles.footerLinkItem}>
                                Contact Us
                            </Link>
                        </div>
                        <div className={styles.footerLinks}>
                            <div className={styles.footerTitle}>Partnership Programs</div>
                            <Link to="/help-center" className={styles.footerLinkItem}>
                                Sell on Himelshop
                            </Link>
                            <Link to="/affiliate" className={styles.footerLinkItem}>
                                Affiliate Program
                            </Link>
                            <Link to="/wholesale" className={styles.footerLinkItem}>
                                Wholesale Program
                            </Link>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className={styles.footerLinks}>
                            <div className={styles.footerTitle}>Download App</div>
                            <div className={styles.footerDwn}>
                                <Link to="/" className={styles.footerDwnItem}>
                                    <AiFillApple />
                                </Link>
                                <Link to="/" className={styles.footerDwnItem}>
                                    <AiFillAndroid />
                                </Link>
                                <div className={styles.qrCode}>
                                    <div className={styles.qrCodeWrap}>
                                        <AiOutlineScan className={styles.scan} />
                                        <span>QR Code</span>
                                        <AiOutlineCaretDown className={styles.downArrow} />
                                    </div>
                                    <div className={styles.qrCodeImage}>
                                        <img src={qrCodeImage} alt="" />
                                        <p>Scan the QR code to download</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.footerLinks}>
                            <div className={styles.footerTitle}>Follow Us</div>
                            <div className={styles.socialIcons}>
                                <Link to="/" className={styles.socialItem}>
                                    <FaFacebookF />
                                </Link>
                                <Link to="/" className={styles.socialItem}>
                                    <FaTwitter />
                                </Link>
                                <Link to="/" className={styles.socialItem}>
                                    <FaInstagram />
                                </Link>
                                <Link to="/" className={styles.socialItem}>
                                    <FaYoutube />
                                </Link>
                                <Link to="/" className={styles.socialItem}>
                                    <FaPinterestP />
                                </Link>
                                <Link to="/" className={styles.socialItem}>
                                    <FaReddit />
                                </Link>
                                <Link to="/" className={styles.socialItem}>
                                    <SiTiktok />
                                </Link>
                            </div>
                        </div>

                        <div className={styles.footerLinks}>
                            <div className={styles.footerTitle}>Subscribe</div>
                            <span className={styles.subs}>
                                By subscribing you agree to receive email from us. Please read our{' '}
                                <Link to="/privacy-policy">Privacy Policy</Link>
                            </span>
                            <form action="" className={styles.emailSubs}>
                                <input type="text" placeholder="Email Address" />
                                <button type="submit">
                                    <FiSend />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                <div className={`${styles.paymentWith}`}>
                    <img className="img-fluid" src={paymentWith} alt="" />
                </div>
            </div>
        </div>
        <div className={`${styles.copyRightSection}`}>
            <div className="container">
                <div className={styles.copyRight}>
                    <p> &copy; Copyright- Himel Shop 2010 || Powered by Himeltech.com</p>
                    <p>
                        Developed by <a href="https://www.techdynobd.com/"> Techdyno BD </a>
                    </p>
                </div>
            </div>
        </div>
    </>
);

export default Footer;
