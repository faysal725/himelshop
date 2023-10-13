/* eslint-disable react/jsx-props-no-spreading */
import ReactImageZoom from 'react-image-zoom';
import StickyBox from 'react-sticky-box';
import SwiperCore, { Navigation, Pagination } from 'swiper/core';
import { Swiper, SwiperSlide } from 'swiper/react';
import cloth1 from '../../../assets/images/cloth1.webp';
import cloth2 from '../../../assets/images/cloth2.webp';
import cloth3 from '../../../assets/images/colth3.webp';
import Breadcrumb from '../../../Components/Breadcrumb/Breadcrumb';
import ProductSlider from '../../../Components/Custom/ProductSlider/ProductSlider';
import CustomerQA from './CustomerQA/CustomerQA';
import CustomerReviews from './CustomersReview/CustomerReviews';
import Description from './Description/Description';
import DeskTopNavs from './DeskTopNavs/DeskTopNavs';
import './ProductDetailsDesktop.scss';
import ProductInfo from './ProductInfo/ProductInfo';
import Specification from './Specification/Specification';

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

const ProductDetailsDesktop = ({ products }) => {
    const links = [
        { href: '/', name: 'Home' },
        { href: '/category', name: "Men's Clothing" },
        { href: '/', name: 'Tops' },
        { href: '/', name: 'Golf Shirts' },
    ];
    const props = { width: 350, zoomPosition: 'original' };

    return (
        <div className="productDetails d-none d-md-block">
            <div className="productInfo">
                <div className="container">
                    <div className="py-2">
                        <Breadcrumb links={links} />
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="image">
                                <div className="image__LargeImg ">
                                    <ReactImageZoom
                                        {...props}
                                        img="https://imgaz3.staticbg.com/thumb/large/oaupload/banggood/images/93/C2/46b0f17d-89ef-4926-afa6-14135454c411.jpg.webp"
                                    />
                                </div>
                            </div>
                            <div className="">
                                <div className="productZoomSlider">
                                    <Swiper
                                        slidesPerView={1}
                                        spaceBetween={10}
                                        navigation
                                        breakpoints={{
                                            768: {
                                                slidesPerView: 3,
                                                spaceBetween: 15,
                                            },
                                            992: {
                                                slidesPerView: 4,
                                                spaceBetween: 10,
                                            },
                                            1200: {
                                                slidesPerView: 4,
                                                spaceBetween: 10,
                                            },
                                        }}
                                        className="mySwiper"
                                    >
                                        <SwiperSlide>
                                            <img className="sliderImg" src={cloth1} alt="" />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <img className="sliderImg" src={cloth2} alt="" />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <img className="sliderImg" src={cloth3} alt="" />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <img className="sliderImg" src={cloth3} alt="" />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <img className="sliderImg" src={cloth3} alt="" />
                                        </SwiperSlide>
                                    </Swiper>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <ProductInfo />
                        </div>
                    </div>
                </div>
            </div>

            <ProductSlider products={products} title="You May Also Like" />

            <StickyBox
                offsetTop={0}
                offsetBottom={10}
                onChangeMode={(oldMode, newMode) => {
                    console.log(oldMode, newMode);
                }}
            >
                <DeskTopNavs />
            </StickyBox>

            <div
                data-bs-spy="scroll"
                data-bs-target="#DesktopTabs"
                data-bs-offset="0"
                className="scrollspy-example"
                tabIndex="0"
            >
                <Description />
                <Specification />
                <ProductSlider
                    products={products}
                    title="Customers who view this item also bought"
                />
                <CustomerReviews />
                <CustomerQA />
            </div>
        </div>
    );
};

export default ProductDetailsDesktop;
