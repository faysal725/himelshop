import React from 'react';
import SwiperCore, { Navigation, Pagination } from 'swiper/core';
import { Swiper, SwiperSlide } from 'swiper/react';
import image from '../../../../assets/images/mobile.webp';
import './Slider.scss';

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);
const Slider = () => {
    return (
        <div className="productSlider">
            <Swiper
                slidesPerView={1}
                centeredSlides
                spaceBetween={30}
                pagination={{
                    type: 'fraction',
                }}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={image} className="img-fluid" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={image} className="img-fluid" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={image} className="img-fluid" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={image} className="img-fluid" alt="" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;
