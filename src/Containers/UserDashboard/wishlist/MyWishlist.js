import { useHistory } from 'react-router-dom';
import ProductItem2 from '../../../Components/Common/Product/ProductWithReview/ProductWithReview';
import { Products } from '../../ProductDetails/ProductDetails';

const MyWishlist = () => {
    const history = useHistory();
    return (
        <div className="wishlist-wrapper">
            <div className="d-flex align-items-center justify-content-center flex-column pt-80 ">
                <p>There are no Product added Wishlist yet.</p>
                <button onClick={() => history.push('/')} type="button" className="continue-btn">
                    Continue Shopping
                </button>
            </div>
            <div className="pt-5">
                <h5>Just For you</h5>
                <div className="row">
                    {Products.slice(0, 6).map((product) => (
                        <div className="col-md-3" key={product.id}>
                            <ProductItem2 product={product} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MyWishlist;
