import React from 'react';
import FooterMob from '../../Components/Footer/FooterMob';
import Header from '../../Components/Header/Header';
import HeaderBottom from '../../Components/Header/HeaderBottom';
import HeaderMob from '../../Components/Header/HeaderMob';
import { useSizeContext } from '../../contexts/SizeContextProvider';
import HomeSkeleton from '../../Skeleton/Home/HomeSkeleton';

const Home = React.lazy(() => import('./Home'));
const Footer = React.lazy(() => import('../../Components/Footer/Footer'));

const HomePage = () => {
    const { isMobile, isDesktop } = useSizeContext();

    return (
        <>
            {isDesktop && <Header />}
            {isMobile && <HeaderMob />}
            <React.Suspense fallback={<HomeSkeleton />}>
                <Home />
            </React.Suspense>
            {isDesktop && (
                <React.Suspense fallback="something...">
                    <Footer />
                </React.Suspense>
            )}
            {isMobile && <FooterMob />}
            {isMobile && <HeaderBottom />}
        </>
    );
};

export default HomePage;
