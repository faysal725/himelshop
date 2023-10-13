import './Career.scss';
import CareerHeader from './CareerHeader';
import CareerItem from './CareerItem';

const Career = () => {
    return (
        <>
            <CareerHeader title="Explore for Opportunities" />
            <div className="bg-white">
                <div className="container py-5">
                    <h4 className="fw-bold text-center mb-4">Opportunities Listings</h4>
                    <div className="row g-2 g-sm-4">
                        {Array(7)
                            .fill('item')
                            .map((item, index) => (
                                <div className="col-md-4" key={index}>
                                    <CareerItem />
                                </div>
                            ))}
                    </div>
                    <div className="quote">
                        <p>
                            Ideate. Experiment. Create. Fail. Innovate. Learn. Grow. Challenge.
                            Risk. Accomplish.
                        </p>
                        <h4 className="fw-bold text-center mb-">Maximize</h4>
                    </div>
                </div>
                <div className="career-quote-wrapper">
                    <div className="col-md-10 mx-auto">
                        <div className="container">
                            <div className="career-quote">
                                <div className="col-md-7">
                                    <p>
                                        “At HimelShop, we always encourage our HimelShop to think
                                        big, keep an entrepreneurial spirit, and make a difference.”
                                    </p>
                                </div>
                                <p className="mt-3"> - MD ALIM MIR, CEO</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Career;
