import React from 'react';
import Box from '../Box/Box';

const CategoriesSkeleton = () => {
    return (
        <div className="container mt-4">
            <div className="row g-3 d-none d-md-flex">
                <div className="col-md-4">
                    <div
                        className="hotCategoryItemSkeleton"
                        style={{ background: 'linear-gradient( 135deg ,#d9f5f5,#d3e1f9)' }}
                    >
                        <div className="row g-3">
                            <div className="col-md-7">
                                <div className="h-100">
                                    <Box />
                                </div>
                            </div>
                            <div className="col-md-5">
                                <Box height="120px" />
                                <div className="mt-2">
                                    <Box height="120px" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-8">
                    <div className="row g-3">
                        <div className="col-md-6">
                            <div
                                className="hotCategoryItemSkeleton"
                                style={{ background: '#EADAEB' }}
                            >
                                <div className="row g-2">
                                    <div className="col-4">
                                        <Box height="120px" />
                                    </div>
                                    <div className="col-4">
                                        <Box height="120px" />
                                    </div>
                                    <div className="col-4">
                                        <Box height="120px" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div
                                className="hotCategoryItemSkeleton"
                                style={{ background: '#D5D5EF' }}
                            >
                                <div className="row g-2">
                                    <div className="col-4">
                                        <Box height="120px" />
                                    </div>
                                    <div className="col-4">
                                        <Box height="120px" />
                                    </div>
                                    <div className="col-4">
                                        <Box height="120px" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div
                                className="hotCategoryItemSkeleton"
                                style={{ background: '#D5D5EF' }}
                            >
                                <div className="row g-2">
                                    <div className="col-4">
                                        <Box height="120px" />
                                    </div>
                                    <div className="col-4">
                                        <Box height="120px" />
                                    </div>
                                    <div className="col-4">
                                        <Box height="120px" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div
                                className="hotCategoryItemSkeleton"
                                style={{ background: '#DBE4F3' }}
                            >
                                <div className="row g-2">
                                    <div className="col-4">
                                        <Box height="120px" />
                                    </div>
                                    <div className="col-4">
                                        <Box height="120px" />
                                    </div>
                                    <div className="col-4">
                                        <Box height="120px" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoriesSkeleton;
