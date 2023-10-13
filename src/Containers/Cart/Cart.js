import React from 'react';
import Footer from '../../Components/Footer/Footer';
import CartHeaderBottom from '../../Components/Header/CartHeader/CartHeaderBottom';
import CartHeaderMob from '../../Components/Header/CartHeader/CartHeaderMob';
import Header from '../../Components/Header/Header';
import { useSizeContext } from '../../contexts/SizeContextProvider';
import './Cart.scss';

const ShoppingCart = React.lazy(() => import('./CartDesktop/ShoppingCart'));
const ShoppingCartMobile = React.lazy(() => import('./CartMobile/CartMobile'));

const Cart = () => {
    const { isMobile, isDesktop } = useSizeContext();
    return (
        <>
            {isDesktop && <Header />}
            {isMobile && <CartHeaderMob />}
            {isDesktop && (
                <React.Suspense fallback={<h6> loading... </h6>}>
                    <ShoppingCart />
                </React.Suspense>
            )}
            {isMobile && (
                <React.Suspense fallback={<h6> loading... </h6>}>
                    <ShoppingCartMobile />
                </React.Suspense>
            )}
            {isDesktop && <Footer />}
            {isMobile && <CartHeaderBottom />}
        </>
    );
};

export default Cart;
