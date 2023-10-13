/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
        };
    }

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.log(error, errorInfo);
    }

    render() {
        const { hasError } = this.state;
        const { children, history } = this.props;

        if (hasError) {
            return (
                <div
                    className="d-flex align-items-center justify-content-center"
                    style={{ height: '100vh' }}
                >
                    <div className="col-md-5 col-sm-8 col-10 mx-auto">
                        <div className="rounded p-5 text-center" style={{ background: '#dadada' }}>
                            <h3>Something Went Wrong!!</h3>
                            <Button
                                type="button"
                                className="btn btn-primary btn-sm mt-3"
                                onClick={() => {
                                    history.push('/');
                                    window.location.reload();
                                }}
                            >
                                Go Back
                            </Button>
                        </div>
                    </div>
                </div>
            );
        }

        return children;
    }
}

export default withRouter(ErrorBoundary);
