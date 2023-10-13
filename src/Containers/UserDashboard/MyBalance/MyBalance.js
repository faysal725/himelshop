import FlashDeal from './FlashDeal';
import './MyBalance.scss';

const MyBalance = () => {
    return (
        <div className="my-balance-wrapper">
            <div className="row mb-3 ">
                <div className="col-6">
                    <div className="my-balance">
                        <h6 className="amount">৳499</h6>
                        <span>Main Balance</span>
                    </div>
                </div>
                <div className="col-6">
                    <div className="my-balance">
                        <h6 className="amount">৳499</h6>
                        <span>Gift Card</span>
                    </div>
                </div>
                <div className="col-6">
                    <div className="my-balance">
                        <h6 className="amount">৳499</h6>
                        <span>Cash Back</span>
                    </div>
                </div>
                <div className="col-6">
                    <div className="my-balance">
                        <h6 className="amount">৳499</h6>
                        <span>Pending</span>
                    </div>
                </div>
            </div>
            <FlashDeal />
        </div>
    );
};

export default MyBalance;
