import React from 'react';
import { IoClose } from 'react-icons/io5';

const ProductColor = () => {
    return (
        <div className="productOption" id="productColor">
            <div className="bg">
                <div className="main" id="colorMain">
                    <IoClose className="closeBtn" id="closeBtn-2" />
                    <div className="div">
                        <div className="proHeader">
                            <div className="left">
                                <img
                                    src="https://imgaz.staticbg.com/thumb/view/oaupload/banggood/images/83/75/60982e94-ae52-4b06-a24d-0b5771d6c5f3.jpg"
                                    alt=""
                                />
                            </div>
                            <div className="pro-right">
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductColor;
