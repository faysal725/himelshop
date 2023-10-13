const Balance = () => {
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
            <div className="table-responsive mt-5">
                <h6>1 Item(s)</h6>
                <table className="address-table">
                    <thead>
                        <tr className="">
                            <th>Campaign</th>
                            <th>Qty of Ordered Items</th>
                            <th>Commission Amount</th>
                            <th>Commission Registration Date</th>
                            <th> Conversion Availability Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td> No Items Found </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default Balance;
