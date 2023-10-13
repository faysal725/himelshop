import React from 'react';
import Footer from '../../Components/Footer/Footer';
import FooterMob from '../../Components/Footer/FooterMob';
import Header from '../../Components/Header/Header';
import ProductDetailsHeader from '../../Components/Header/MobProductDHeader/ProductDetailsHeader';
import ProductDetailsHeaderBottom from '../../Components/Header/MobProductDHeader/ProductDetailsHeaderBottom';
import { useSizeContext } from '../../contexts/SizeContextProvider';

const ProductDetails = React.lazy(() => import('./ProductDetails'));

const ProductDetailsPage = () => {
    const { isMobile, isDesktop } = useSizeContext();

    return (
        <>
            {isDesktop && <Header />}
            {isMobile && <ProductDetailsHeader />}
            <React.Suspense fallback="loading...">
                <ProductDetails />
            </React.Suspense>
            {isMobile && (
                <>
                    <FooterMob />
                    <ProductDetailsHeaderBottom />
                </>
            )}
            {isDesktop && <Footer />}
        </>
    );
};

export default ProductDetailsPage;
