import { FaFax, FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Footer from '../../../Components/Footer/Footer';
import FooterMob from '../../../Components/Footer/FooterMob';
import FooterTop from '../../../Components/Footer/FooterTop';
import Header from '../../../Components/Header/Header';
import HeaderBottom from '../../../Components/Header/HeaderBottom';
import ProductDetailsHeader from '../../../Components/Header/MobProductDHeader/ProductDetailsHeader';
import { useSizeContext } from '../../../contexts/SizeContextProvider';
import './About.scss';

const About = () => {
    const { isMobile, isDesktop } = useSizeContext();
    return (
        <>
            {isDesktop && <Header />}
            {isMobile && <ProductDetailsHeader />}

            <div className="about-us">
                <div className="about-topmt">
                    <div className="animated slide-top">
                        <p className="title">About HimelShop</p>
                    </div>
                </div>
                <div className="about-logistics about-bg">
                    <div className="container">
                        <h3 className="about-title">Global Leading Online Shop</h3>
                        <div className="decs">
                            <p>
                                Founded in 2006 in Guangzhou, Banggood is a global leading
                                direct-to-consumer online retailer, providing well-selected products
                                that are highly cost-effective to 66 million+ registered users, with
                                a global reach in North America, Europe, Asian Pacific, South
                                America, and Middle East. In 2021, Banggood APP emerges as one of
                                the Most Downloaded Shopping App in Europe according to App Annie,
                                an authoritative app analytics platform.
                            </p>
                            <p>
                                Growing with over 100,000 reliable suppliers, Banggood now offers up
                                to 30 categories and 1,000,000 superior-quality products from
                                consumer electronics, home appliance, tools, sports, to clothing.
                            </p>
                            <p>
                                Moreover, Banggood devotes to improving customer service, including
                                establishing a logistics and fulfillment system, to provide a 7/24
                                professional service to customers.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="about-logistics about-bg2">
                    <div className="container">
                        <h3 className="about-title text-white">Our History</h3>
                        <VerticalTimeline animate className="mt-4">
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                contentStyle={{
                                    background: '#fff',
                                    color: '#000',
                                }}
                                contentArrowStyle={{
                                    borderRight: '7px solid  #fff',
                                }}
                                date="2011 - present"
                                iconStyle={{
                                    background: 'rgb(33, 150, 243)',
                                    color: '#fff',
                                }}
                                icon={<FaFax />}
                            >
                                <h3 className="vertical-timeline-element-title">
                                    Creative Director
                                </h3>
                                <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
                                <p>
                                    Creative Direction, User Experience, Visual Design, Project
                                    Management, Team Leading
                                </p>
                            </VerticalTimelineElement>
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                date="2010 - 2011"
                                iconStyle={{
                                    background: 'rgb(33, 150, 243)',
                                    color: '#fff',
                                }}
                                icon={<FaFax />}
                            >
                                <h3 className="vertical-timeline-element-title">Art Director</h3>
                                <h4 className="vertical-timeline-element-subtitle">
                                    San Francisco, CA
                                </h4>
                                <p>
                                    Creative Direction, User Experience, Visual Design, SEO, Online
                                    Marketing
                                </p>
                            </VerticalTimelineElement>
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                date="2008 - 2010"
                                iconStyle={{
                                    background: 'rgb(33, 150, 243)',
                                    color: '#fff',
                                }}
                                icon={<FaFax />}
                            >
                                <h3 className="vertical-timeline-element-title">Web Designer</h3>
                                <h4 className="vertical-timeline-element-subtitle">
                                    Los Angeles, CA
                                </h4>
                                <p>User Experience, Visual Design</p>
                            </VerticalTimelineElement>
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                date="2006 - 2008"
                                iconStyle={{
                                    background: 'rgb(33, 150, 243)',
                                    color: '#fff',
                                }}
                                icon={<FaFax />}
                            >
                                <h3 className="vertical-timeline-element-title">Web Designer</h3>
                                <h4 className="vertical-timeline-element-subtitle">
                                    San Francisco, CA
                                </h4>
                                <p>User Experience, Visual Design</p>
                            </VerticalTimelineElement>

                            <VerticalTimelineElement
                                iconStyle={{
                                    background: 'rgb(16, 204, 82)',
                                    color: '#fff',
                                }}
                                icon={<FaHeart />}
                            />
                        </VerticalTimeline>
                    </div>
                </div>
                <div className="about-logistics about-bg">
                    <div className="container">
                        <h3 className="about-title">Our Core Pillars</h3>
                        <div className="remove-border">
                            <FooterTop />
                        </div>
                    </div>
                </div>
                <div className="about-logistics">
                    <div className="container">
                        <h3 className="about-title">Meet Our Team</h3>
                        <div className="bg">
                            <div className="decs">
                                <ul className="left">
                                    <li>
                                        <p>
                                            <em>We are</em>
                                            <em>Himelshop</em>
                                        </p>
                                        <p className="bg-text">
                                            <em>We are</em>
                                            <em>Himelshop</em>
                                        </p>
                                    </li>
                                    <li>
                                        <Link className="text-white fs-4" to="/contact-us">
                                            Contact Us
                                        </Link>
                                    </li>
                                </ul>
                                <ul className="right" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {isDesktop && <Footer />}
            {isMobile && <FooterMob />}
            {isMobile && <HeaderBottom />}
        </>
    );
};

export default About;
