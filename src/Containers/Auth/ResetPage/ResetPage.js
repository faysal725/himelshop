import React from 'react';
import Footer from '../../../Components/Footer/Footer';
import Header from '../../../Components/Header/Header';
import ProductDetailsHeader from '../../../Components/Header/MobProductDHeader/ProductDetailsHeader';
import { useSizeContext } from '../../../contexts/SizeContextProvider';

const Reset = React.lazy(() => import('./Reset'));

const ResetPage = () => {
    const { isDesktop, isMobile } = useSizeContext();
    return (
        <>
            {isDesktop && <Header />}
            {isMobile && <ProductDetailsHeader />}
            <React.Suspense fallback="loading">
                <Reset />
            </React.Suspense>
            {isDesktop && <Footer />}
        </>
    );
};

export default ResetPage;