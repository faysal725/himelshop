import { ImPriceTag } from 'react-icons/im';
import Product from '../../../Components/Common/Product/Product/Product';
import ProductsContainer from '../../../Components/ProductsContainer/ProductsContainer';
import Title from '../../../Components/Title/Title';
import { products } from '../../Home/PreOrder';
import './Wholesale.scss';

const Wholesale = () => {
    return (
        <>
            <div className="affiliate-banner">
                <div className="container pt-5">
                    <p className="banner-title">
                        Carve up
                        <span> $40000 </span>
                    </p>
                    <p className="banner-title">
                        Earn Up to
                        <span> $60000 </span>
                        cash
                    </p>

                    <p className="banner-text">11.11 Sale & Black Friday Sale Bonus Tips</p>
                    <div className="affiliate-time">
                        <div className="ends-in">Ends in</div>
                        <div className="time-count"> 1 </div> D
                        <div className="time-count"> 10 </div> :
                        <div className="time-count"> 12 </div> :
                        <div className="time-count"> 41 </div>
                    </div>
                </div>
            </div>

            <div className="pb-4 pt-1">
                <ProductsContainer>
                    <Title
                        Icon={ImPriceTag}
                        title="Wholesales"
                        subTitle="(Get a lower price, Up to 50% Discount.)"
                        link="/see"
                        color="#ef9721"
                    />
                    <div className="row  g-2 g-sm-3">
                        {products.map((product) => (
                            <div className="col-4 col-sm-4 col-md-3 col-lg-2" key={product.id}>
                                <Product product={product} />
                            </div>
                        ))}
                    </div>
                </ProductsContainer>
            </div>

            <div className="wholesale-banner">
                <div className="py-5 text-center">
                    <h3>Get Free Sample, Lowest Wholesale Price</h3>
                    <button
                        type="button"
                        className="custom-button px-5 py-2 d-inline-block mt-3 rounded-pill"
                    >
                        JOIN NOW
                    </button>
                </div>
            </div>
        </>
    );
};

export default Wholesale;
