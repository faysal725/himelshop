import React, { Suspense } from 'react';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import ProductDetailsHeader from '../../Components/Header/MobProductDHeader/ProductDetailsHeader';
import { useSizeContext } from '../../contexts/SizeContextProvider';
import './CheckoutPage.scss';

const Checkout = React.lazy(() => import('./Checkout'));

const CheckoutPage = () => {
    const { isMobile, isDesktop } = useSizeContext();
    return (
        <>
            {isDesktop && <Header />}
            {isMobile && <ProductDetailsHeader />}
            <Suspense fallback="loading...">
                <Checkout />
            </Suspense>

            {isDesktop && <Footer />}
        </>
    );
};

export default CheckoutPage;
