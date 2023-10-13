const Reports = () => {
    return (
        <div className="reports">
            <div className="mt-3">
                <h6>Performance by link</h6>
                <button
                    type="button"
                    className="btn btn-outline-secondary  px-4 py-1 mb-2 rounded-1 "
                >
                    Filter
                </button>
                <div className="table-responsive mt-2">
                    <h6> 0 Item(s)</h6>
                    <table className="address-table">
                        <thead>
                            <tr className="">
                                <th>Campaign</th>
                                <th>Traffic Source</th>
                                <th>Hits</th>
                                <th>Orders</th>
                                <th> Buyers</th>
                                <th> Earned Commissions</th>
                                <th> Conversion</th>
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

            <div className="mt-5 pt-2 mb-2">
                <h6>Performance by link</h6>
                <button
                    type="button"
                    className="btn btn-outline-secondary  px-4 py-1 mb-2 rounded-1 "
                >
                    Filter
                </button>
                <div className="table-responsive mt-2">
                    <h6> 0 Item(s)</h6>
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
        </div>
    );
};

export default Reports;
