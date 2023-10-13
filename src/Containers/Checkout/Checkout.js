import React, { useState } from 'react';
import ShoppingHeader from '../../Components/ShopingHeader/ShoppingHeader';
import OrderPlace from './OrderPlace';
import OrderPreview from './OrderPreview';
import ShoppingAddress from './ShoppingAddress';
import ShoppingAddressForm from './ShoppingAddressForm';

const Checkout = () => {
    const [addNewAddress, setAddNewAddress] = useState(false);

    return (
        <>
            <ShoppingHeader step={2} />
            <div className="container mt-3">
                <div className="row g-3">
                    <div className="col-lg-8">
                        <div className="bg-white p-3 rounded">
                            <h5 className="checkout-title">Shipping Address</h5>
                            {!addNewAddress && (
                                <>
                                    <ShoppingAddress />
                                    <div className="address-btn ms-4">
                                        <a
                                            href="#"
                                            onClick={(event) => {
                                                event.preventDefault();
                                                setAddNewAddress(!addNewAddress);
                                            }}
                                        >
                                            + Add new shipping address
                                        </a>
                                        <a href="#">Select other address</a>
                                    </div>
                                </>
                            )}
                            {addNewAddress && (
                                <ShoppingAddressForm setAddNewAddress={setAddNewAddress} />
                            )}
                        </div>

                        <OrderPreview />
                    </div>
                    <div className="col-lg-4">
                        <OrderPlace />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Checkout;
