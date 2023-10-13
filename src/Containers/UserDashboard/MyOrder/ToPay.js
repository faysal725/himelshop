import React from 'react';
import { useHistory } from 'react-router-dom';

const ToPay = () => {
    const history = useHistory();
    return (
        <div>
            <div className="d-flex align-items-center justify-content-center flex-column pt-80 ">
                <p>There are no orders placed yet</p>
                <button onClick={() => history.push('/')} type="button" className="continue-btn">
                    Continue Shopping
                </button>
            </div>
        </div>
    );
};

export default ToPay;
