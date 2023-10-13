import React from 'react';
import Skeleton from '../Skeleton';
import BannerImageSkeleton from './BannerImageSkeleton';
import BannerSkeleton from './BannerSkeleton';
import CategoriesSkeleton from './CategoriesSkeleton';
import CategorySkeleton from './CategorySkeleton';
import './HomeSkeleton.scss';
import NewUserSkeleton from './NewUserSkeleton';
import ProductsSkeleton from './ProductsSkeleton';
import TopBrandSkeleton from './TopBrandSkeleton';

const HomeSkeleton = () => {
    return (
        <div className="homeSkeleton">
            <div className="homeBannerWrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-lg-2 pe-lg-0 d-none d-md-block">
                            <CategorySkeleton />
                        </div>
                        <div className="col-12 col-md-9  col-lg-8">
                            <BannerSkeleton />
                        </div>
                        <div className="col-md-0 col-lg-2 ps-lg-0 d-none d-lg-block ">
                            <NewUserSkeleton />
                        </div>
                    </div>
                </div>
            </div>
            <BannerImageSkeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <TopBrandSkeleton />
            <CategoriesSkeleton />
            <ProductsSkeleton />
        </div>
    );
};

export default HomeSkeleton;
