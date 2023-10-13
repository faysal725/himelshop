import { FaAngleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import image1 from '../../assets/images/Preorder/1.jpg';
import image2 from '../../assets/images/Preorder/2.jpg';
import image3 from '../../assets/images/Preorder/3.jpg';
import image4 from '../../assets/images/Preorder/4.jpg';
import styles from './Banner.module.scss';

const products = [
    {
        id: 1,
        image: image1,
        price: 1850,
        previousPrice: 2300,
    },
    {
        id: 2,
        image: image2,
        price: 1320,
        previousPrice: 1600,
    },
    {
        id: 3,
        image: image3,
        price: 1250,
        previousPrice: 1200,
    },
    {
        id: 4,
        image: image4,
        price: 1850,
        previousPrice: 2300,
    },
];

const Banner = () => (
    <div className={styles.Banner}>
        <div className={styles.title}>
            <h4>NEW USER BENEFITS</h4>
        </div>
        <div className={styles.info}>
            <a href="/">
                <div className={styles.text}>
                    <span className="notranslate">
                        Free Gifts &amp;
                        <br />
                        US$2
                    </span>
                    <span>Allowance</span>
                </div>
                <FaAngleRight className={styles.icon} />
            </a>
        </div>
        <div className={styles.pickTitle}>Pick for you</div>
        <div className="row g-2">
            {products.map((product) => (
                <div className="col-md-6" key={product.id}>
                    <div className={styles.product}>
                        <Link to="/" className={styles.productImg}>
                            <img src={product.image} alt="" />
                        </Link>
                        <span className={styles.price}>US$0.00</span>
                    </div>
                </div>
            ))}
        </div>
        <div className={styles.more}>
            <a href="/">
                More Benefits
                <FaAngleRight />
            </a>
        </div>
    </div>
);

export default Banner;
