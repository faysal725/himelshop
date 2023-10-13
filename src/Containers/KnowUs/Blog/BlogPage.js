import Footer from '../../../Components/Footer/Footer';
import FooterMob from '../../../Components/Footer/FooterMob';
import Header from '../../../Components/Header/Header';
import HeaderBottom from '../../../Components/Header/HeaderBottom';
import ProductDetailsHeader from '../../../Components/Header/MobProductDHeader/ProductDetailsHeader';
import { useSizeContext } from '../../../contexts/SizeContextProvider';
import Blogs from './Blogs';

const BlogPage = () => {
    const { isMobile, isDesktop } = useSizeContext();
    return (
        <>
            {isDesktop && <Header />}
            {isMobile && <ProductDetailsHeader />}
            <Blogs />
            {isDesktop && <Footer />}
            {isMobile && <FooterMob />}
            {isMobile && <HeaderBottom />}
        </>
    );
};

export default BlogPage;
