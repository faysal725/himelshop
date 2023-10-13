import { BiSupport, GrDeliver, RiSecurePaymentFill } from 'react-icons/all';
import { FaAward, FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styles from './Footer.module.scss';

const footerTopData = [
    {
        id: 1,
        Icon: FaAward,
        title: 'Quality and Saving',
        desc: 'Comprehensive quality control and affordable prices',
    },
    {
        id: 2,
        Icon: FaHome,
        title: 'Wholesale & Agent',
        desc: '37 overseas wholes sales',
    },
    {
        id: 3,
        Icon: GrDeliver,
        title: 'Fast and convenient logistics',
        desc: 'Fast and convenient door to door delivery',
    },
    {
        id: 4,
        Icon: RiSecurePaymentFill,
        title: 'Payment Security',
        desc: 'Comprehensive quality control and affordable prices',
    },
    {
        id: 5,
        Icon: BiSupport,
        title: 'Professional service and product warranty',
        desc: '24/7 Customer Service',
    },
];

const FooterTop = () => (
    <div className="container">
        <div className={styles.footerTop}>
            {footerTopData.map((Item) => (
                <div className={styles.footerTopItem} key={Item.id}>
                    <Item.Icon className={styles.footerTopIcon} />
                    <h6>
                        <Link to="/">{Item.title}</Link>
                    </h6>
                    <span> {Item.desc} </span>
                </div>
            ))}
        </div>
    </div>
);

export default FooterTop;
