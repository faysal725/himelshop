const Address = () => {
    return (
        <div className="col-md-6">
            <div className="address-wrap order-details pb-1">
                <ul className="address-list">
                    <li>
                        <div className="address-info-wrap">
                            <div className=" text-uppercase mb-2 font-bolder text-secondary ">
                                Shipping Address{' '}
                            </div>
                            <div className="basic-info">Simul Uddin</div>
                            <div className="other-info">
                                <p className="font-bolder">
                                    <div className="item-btn d-inline me-2">
                                        <span className="default">Default</span>
                                    </div>
                                    House-13, Road-06, Block-B Section-6, Mirpur, Dhaka-1216
                                </p>
                                <a
                                    className="mt-2 font-bolder text-dark d-inline-block "
                                    href="tel:+"
                                >
                                    01722-22 22 22
                                </a>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="address-wrap order-details pb-1">
                <ul className="address-list">
                    <li>
                        <div className="address-info-wrap">
                            <div className=" text-uppercase mb-2 font-bolder text-secondary ">
                                Billing Address{' '}
                            </div>
                            <div className="basic-info">Simul Uddin</div>
                            <div className="other-info">
                                <p className="font-bolder">
                                    <div className="item-btn d-inline me-2">
                                        <span className="default">Default</span>
                                    </div>
                                    House-13, Road-06, Block-B Section-6, Mirpur, Dhaka-1216
                                </p>
                                <a
                                    className="mt-2 font-bolder text-dark d-inline-block "
                                    href="tel:+"
                                >
                                    01722-22 22 22
                                </a>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Address;
