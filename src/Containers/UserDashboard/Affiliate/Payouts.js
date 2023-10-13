import { AiFillWarning } from 'react-icons/ai';

const Payouts = () => {
    return (
        <>
            <div className="balance ">
                <div className="balance-item">
                    <p className="mb-0 font-bolder ">Available Commissions</p>
                    <h5>৳490</h5>
                </div>
                <div className="balance-item">
                    <p className="mb-0 font-bolder ">Available Commissions</p>
                    <h5>৳490</h5>
                </div>
                <div className="balance-item">
                    <p className="mb-0 font-bolder ">Available Commissions</p>
                    <h5>৳490</h5>
                </div>
                <div className="balance-item">
                    <p className="mb-0 font-bolder ">Available Commissions</p>
                    <h5>৳490</h5>
                </div>
            </div>

            <div className="alert alert-warning mt-3" role="alert">
                <AiFillWarning className="me-1 fs-5 " />
                No recommendations have been selected for this campaign. To get a list of
                recommended products, please select another campaign.
            </div>

            <div className="mt-3 pt-2 mb-2">
                <h6>Performance by link</h6>
                <div className="table-responsive mt-2">
                    <table className="address-table">
                        <thead>
                            <tr className="">
                                <th>Campaign</th>
                                <th> Coupon Code </th>
                                <th> Total Number of Uses</th>
                                <th> Earned Commissions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td> We couldn't found any records. </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default Payouts;
