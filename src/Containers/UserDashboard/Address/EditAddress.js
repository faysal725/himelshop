import React from 'react';
import { AiFillHome } from 'react-icons/ai';
import { HiOutlineOfficeBuilding } from 'react-icons/hi';

const EditAddress = ({ setIsUpdate }) => {
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

            <div className=" offset-md-6 col-md-6 ">
                <div className="mb-2 d-flex">
                    <input
                        type="checkbox"
                        id="isBilling"
                        style={{ height: '23px', width: '23px' }}
                    />
                    <label htmlFor="isBilling" className="form-label ms-2">
                        Same As Billing Address
                    </label>
                </div>
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

            <div className="offset-md-6 col-md-6 ">
                <button
                    type="submit"
                    className="custom-button save-btn  d-inline-block  me-3 mt-0 "
                >
                    Save
                </button>
                <button
                    type="button"
                    className="d-inline-block custom-button save-btn cancel-btn mt-0"
                    onClick={() => setIsUpdate(false)}
                >
                    Cancel
                </button>
            </div>
        </form>
    );
};

export default EditAddress;
