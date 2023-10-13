import * as Icons from 'react-icons/all';
import image1 from '../../assets/images/New/1.jpg';
import image2 from '../../assets/images/New/2.jpg';
import image3 from '../../assets/images/New/3.jpg';
import image4 from '../../assets/images/New/4.jpg';
import Product from '../../Components/Common/Product/Product/Product';
// import Product from '../../Components/Product/Product';
import ProductsContainer from '../../Components/ProductsContainer/ProductsContainer';
import Title from '../../Components/Title/Title';
import { useSizeContext } from '../../contexts/SizeContextProvider';

const New = () => {
    const { size } = useSizeContext();
    const products = [
        {
            id: 1,
            image: image1,
            price: 1850,
            previousPrice: 2300,
        },
        {
            id: 2,
            image: image2,
            price: 1320,
            previousPrice: 1600,
        },
        {
            id: 3,
            image: image3,
            price: 1250,
            previousPrice: 1200,
        },
        {
            id: 4,
            image: image4,
            price: 1850,
            previousPrice: 2300,
        },
        {
            id: 5,
            image: image1,
            price: 185,
            previousPrice: 230,
        },
        {
            id: 6,
            image: image2,
            price: 850,
            previousPrice: 1000,
        },
    ];

    return (
        <ProductsContainer>
            <Title Icon={Icons.BiHeartCircle} title="New Arrivals" link="/see" color="red" />
            <div className="row g-2 g-sm-3">
                {products.slice(0, size).map((product) => (
                    <div className="col-4 col-sm-4 col-md-3 col-lg-2" key={product.id}>
                        <Product product={product} />
                    </div>
                ))}
            </div>
        </ProductsContainer>
    );
};

export default New;
