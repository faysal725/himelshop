import image from '../../../assets/images/flash/1.jpg';
import './Cancel.scss';

const Cancel = () => {
    return (
        <div className="order-wrapper">
            <h4> My Cancellation </h4>

            <div className="order-top-info">
                <div className="left">
                    <span className="d-block">
                        <span className="font-bolder">Order</span>{' '}
                        <span className="a-color">#4723482423</span>{' '}
                    </span>
                    <span className="d-block">Place on 23 Aug 2020, 13:33:09</span>
                </div>
                <div className="right">
                    <span className="a-color"> Manage</span>
                </div>
            </div>
            <div className="product-list">
                <div className="product-item">
                    <img src={image} width="60px" alt="" />
                    <div className="product-name">Water spray motor car and bike washer</div>
                    <div className="qty">Qty: 3</div>
                    <button type="button" className="btn process-btn rounded-pill ">
                        Cancelled
                    </button>
                </div>
                <div className="product-item">
                    <img src={image} width="60px" alt="" />
                    <div className="product-name">Water spray motor car and bike washer</div>
                    <div className="qty">Qty: 3</div>
                    <button type="button" className="btn process-btn rounded-pill ">
                        Cancelled
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Cancel;
