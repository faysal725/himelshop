import { FiChevronDown } from 'react-icons/fi';
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
import ProductItem from '../../Components/Common/Product/ProductItem/ProductItem';
import Title from '../../Components/Title/Title';

const products = [
    {
        id: 1,
        image: image1,
        price: 1343,
        name: '2pcs Standard Electrode Pad Lead Wires For Tens/Ems Machines ',
        newUser: true,
        review: false,
    },
    {
        id: 2,
        image: image2,
        price: 1233,
        name: '2pcs Standard Electrode Pad Lead Wires For Tens/Ems Machines ',
        newUser: false,
        review: false,
    },
    {
        id: 3,
        image: image3,
        price: 1123,
        name: '2pcs Standard Electrode Pad Lead Wires For Tens/Ems Machines ',
        newUser: false,
        review: false,
    },
    {
        id: 4,
        image: image4,
        price: 1123,
        name: '2pcs Standard Electrode Pad Lead Wires For Tens/Ems Machines ',
        newUser: false,
        review: false,
    },
    {
        id: 5,
        image: image5,
        price: 1123,
        name: '2pcs Standard Electrode Pad Lead Wires For Tens/Ems Machines ',
        newUser: true,
        review: false,
    },
    {
        id: 6,
        image: image6,
        price: 1123,
        name: '2pcs Standard Electrode Pad Lead Wires For Tens/Ems Machines ',
        newUser: false,
        review: false,
    },
    {
        id: 7,
        image: image7,
        price: 1123,
        name: '2pcs Standard Electrode Pad Lead Wires For Tens/Ems Machines ',
        newUser: true,
        review: false,
    },
    {
        id: 8,
        image: image8,
        price: 1123,
        name: '2pcs Standard Electrode Pad Lead Wires For Tens/Ems Machines ',
        newUser: false,
        review: false,
    },
    {
        id: 9,
        image: image9,
        price: 1123,
        name: '2pcs Standard Electrode Pad Lead Wires For Tens/Ems Machines ',
        newUser: false,
        review: false,
    },
    {
        id: 10,
        image: image10,
        price: 1123,
        name: '2pcs Standard Electrode Pad Lead Wires For Tens/Ems Machines ',
        newUser: true,
        review: false,
    },
    {
        id: 11,
        image: image11,
        price: 1123,
        name: '2pcs Standard Electrode Pad Lead Wires For Tens/Ems Machines ',
        newUser: false,
        review: false,
    },
    {
        id: 12,
        image: image12,
        price: 1123,
        name: '2pcs Standard Electrode Pad Lead Wires For Tens/Ems Machines ',
        newUser: false,
        review: false,
    },
];
const Products = () => (
    <div className="container">
        <div className="mt-4">
            <Title title="Recommendations for you" />
        </div>
        <div className="row  g-2 g-sm-3 ">
            {products.map((product) => (
                <div
                    className="col-6 col-sm-6 col-md-4 col-lg-4 col-xl-3 col-xxl-2"
                    key={product.id}
                >
                    <ProductItem product={product} />
                </div>
            ))}
        </div>
        <div className="showMore mb-4">
            <button className="showMoreBtn" type="button">
                Show More <FiChevronDown />
            </button>
        </div>
    </div>
);

export default Products;
