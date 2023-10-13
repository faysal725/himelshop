import React from 'react';
import Footer from '../../../Components/Footer/Footer';
import Header from '../../../Components/Header/Header';
import ProductDetailsHeader from '../../../Components/Header/MobProductDHeader/ProductDetailsHeader';
import { useSizeContext } from '../../../contexts/SizeContextProvider';

const SignUp = React.lazy(() => import('./SignUp'));

const SignUpPage = () => {
    const { isDesktop, isMobile } = useSizeContext();
    return (
        <>
            {isDesktop && <Header />}
            {isMobile && <ProductDetailsHeader />}
            <React.Suspense fallback="loading">
                <SignUp />
            </React.Suspense>
            {isDesktop && <Footer />}
        </>
    );
};

export default SignUpPage;
