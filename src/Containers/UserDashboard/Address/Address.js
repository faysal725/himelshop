import { useState } from 'react';
import './Address.scss';
import EditAddress from './EditAddress';

const Address = () => {
    const [isUpdate, setIsUpdate] = useState(false);

    return (
        <div className="address-wrapper">
            <h4> {isUpdate && 'Edit'} Address Book</h4>

            {!isUpdate && (
                <>
                    <div className="edit-address">
                        <span>Make default shipping address </span>
                        <span className="mx-2">|</span>
                        <span>Make default billing address</span>
                    </div>
                    <div className="table-responsive">
                        <table className="address-table">
                            <thead>
                                <tr className="">
                                    <th>Full Name</th>
                                    <th>Address</th>
                                    <th>Region</th>
                                    <th>Phone</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>Sujon Hossain</th>
                                    <th> House-13, Road-06, Block-B Section-6</th>
                                    <th> Mirpur, Dhaka </th>
                                    <th>01980653626</th>
                                    <th>
                                        <span
                                            role="button"
                                            onClick={() => setIsUpdate(true)}
                                            tabIndex={0}
                                            className="a-color"
                                        >
                                            Edit
                                        </span>
                                    </th>
                                </tr>
                            </tbody>
                        </table>
                        <div className="text-end py-4">
                            <button
                                onClick={() => setIsUpdate(true)}
                                type="button"
                                className="edit-button"
                            >
                                Add New Address
                            </button>
                        </div>
                    </div>
                </>
            )}

            {isUpdate && <EditAddress setIsUpdate={setIsUpdate} />}
        </div>
    );
};

export default Address;
