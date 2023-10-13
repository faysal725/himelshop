import React from 'react';
import { IoClose } from 'react-icons/io5';
import './ProductOption.scss';

const ProductOption = () => {
    return (
        <div className="productOption">
            <div className="bg">
                <div className="main">
                    <IoClose className="closeBtn" />
                    <div className="div">
                        <div className="proHeader">
                            <div className="left">
                                <img
                                    src="https://imgaz.staticbg.com/thumb/view/oaupload/banggood/images/83/75/60982e94-ae52-4b06-a24d-0b5771d6c5f3.jpg"
                                    alt=""
                                />
                            </div>
                            <div className="right">
                                <div className="price">৳8000 </div>
                                <div className="d-flex align-items-center">
                                    <div className="previousPrice">৳50 </div>
                                    <div className="off ms-2">15% </div>
                                </div>
                            </div>
                        </div>
                        <div className="proStyle">
                            <div className="proStyleItem">
                                <div className="title">Color</div>
                                <div className="styleBox">
                                    <button type="button" className="active">
                                        Pebble White
                                    </button>
                                    <button type="button" className="">
                                        Pebble White
                                    </button>
                                </div>
                            </div>
                            <div className="proStyleItem">
                                <div className="title">Version</div>
                                <div className="styleBox">
                                    <button type="button" className="active">
                                        Other Area Version
                                    </button>
                                </div>
                            </div>
                            <div className="proStyleItem ">
                                <div className="title">Quantity</div>
                                <div className="quantityBox">
                                    <button type="button" className="">
                                        -
                                    </button>
                                    <span>1</span>
                                    <button type="button" className="">
                                        +
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductOption;
