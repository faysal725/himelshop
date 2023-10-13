import React from 'react';
import SwiperCore, { Navigation, Pagination } from 'swiper/core';
import { Swiper, SwiperSlide } from 'swiper/react';
import ProductWithReview from '../../Common/Product/ProductWithReview/ProductWithReview';
import Title from '../../Title/Title';
import './ProductSlider.scss';

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

const ProductSlider = ({ products, title }) => (
    <div className="mt-3 recommendWrapper">
        <div className="container bg-white p-4">
            <Title title={title} />
            <Swiper
                slidesPerView={1}
                slidesPerGroup={3}
                spaceBetween={10}
                navigation
                loop
                breakpoints={{
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 15,
                    },
                    992: {
                        slidesPerView: 6,
                        spaceBetween: 10,
                    },
                    1200: {
                        slidesPerView: 7,
                        spaceBetween: 10,
                    },
                }}
                className="mySwiper"
            >
                {products.map((product) => (
                    <SwiperSlide key={product.id}>
                        <ProductWithReview product={product} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    </div>
);

export default ProductSlider;
