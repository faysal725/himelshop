import React from 'react';
import Footer from '../../../Components/Footer/Footer';
import Header from '../../../Components/Header/Header';
import ProductDetailsHeader from '../../../Components/Header/MobProductDHeader/ProductDetailsHeader';
import { useSizeContext } from '../../../contexts/SizeContextProvider';

const Login = React.lazy(() => import('./Login'));

const LoginPage = () => {
    const { isDesktop, isMobile } = useSizeContext();
    return (
        <>
            {isDesktop && <Header />}
            {isMobile && <ProductDetailsHeader />}
            <React.Suspense fallback="login page Loading........">
                <Login />
            </React.Suspense>
            {isDesktop && <Footer />}
        </>
    );
};

export default LoginPage;
