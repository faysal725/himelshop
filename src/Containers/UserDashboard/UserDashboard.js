import React from 'react';
import Footer from '../../Components/Footer/Footer';
import FooterMob from '../../Components/Footer/FooterMob';
import Header from '../../Components/Header/Header';
import HeaderBottom from '../../Components/Header/HeaderBottom';
import ProductDetailsHeader from '../../Components/Header/MobProductDHeader/ProductDetailsHeader';
import { useSizeContext } from '../../contexts/SizeContextProvider';
import Sidebar from './Sidebar/Sidebar';
import './UserDashboard.scss';
import UserRoutes from './UserRoutes';

const UserDashboard = () => {
    const { isMobile, isDesktop } = useSizeContext();
    return (
        <>
            {isDesktop && <Header />}
            {isMobile && <ProductDetailsHeader />}
            <div className="container mt-4">
                <div className="row g-3">
                    <Sidebar />
                    <UserRoutes />
                </div>
            </div>
            {isDesktop && <Footer />}
            {isMobile && <FooterMob />}
            {isMobile && <HeaderBottom />}
        </>
    );
};

export default UserDashboard;
