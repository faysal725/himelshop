const ApplyForm = () => {
    return (
        <div className="bg-white">
            <div className="col-md-10 mx-auto">
                <div className="container py-5">
                    <form className="border p-4 rounded apply-form ">
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">
                                Name
                            </label>
                            <input type="text" className="form-control" id="Name" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">
                                Email
                            </label>
                            <input type="email" className="form-control" id="email" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="phone" className="form-label">
                                Phone
                            </label>
                            <input type="text" className="form-control" id="phone" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="experience" className="form-label">
                                Total Experience (in years)
                            </label>
                            <input type="text" className="form-control" id="experience" />
                        </div>

                        <div className="mb-3">
                            <div className="mb-3">
                                <label htmlFor="formFile" className="form-label">
                                    Upload Resume
                                </label>
                                <input className="form-control" type="file" id="formFile" />
                            </div>
                            <div id="emailHelp" className="form-text">
                                For best results, upload *.doc/*.docx/*.pdf/*.txt format files only
                                (File size max 2MB)
                            </div>
                        </div>
                        <div className="text-center mt-5">
                            <button
                                type="submit"
                                className="custom-button d-inline-block py-2 px-4"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ApplyForm;
