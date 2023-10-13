import React from 'react';
import { AiFillHome } from 'react-icons/ai';
import { HiOutlineOfficeBuilding } from 'react-icons/hi';

const ShoppingAddressForm = ({ setAddNewAddress }) => {
    return (
        <form className="row g-4">
            <div className="col-md-6">
                <label htmlFor="name" className="form-label">
                    Full Name
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Enter your first and last name"
                />
            </div>
            <div className="col-md-6">
                <label htmlFor="Region" className="form-label">
                    Region
                </label>
                <select id="Region" className="form-select">
                    <option selected>Please Choose your region</option>
                    <option>...</option>
                </select>
            </div>
            <div className="col-md-6">
                <label htmlFor="phone" className="form-label">
                    Phone Number
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="phone"
                    placeholder="Enter your phone number"
                />
            </div>
            <div className="col-md-6">
                <label htmlFor="city" className="form-label">
                    City
                </label>
                <select id="city" className="form-select">
                    <option selected>Please Choose your city</option>
                    <option>...</option>
                </select>
            </div>
            <div className="col-md-6">
                <label htmlFor="area" className="form-label">
                    Area
                </label>
                <select id="area" className="form-select">
                    <option selected>Please Choose your area</option>
                    <option>...</option>
                </select>
            </div>
            <div className="col-md-6">
                <label htmlFor="address" className="form-label">
                    Address
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="address"
                    placeholder="Apartment, studio, or floor"
                />
            </div>
            <div className="col-md-6">
                <label htmlFor="address" className="form-label">
                    Select a label for effective delivery:
                </label>
                <div className="address-btn-wrapper">
                    <button type="button" className="address-btn">
                        <HiOutlineOfficeBuilding /> Office
                    </button>
                    <button type="button" className="address-btn ms-3">
                        <AiFillHome /> Home
                    </button>
                </div>
            </div>

            <div className="col-12">
                <button type="submit" className=" custom-button save-btn  d-inline-block  me-3">
                    Save
                </button>
                <button
                    onClick={() => setAddNewAddress(false)}
                    type="button"
                    className=" d-inline-block custom-button save-btn cancel-btn"
                >
                    Cancel
                </button>
            </div>
        </form>
    );
};

export default ShoppingAddressForm;
