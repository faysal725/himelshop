import React from 'react';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import HeaderBottom from '../../Components/Header/HeaderBottom';
import HeaderMob2 from '../../Components/Header/HeaderMob2';
import { useSizeContext } from '../../contexts/SizeContextProvider';

const MainCategories = React.lazy(() => import('./MainCategories'));

const MainCategoriesPage = () => {
    const { isMobile, isDesktop } = useSizeContext();
    return (
        <>
            {isDesktop && <Header />}
            {isMobile && <HeaderMob2 />}
            <React.Suspense fallback="loading... categories">
                <MainCategories />
            </React.Suspense>
            {isDesktop && <Footer />}
            {isMobile && <HeaderBottom />}
        </>
    );
};

export default MainCategoriesPage;
