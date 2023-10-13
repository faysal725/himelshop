const Total = () => {
    return (
        <div className="col-md-6">
            <div className="order-details pb-1" style={{ height: '96%' }}>
                <h5 className="font-bold">Total Summary</h5>
                <ul className="order-summery">
                    <li>
                        <span className="text">Subtotal</span>
                        <span className="money">৳997.99</span>
                    </li>
                    <li>
                        <span className="text">Shipping Cost</span>
                        <span className="money">Free</span>
                    </li>
                    <li className="subTotal">
                        <span className="text">Total(10)</span>
                        <span className="money">৳997.99</span>
                    </li>
                    <li>
                        <span className="text">Placed by Cash on Delivery</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Total;
