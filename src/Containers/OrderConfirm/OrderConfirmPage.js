import React from 'react';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import ProductDetailsHeader from '../../Components/Header/MobProductDHeader/ProductDetailsHeader';
import { useSizeContext } from '../../contexts/SizeContextProvider';
import OrderConfirm from './OrderConfirm';
import './OrderConfirm.scss';

const OrderConfirmPage = () => {
    const { isMobile, isDesktop } = useSizeContext();
    return (
        <>
            {isDesktop && <Header />}
            {isMobile && <ProductDetailsHeader />}
            <OrderConfirm />
            {isDesktop && <Footer />}
        </>
    );
};

export default OrderConfirmPage;
