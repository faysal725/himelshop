import { Link } from 'react-router-dom';
import Footer from '../../../Components/Footer/Footer';
import FooterMob from '../../../Components/Footer/FooterMob';
import Header from '../../../Components/Header/Header';
import HeaderBottom from '../../../Components/Header/HeaderBottom';
import ProductDetailsHeader from '../../../Components/Header/MobProductDHeader/ProductDetailsHeader';
import { useSizeContext } from '../../../contexts/SizeContextProvider';
import './SiteMap.scss';

const SiteMap = () => {
    const { isMobile, isDesktop } = useSizeContext();
    return (
        <>
            {isDesktop && <Header />}
            {isMobile && <ProductDetailsHeader />}

            <div className="sitemap-wrap">
                <div className="container">
                    {Array(3)
                        .fill(0)
                        .map((item, index) => (
                            <div className="row" key={index}>
                                <div className="sitemap">
                                    <dl>
                                        <dt>
                                            <Link to="/">Lights & Lighting</Link>
                                            <span>:</span>
                                            <Link className="red-text" to="/">
                                                Top Searches
                                            </Link>
                                        </dt>
                                    </dl>
                                </div>
                                <div className="col-md-4">
                                    <div className="sitemap">
                                        <dl>
                                            <dd>
                                                <Link to="/"> LED Bulbs & Tubes : </Link>
                                                <Link className="red-text" to="/">
                                                    New Arrivals
                                                </Link>
                                            </dd>
                                            <dd>
                                                <Link to="/">LED Strip : </Link>
                                                <Link className="red-text" to="/">
                                                    New Arrivals
                                                </Link>
                                            </dd>
                                            <dd>
                                                <Link to="/"> Indoor Lighting : </Link>
                                                <Link className="red-text" to="/">
                                                    New Arrivals
                                                </Link>
                                            </dd>
                                        </dl>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="sitemap">
                                        <dl>
                                            <dd>
                                                <Link to="/"> Flashlight : </Link>
                                                <Link className="red-text" to="/">
                                                    New Arrivals
                                                </Link>
                                            </dd>
                                            <dd>
                                                <Link to="/">Lighting Accessories : </Link>
                                                <Link className="red-text" to="/">
                                                    New Arrivals
                                                </Link>
                                            </dd>
                                            <dd>
                                                <Link to="/"> Smart Light : </Link>
                                                <Link className="red-text" to="/">
                                                    New Arrivals
                                                </Link>
                                            </dd>
                                        </dl>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="sitemap">
                                        <dl>
                                            <dd>
                                                <Link to="/"> Outdoor Lighting : </Link>
                                                <Link className="red-text" to="/">
                                                    New Arrivals
                                                </Link>
                                            </dd>
                                            <dd>
                                                <Link to="/">Lasers : </Link>
                                                <Link className="red-text" to="/">
                                                    New Arrivals
                                                </Link>
                                            </dd>
                                            <dd>
                                                <Link to="/"> Commercial Lighting : </Link>
                                                <Link className="red-text" to="/">
                                                    New Arrivals
                                                </Link>
                                            </dd>
                                        </dl>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
            {isDesktop && <Footer />}
            {isMobile && <FooterMob />}
            {isMobile && <HeaderBottom />}
        </>
    );
};

export default SiteMap;
