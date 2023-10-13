import Input from '../../../Components/Input/Input';

const Promotions = () => {
    return (
        <div className="promotion">
            <div className="col-md-8">
                <Input
                    type="text"
                    label="referralWebsite"
                    labelTitle="Referral Website (Primary traffic source )"
                    name="referralWebsite"
                    required
                />
                <p className="font-bolder">
                    Provide any alphanumeric as a unique code prefix to be used in coupon codes.
                    Once the code prefix is saved, It can’s be changed
                </p>
                <p>
                    Example: <span className="font-bolder">ABC10</span> - Unique ID;{' '}
                    <span className="font-bolder">SHOES150OFF</span> - coupon code template;
                    generated coupon: <span className="font-bolder">ABC10-SHOES150OFF</span>
                </p>
            </div>

            <div className="table-responsive">
                <h5>1 Item(s)</h5>
                <table className="address-table">
                    <thead>
                        <tr className="">
                            <th>Campaign</th>
                            <th>Commission</th>
                            <th>Coupon Code</th>
                            <th>Link Action</th>
                            <th>Coupon Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th> All Products </th>
                            <th> 3% </th>
                            <th> Not Generated </th>
                            <th>
                                <button type="button" className="btn btn-primary">
                                    GET LINK
                                </button>
                            </th>
                            <th>
                                <button
                                    type="button"
                                    className="btn btn-outline-primary text-uppercase "
                                >
                                    GET Coupon
                                </button>
                            </th>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Promotions;
