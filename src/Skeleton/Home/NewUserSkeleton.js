import React from 'react';
import Box from '../Box/Box';
import Line from '../Line/Line';

const NewUserSkeleton = () => {
    return (
        <div className="newUserSkeleton">
            <div className="mt-3">
                <Line height="50px" />
            </div>
            <div className="mt-3">
                <Line height="50px" />
            </div>
            <div className="mt-3">
                <Line height="30px" />
            </div>
            <div className="row g-2 mt-4">
                <div className="col-6">
                    <Box height="50px" />
                </div>
                <div className="col-6">
                    <Box height="50px" />
                </div>
                <div className="col-6">
                    <Box height="50px" />
                </div>
                <div className="col-6">
                    <Box height="50px" />
                </div>
                <div className="col-6">
                    <Box height="50px" />
                </div>
                <div className="col-6">
                    <Box height="50px" />
                </div>
            </div>
        </div>
    );
};

export default NewUserSkeleton;
