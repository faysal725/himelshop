import { useHistory } from 'react-router-dom';
import './Return.scss';

const Return = () => {
    const history = useHistory();
    return (
        <div className="return-wrapper">
            <h5>My Returns</h5>
            <div className="no-data">
                <p>There are no orders placed yet</p>
                <button onClick={() => history.push('/')} type="button" className="continue-btn">
                    Continue Shopping
                </button>
            </div>
        </div>
    );
};

export default Return;
