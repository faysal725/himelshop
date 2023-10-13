import image from '../../../assets/images/flash/1.jpg';

const ToReceived = () => {
    return (
        <div className="bg-light-green">
            <div className="order-top-info mt-3">
                <div className="left">
                    <span className="d-block">
                        <span className="font-bolder">Tracking Number</span>{' '}
                        <span className="a-color">#4723482423</span>{' '}
                    </span>
                </div>
            </div>
            <div className="product-list">
                <div className="product-item ">
                    <div className="div">
                        <img src={image} width="60px" alt="" />
                        <span className="font-bolder ms-2">Delivered by: BD-AJR</span>
                    </div>
                    <div className="qty a-color ">Track Package</div>
                </div>
            </div>
        </div>
    );
};

export default ToReceived;
