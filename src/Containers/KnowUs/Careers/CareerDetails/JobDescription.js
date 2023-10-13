import { useHistory } from 'react-router-dom';

const JobDescription = () => {
    const history = useHistory();
    return (
        <>
            <div className="container">
                <div className="col-md-10 mx-auto">
                    <div className="row p-50">
                        <div className="col-md-6">
                            <div className="job-description">
                                <div className="">
                                    <h3 className="mb-3 fw-bold ">Job Responsibilities</h3>
                                    <ul>
                                        <li>
                                            Plan and direct food preparation and culinary activities
                                        </li>
                                        <li>
                                            Modify menus or create new ones that meet quality
                                            standards
                                        </li>
                                        <li>Estimate food requirements and food/labor costs</li>
                                        <li>Supervise kitchen staff's activities</li>
                                        <li>Arrange for equipment purchases and repairs</li>
                                        <li>Recruit and manage kitchen staff</li>
                                        <li>Rectify arising problems or complaints</li>
                                        <li>Give prepared plates the "final touch"</li>
                                        <li>Perform administrative duties</li>
                                        <li>
                                            Comply with nutrition and sanitation regulations and
                                            safety standards
                                        </li>
                                        <li>Keep time and payroll records</li>
                                        <li>
                                            Maintain a positive and professional approach with
                                            coworkers and customers
                                        </li>
                                    </ul>
                                </div>
                                <div className="mt-4">
                                    <h3 className=" fw-bold ">Employment Status</h3>
                                    <p>Full-time</p>
                                </div>
                                <div className="">
                                    <h3 className=" fw-bold ">Experience Requirements</h3>
                                    <p>
                                        At least 10 year(s) The applicants should have experience in
                                        the following business area(s): Hotel
                                    </p>
                                </div>
                                <div className="mt-4">
                                    <h3 className="mb-3 fw-bold ">Additional Requirements</h3>
                                    <ul>
                                        <li>Age 35 to 45 years</li>
                                        <li>Only males are allowed to apply</li>
                                        <li>Proven working experience as a Head Chef</li>
                                        <li>Excellent record of kitchen management</li>
                                        <li>Ability to spot and resolve problems efficiently</li>
                                        <li>Recruit and manage kitchen staff</li>
                                        <li>Rectify arising problems or complaints</li>
                                        <li>Give prepared plates the "final touch"</li>
                                        <li>Perform administrative duties</li>
                                        <li>
                                            Comply with nutrition and sanitation regulations and
                                            safety standards
                                        </li>
                                        <li>Keep time and payroll records</li>
                                        <li>
                                            Maintain a positive and professional approach with
                                            coworkers and customers
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="job-summary">
                                <h5 className="job-summary-title">Job Summary</h5>
                                <div className="job-summary-des">
                                    <div className="item">
                                        <span className="me-2 fw-bolder">Published on:</span>
                                        <span>11 Nov 2021</span>
                                    </div>
                                    <div className="item">
                                        <span className="me-2 fw-bolder">Vacancy:</span>
                                        <span>1</span>
                                    </div>
                                    <div className="item">
                                        <span className="me-2 fw-bolder">
                                            Employment Status: Full-time Experience:
                                        </span>
                                        <span> At least 10 year(s)</span>
                                    </div>
                                    <div className="item">
                                        <span className="me-2 fw-bolder"> Age:</span>
                                        <span> Age 35 to 45 years</span>
                                    </div>
                                    <div className="item">
                                        <span className="me-2 fw-bolder"> Job Location:</span>
                                        <span>Mirpur, Dhaka</span>
                                    </div>

                                    <div className="item">
                                        <span className="me-2 fw-bolder">Salary:</span>
                                        <span>Negotiable Application</span>
                                    </div>
                                    <div className="item">
                                        <span className="me-2 fw-bolder">Deadline:</span>
                                        <span> 30 Nov 2021</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-5" style={{ background: '#f0d2ab' }}>
                <div className="container">
                    <h3 className="fw-bolder text-center mb-3">Get Free Way To Apply,</h3>
                    <div className="py-3 text-center">
                        <button
                            type="button"
                            className="apply-btn"
                            onClick={() => history.push('/careers/senior-manager/apply')}
                        >
                            Apply Now
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default JobDescription;
