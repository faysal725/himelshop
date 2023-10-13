import { AiFillWarning } from 'react-icons/ai';
import Input from '../../../Components/Input/Input';

const Recommendations = () => {
    return (
        <div className="recommendations">
            <p>
                To save your time and effort that you would spend searching for products suitable
                for promotion on your resources, we’ve gathered our top picks in one place. Check
                out the list of recommended products to find the ones that work best for you.
            </p>

            <div className="col-md-8">
                <form action="" className="mb-3">
                    <Input
                        type="text"
                        label="referralWebsite"
                        labelTitle="Referral Website (Primary traffic source )"
                        name="referralWebsite"
                        required
                    />
                    <button type="button" className="edit-button text-uppercase ">
                        Apply
                    </button>
                </form>
            </div>
            <div className="alert alert-warning" role="alert">
                <AiFillWarning className="me-1 fs-5 " />
                No recommendations have been selected for this campaign. To get a list of
                recommended products, please select another campaign.
            </div>
        </div>
    );
};

export default Recommendations;
