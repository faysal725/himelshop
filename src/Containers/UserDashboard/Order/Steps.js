import { MultiStepForm, Step } from 'react-multi-form';

const Steps = () => {
    return (
        <div className="col-md-8 mx-auto mt-4">
            <MultiStepForm activeStep={2} accentColor="#00a84f">
                <Step label="Processing" />
                <Step label="Delivery Man" />
                <Step label="Complete" />
            </MultiStepForm>
            <div className="step-details">
                <p>23 Aug 2020 18:16 Your Package has been handed to eCurier</p>
                <p>
                    23 Aug 2020 18:16 Your Package has been packed and is being handed over to a
                    logistic partner
                </p>
                <p>23 Aug 2020 18:16 Your Order has been successfully verified</p>
                <p>
                    23 Aug 2020 18:16 Thanks you for shopping at HimeShop! Your order is b eding
                    verified
                </p>

                <p className="text-center d-inline-block a-color mt-2 font-bolder w-100">
                    View Less
                </p>
            </div>
        </div>
    );
};

export default Steps;
