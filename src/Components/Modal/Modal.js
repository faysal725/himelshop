/* eslint-disable jsx-a11y/anchor-has-content */
import { useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';
import './Modal.scss';

const Modal = () => {
    useEffect(() => {
        const button = document.querySelector('.modal-close');
        const modal = document.querySelector('.modal-wrapper');

        button.addEventListener('click', () => {
            modal.style.display = 'none';
        });
    }, []);
    return (
        <div className="modal-wrapper">
            <div className="modal-wrapper-content">
                <div className="modal-content">
                    <a href="#" className="modal-close">
                        <FaTimes />
                    </a>
                    <div className="content-wrap">
                        <div className="content-body">
                            <p className="content-body-title">New User Benefits</p>
                            <p className="subtitle">Free Gifts & US$2 Allowance</p>
                            <div className="offer free-gifts">
                                <span className="sprite-ic_allowance icon" />
                                <div className="text">Free Gifts</div>
                            </div>
                            <div className="offer free-gifts">
                                <span className="sprite-ic_free icon" />
                                <div className="text mt-3" style={{ lineHeight: '10px' }}>
                                    <h4 className="mb-0 fw-bold">Free Gifts</h4>
                                    <span className="order-over">Order over US$3.00</span>
                                </div>
                            </div>
                            <div className="use-it-button">Use It</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
