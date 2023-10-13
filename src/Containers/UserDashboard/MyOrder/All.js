import Products from './Products';

const All = () => {
    return (
        <div className="all">
            <div className="col-md-6 col-lg-5">
                <div className="d-flex align-items-center">
                    <div className="me-2">Show:</div>
                    <select className="form-select" aria-label="Default select example">
                        <option selected>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
            </div>
            <div className="bg-light-green">
                <div className="order-top-info mt-3">
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
                <Products items={1} isCancel={false} />
            </div>

            <div className="bg-light-green">
                <div className="order-top-info mt-4 mb-3">
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
                <Products items={2} isCancel />
            </div>
        </div>
    );
};

export default All;
