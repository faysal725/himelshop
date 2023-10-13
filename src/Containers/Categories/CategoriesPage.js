import React from 'react';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import MobCategoryHeader from '../../Components/Header/MobCategoryHeader/MobCategoryHeader';
import { useSizeContext } from '../../contexts/SizeContextProvider';

const Categories = React.lazy(() => import('./Categories'));

const CategoriesPage = () => {
    const { isMobile, isDesktop } = useSizeContext();
    return (
        <>
            {isDesktop && <Header />}
            {isMobile && <MobCategoryHeader />}
            <React.Suspense fallback="Categories Loading...">
                <Categories />
            </React.Suspense>
            {isDesktop && <Footer />}
        </>
    );
};

export default CategoriesPage;
