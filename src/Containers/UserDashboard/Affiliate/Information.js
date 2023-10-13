import Input from '../../../Components/Input/Input';

const Information = () => {
    return (
        <div className="col-md-8">
            <div className="information">
                <p className="font-bolder">
                    For more information about affiliate program please go to Teams & Conditions
                    Page.
                </p>
                <Input
                    type="text"
                    label="referralWebsite"
                    labelTitle="Referral Website (Primary traffic source )"
                    name="referralWebsite"
                    required
                />
                <Input
                    type="text"
                    label="paymentType"
                    labelTitle="Payment Type"
                    name="paymentType"
                />
                <Input
                    type="text"
                    label="paymentInformation"
                    labelTitle="Payment Information"
                    name="paymentInformation"
                    required
                />
                <p>
                    Please specify personal payment info, which we cloud Use for payout: PayPal
                    email or any e-wallet payment details.
                </p>
                <div className="mt-3">
                    <button type="submit" className="edit-button font-bolder text-uppercase ">
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Information;
