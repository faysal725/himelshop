import React, { Suspense } from 'react';
import image1 from '../../assets/images/products/1.jpg';
import image10 from '../../assets/images/products/10.jpg';
import image11 from '../../assets/images/products/11.jpg';
import image12 from '../../assets/images/products/12.jpg';
import image2 from '../../assets/images/products/2.jpg';
import image3 from '../../assets/images/products/3.jpg';
import image4 from '../../assets/images/products/4.jpg';
import image5 from '../../assets/images/products/5.jpg';
import image6 from '../../assets/images/products/6.jpg';
import image7 from '../../assets/images/products/7.jpg';
import image8 from '../../assets/images/products/8.jpg';
import image9 from '../../assets/images/products/9.jpg';
import { useSizeContext } from '../../contexts/SizeContextProvider';
import './ProductDetails.scss';

const ProductDetailsDesktop = React.lazy(() =>
    import('./ProductDetailsDesktop/ProductDetailsDesktop')
);
const ProductDetailsMobile = React.lazy(() =>
    import('./ProductDetailsMobile/ProductDetailsMobile')
);

export const Products = [
    {
        id: 1,
        image: image1,
        price: 1343,
        name: '2pcs Standard Electrode Pad Lead Wires For Tens/Ems Machines ',
        newUser: false,
        review: 50,
    },
    {
        id: 2,
        image: image2,
        price: 1233,
        name: '2pcs Standard Electrode Pad Lead Wires For Tens/Ems Machines ',
        newUser: false,
        review: 10,
    },
    {
        id: 3,
        image: image3,
        price: 1123,
        name: '2pcs Standard Electrode Pad Lead Wires For Tens/Ems Machines ',
        newUser: false,
        review: 5,
    },
    {
        id: 4,
        image: image4,
        price: 1123,
        name: '2pcs Standard Electrode Pad Lead Wires For Tens/Ems Machines ',
        newUser: false,
        review: 10,
    },
    {
        id: 5,
        image: image5,
        price: 1123,
        name: '2pcs Standard Electrode Pad Lead Wires For Tens/Ems Machines ',
        newUser: false,
        review: 150,
    },
    {
        id: 6,
        image: image6,
        price: 1123,
        name: '2pcs Standard Electrode Pad Lead Wires For Tens/Ems Machines ',
        newUser: false,
        review: 12,
    },
    {
        id: 7,
        image: image7,
        price: 1123,
        name: '2pcs Standard Electrode Pad Lead Wires For Tens/Ems Machines ',
        newUser: false,
        review: 130,
    },
    {
        id: 8,
        image: image8,
        price: 1123,
        name: '2pcs Standard Electrode Pad Lead Wires For Tens/Ems Machines ',
        newUser: false,
        review: 30,
    },
    {
        id: 9,
        image: image9,
        price: 1123,
        name: '2pcs Standard Electrode Pad Lead Wires For Tens/Ems Machines ',
        newUser: false,
        review: 150,
    },
    {
        id: 10,
        image: image10,
        price: 1123,
        name: '2pcs Standard Electrode Pad Lead Wires For Tens/Ems Machines ',
        newUser: false,
        review: 40,
    },
    {
        id: 11,
        image: image11,
        price: 1123,
        name: '2pcs Standard Electrode Pad Lead Wires For Tens/Ems Machines ',
        newUser: false,
        review: 37,
    },
    {
        id: 12,
        image: image12,
        price: 1123,
        name: '2pcs Standard Electrode Pad Lead Wires For Tens/Ems Machines ',
        newUser: false,
        review: 150,
    },
];

const ProductDetails = () => {
    const { isMobile, isDesktop } = useSizeContext();
    return (
        <>
            <Suspense fallback={<div>Loading...</div>}>
                {isDesktop && <ProductDetailsDesktop products={Products} />}
                {isMobile && <ProductDetailsMobile products={Products} />}
            </Suspense>
        </>
    );
};

export default ProductDetails;
