import React from 'react';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import ProductDetailsHeader from '../../Components/Header/MobProductDHeader/ProductDetailsHeader';
import { useSizeContext } from '../../contexts/SizeContextProvider';
import PaymentMobile from './PaymentMobile/PaymentMobile';

const Payment = React.lazy(() => import('./Payment'));

const PaymentPage = () => {
    const { isMobile, isDesktop } = useSizeContext();

    return (
        <>
            {isDesktop && <Header />}
            {isMobile && <ProductDetailsHeader />}

            {isDesktop && (
                <React.Suspense fallback="Loading...">
                    <Payment />
                </React.Suspense>
            )}
            {isMobile && (
                <React.Suspense fallback="Loading...">
                    <PaymentMobile />
                </React.Suspense>
            )}
            {isDesktop && <Footer />}
        </>
    );
};

export default PaymentPage;
