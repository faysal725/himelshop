import SwiperCore, { Navigation, Pagination } from 'swiper/core';
import { Swiper, SwiperSlide } from 'swiper/react';
import BrandItem from '../../Components/BrandItem/BrandItem';
import Title from '../../Components/Title/Title';
import './TopBrand.scss';

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

const TopBrand = () => (
    <div className="container mb-4">
        <Title title="Top Brands" link="" color="#ef9721" />
        <div className="topBrandWrapper">
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                navigation
                loop
                breakpoints={{
                    0: {
                        slidesPerView: 4,
                        spaceBetween: 6,
                    },
                    340: {
                        slidesPerView: 4,
                        spaceBetween: 6,
                    },
                    576: {
                        slidesPerView: 4,
                        spaceBetween: 6,
                    },
                    768: {
                        slidesPerView: 6,
                        spaceBetween: 15,
                    },
                    992: {
                        slidesPerView: 7,
                        spaceBetween: 10,
                    },
                    1200: {
                        slidesPerView: 8,
                        spaceBetween: 10,
                    },
                }}
                className="mySwiper"
            >
                <SwiperSlide>
                    <BrandItem />
                </SwiperSlide>
                <SwiperSlide>
                    <BrandItem />
                </SwiperSlide>
                <SwiperSlide>
                    <BrandItem />
                </SwiperSlide>
                <SwiperSlide>
                    <BrandItem />
                </SwiperSlide>
                <SwiperSlide>
                    <BrandItem />
                </SwiperSlide>
                <SwiperSlide>
                    <BrandItem />
                </SwiperSlide>
                <SwiperSlide>
                    <BrandItem />
                </SwiperSlide>
                <SwiperSlide>
                    <BrandItem />
                </SwiperSlide>
                <SwiperSlide>
                    <BrandItem />
                </SwiperSlide>
                <SwiperSlide>
                    <BrandItem />
                </SwiperSlide>
                <SwiperSlide>
                    <BrandItem />
                </SwiperSlide>
                <SwiperSlide>
                    <BrandItem />
                </SwiperSlide>
                <SwiperSlide>
                    <BrandItem />
                </SwiperSlide>
                <SwiperSlide>
                    <BrandItem />
                </SwiperSlide>
            </Swiper>
        </div>
    </div>
);
export default TopBrand;
