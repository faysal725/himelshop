import Footer from '../../../Components/Footer/Footer';
import FooterMob from '../../../Components/Footer/FooterMob';
import Header from '../../../Components/Header/Header';
import HeaderBottom from '../../../Components/Header/HeaderBottom';
import ProductDetailsHeader from '../../../Components/Header/MobProductDHeader/ProductDetailsHeader';
import { useSizeContext } from '../../../contexts/SizeContextProvider';
import './PaymentPage.scss';

const PaymentGuidePage = () => {
    const { isMobile, isDesktop } = useSizeContext();
    return (
        <>
            {isDesktop && <Header />}
            {isMobile && <ProductDetailsHeader />}
            <div className="payment-page">
                <div className="section-img">
                    <img
                        src="https://laz-img-cdn.alicdn.com/tfs/TB1Tnyiw5_1gK0jSZFqwu3paXXa.png#width=1920&height=385"
                        className="img-fluid"
                        alt=""
                    />
                </div>
                <div className="container">
                    <div className="inner-content py-4">
                        <h3>Disclaimer</h3>
                        <p className="text-center">
                            Dear customer, Himel Shop will never contact you for asking your
                            personal account information. In order to prevent misuse of your Himel
                            Shop account, please do not share your account ID, email, password or
                            OTP (One Time Password) with anyone.
                        </p>
                    </div>
                    <div className="img-wrapper">
                        <img
                            src="https://laz-img-cdn.alicdn.com/tfs/TB1zi13wW61gK0jSZFlwu0DKFXa.png#width=1188&height=500_2200x2200q75.jpg_.webp"
                            alt=""
                            className="img-fluid"
                        />
                    </div>
                    <div className="img-wrapper">
                        <img
                            src="https://laz-img-cdn.alicdn.com/tfs/TB1zi13wW61gK0jSZFlwu0DKFXa.png#width=1188&height=500_2200x2200q75.jpg_.webp"
                            alt=""
                            className="img-fluid"
                        />
                    </div>
                </div>
            </div>
            {isDesktop && <Footer />}
            {isMobile && <FooterMob />}
            {isMobile && <HeaderBottom />}
        </>
    );
};

export default PaymentGuidePage;
