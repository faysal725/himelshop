import { Link } from 'react-router-dom';
import './Blog.scss';

const Blogs = () => {
    return (
        <div className="bg-white">
            <div className="container pb-5">
                <h4 className="about-title pt-4 mb-4"> Our Blogs </h4>
                <div className="row g-3">
                    <div className="col-sm-6 col-md-4 col-lg-3">
                        <Link to="/" className="blog-item shadow-sm d-block ">
                            <div className="img-wrapper">
                                <img
                                    src="https://sujonhossain1.github.io/portfolio-template2/img/course01.jpg"
                                    alt=""
                                    className="img-fluid"
                                />
                            </div>
                            <div className="p-2">
                                <small>
                                    <a href="#" className="me-2">
                                        Technology
                                    </a>
                                    <a href="#" className="me-2">
                                        Electronics
                                    </a>
                                </small>
                                <h6 className="title">
                                    Beginner to Pro in Excel: Financial Modeling and Valuation
                                </h6>
                            </div>
                        </Link>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3">
                        <Link to="/" className="blog-item shadow-sm d-block ">
                            <div className="img-wrapper">
                                <img
                                    src="https://sujonhossain1.github.io/portfolio-template2/img/course02.jpg"
                                    alt=""
                                    className="img-fluid"
                                />
                            </div>
                            <div className="p-2">
                                <small>
                                    <a href="#" className="me-2">
                                        Technology
                                    </a>
                                    <a href="#" className="me-2">
                                        Electronics
                                    </a>
                                </small>
                                <h6 className="title">
                                    Latest Samsung Smartphones at the Lowest Price in Bangladesh
                                    (2021)!
                                </h6>
                            </div>
                        </Link>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3">
                        <Link to="/" className="blog-item shadow-sm d-block ">
                            <div className="img-wrapper">
                                <img
                                    src="https://sujonhossain1.github.io/portfolio-template2/img/course03.jpg"
                                    alt=""
                                    className="img-fluid"
                                />
                            </div>
                            <div className="p-2">
                                <small>
                                    <a href="#" className="me-2">
                                        Technology
                                    </a>
                                    <a href="#" className="me-2">
                                        Electronics
                                    </a>
                                </small>
                                <h6 className="title">
                                    Latest Samsung Smartphones at the Lowest Price in Bangladesh
                                    (2021)!
                                </h6>
                            </div>
                        </Link>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3">
                        <Link to="/" className="blog-item shadow-sm d-block ">
                            <div className="img-wrapper">
                                <img
                                    src="https://sujonhossain1.github.io/portfolio-template2/img/course01.jpg"
                                    alt=""
                                    className="img-fluid"
                                />
                            </div>
                            <div className="p-2">
                                <small>
                                    <a href="#" className="me-2">
                                        Technology
                                    </a>
                                    <a href="#" className="me-2">
                                        Electronics
                                    </a>
                                </small>
                                <h6 className="title">
                                    Beginner to Pro in Excel: Financial Modeling and Valuation
                                </h6>
                            </div>
                        </Link>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3">
                        <Link to="/" className="blog-item shadow-sm d-block ">
                            <div className="img-wrapper">
                                <img
                                    src="https://sujonhossain1.github.io/portfolio-template2/img/course02.jpg"
                                    alt=""
                                    className="img-fluid"
                                />
                            </div>
                            <div className="p-2">
                                <small>
                                    <a href="#" className="me-2">
                                        Technology
                                    </a>
                                    <a href="#" className="me-2">
                                        Electronics
                                    </a>
                                </small>
                                <h6 className="title">
                                    Latest Samsung Smartphones at the Lowest Price in Bangladesh
                                    (2021)!
                                </h6>
                            </div>
                        </Link>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3">
                        <Link to="/" className="blog-item shadow-sm d-block ">
                            <div className="img-wrapper">
                                <img
                                    src="https://sujonhossain1.github.io/portfolio-template2/img/course03.jpg"
                                    alt=""
                                    className="img-fluid"
                                />
                            </div>
                            <div className="p-2">
                                <small>
                                    <a href="#" className="me-2">
                                        Technology
                                    </a>
                                    <a href="#" className="me-2">
                                        Electronics
                                    </a>
                                </small>
                                <h6 className="title">
                                    Latest Samsung Smartphones at the Lowest Price in Bangladesh
                                    (2021)!
                                </h6>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;
