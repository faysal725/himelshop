import React from 'react';
import image from '../../../assets/images/flash/1.jpg';

const Table = () => {
    return (
        <div className="table-responsive mt-5">
            <table className="custom-table ">
                <thead>
                    <tr className="">
                        <th>Order #</th>
                        <th>Product Code</th>
                        <th>Placed On</th>
                        <th>Product Title</th>
                        <th>Items</th>
                        <th>Total</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {Array(4)
                        .fill('item')
                        .map((item, index) => (
                            <tr key={index}>
                                <th>3423342</th>
                                <td> 1354</td>
                                <td>23/08/2021</td>
                                <td>@Laser Pointer Light and Target</td>
                                <td>
                                    <img src={image} width="50px" alt="" />
                                </td>
                                <td> ৳490</td>
                                <td> Manage</td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
