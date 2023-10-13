import React from 'react';
import { Link } from 'react-router-dom';
import SwiperCore, { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/core';
import { Swiper, SwiperSlide } from 'swiper/react';
import image1 from '../../../assets/images/Slider/1.jpg';
import image2 from '../../../assets/images/Slider/2.jpg';
import image3 from '../../../assets/images/Slider/3.jpg';
import './Slider.scss';

// install Swiper modules
SwiperCore.use([EffectFade, Pagination, Navigation, Autoplay]);

// Home slider

export default function Slider({ backgroundColorHandler }) {
    return (
        <div className="headerSliderContainer">
            <Swiper
                navigation
                loop
                autoplay={{ delay: 3000 }}
                pagination={{
                    clickable: true,
                }}
                onSlideChange={backgroundColorHandler}
                effect="fade"
                className="mySwiper"
            >
                <SwiperSlide>
                    <Link to="/">
                        <img src={image1} className="img-fluid" alt="" />
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to="/">
                        <img src={image2} className="img-fluid" alt="" />
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to="/">
                        <img src={image3} className="img-fluid" alt="" />
                    </Link>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}
