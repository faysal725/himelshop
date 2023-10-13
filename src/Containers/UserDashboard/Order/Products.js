import React from 'react';
import { AiOutlineQuestionCircle } from 'react-icons/ai';
import image from '../../../assets/images/flash/1.jpg';

const Products = () => {
    return (
        <div className="product-list">
            <div className="product-item">
                <img src={image} width="60px" alt="" />
                <div className="product-name">Water spray motor car and bike washer</div>
                <div className="price">৳490</div>
                <div className="qty">Qty: 3</div>
                <div className="cancel">
                    Cancel
                    <span className="shippingTips">
                        <AiOutlineQuestionCircle />
                        <div className="message">
                            <span className="font-bolder">Cancellation Not Available</span>
                            <p>
                                Your order is on its way. It cannot be cancelled anymore. If you do
                                not want your order, please either reject the item at the item at
                                the door step or return it to our warehouse.
                            </p>
                        </div>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Products;
