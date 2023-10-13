/* eslint-disable prefer-rest-params */
import React, { Suspense, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import bannerImage from "../../assets/images/banner-image.png";
import FooterTop from "../../Components/Footer/FooterTop";
import { useSizeContext } from "../../contexts/SizeContextProvider";
import BannerSkeleton from "../../Skeleton/Home/BannerSkeleton";
import CategoriesSkeleton from "../../Skeleton/Home/CategoriesSkeleton";
import CategorySkeleton from "../../Skeleton/Home/CategorySkeleton";
import NewUserSkeleton from "../../Skeleton/Home/NewUserSkeleton";
import TopBrandSkeleton from "../../Skeleton/Home/TopBrandSkeleton";
import ProductsSkeleton from "../../Skeleton/ProductsSkeleton/ProductsSkeleton";
// import fakeRoutes from './fakeRoutes.json';
import FiveNavs from "./FiveNavs";
import "./Home.scss";

const Flash = React.lazy(() => import("./Flash"));
const New = React.lazy(() => import("./New"));
const Banner = React.lazy(() => import("./Banner"));
const PreOrder = React.lazy(() => import("./PreOrder"));
const Products = React.lazy(() => import("./Products"));
const TopBrand = React.lazy(() => import("./TopBrand"));
const Categories = React.lazy(() => import("./Categories"));
const Slider = React.lazy(() =>
  import("../../Components/Custom/Slider/Slider")
);
const NewUserBenefit = React.lazy(() => import("./NewUserBenefit"));
const FlashDealsMob = React.lazy(() => import("./FlashDealsMob"));
const HotCategory = React.lazy(() => import("./HotCategory"));

const Home = () => {
  const { categories } = useSelector((state) => state.category);

  const { isMobile, isDesktop } = useSizeContext();

  const colors = ["salmon", "#7573fd", "#0d6efd", "lightblue"];
  const [count, setCount] = useState(0);
  const backgroundColorHandler = () => {
    setCount((prev) => prev + 1);
  };

  if (colors.length === count) {
    setCount(0);
  }

  return (
    <>
      <section className="homeWrapper">
        <section
          className="parentHeader"
          style={{ background: `${colors[count]}` }}
        >
          <div className="container">
            <div className="row">
              {categories && (
                <div className="col-md-3 col-lg-2 pe-lg-0 d-none d-md-block">
                  <Suspense fallback={<CategorySkeleton />}>
                    <Categories categories={categories} />
                  </Suspense>
                </div>
              )}
              <div className="col-12 col-md-9  col-lg-8">
                <Suspense fallback={<BannerSkeleton />}>
                  <Slider backgroundColorHandler={backgroundColorHandler} />
                </Suspense>
              </div>
              <div className="col-md-0 col-lg-2 ps-lg-0 d-none d-lg-block ">
                <Suspense fallback={<NewUserSkeleton />}>
                  <Banner />
                </Suspense>
              </div>
            </div>
          </div>
        </section>

        {isMobile && <FiveNavs />}

        <div className="container">
          <Link to="/">
            <img
              className="img-fluid bannerImage  mb-2"
              src={bannerImage}
              alt=""
            />
          </Link>
        </div>

        {isMobile && (
          <div className="container d-md-none">
            <div className="policy-box">
              <p>
                <span className="text">
                  <strong>7 Days</strong>
                  DOA Product Guarantee
                </span>
              </p>
              <p>
                <span className="text">
                  <strong>30 Days</strong>
                  No Reason Return
                </span>
              </p>
            </div>
          </div>
        )}

        {isDesktop && (
          <Suspense fallback={<ProductsSkeleton />}>
            <Flash />
          </Suspense>
        )}

        {isMobile && (
          <>
            <Suspense fallback={<div>Loading...</div>}>
              <NewUserBenefit />
            </Suspense>
            <Suspense fallback={<div>Loading...</div>}>
              <FlashDealsMob />
            </Suspense>
          </>
        )}

        {isDesktop && (
          <>
            <Suspense fallback={<ProductsSkeleton />}>
              <PreOrder />
            </Suspense>

            <Suspense fallback={<ProductsSkeleton />}>
              <New />
            </Suspense>
          </>
        )}

        <Suspense fallback={<TopBrandSkeleton />}>
          <TopBrand />
        </Suspense>

        {isDesktop && (
          <Suspense fallback={<CategoriesSkeleton />}>
            <HotCategory />
          </Suspense>
        )}

        <Suspense fallback={<ProductsSkeleton />}>
          <Products />
        </Suspense>
      </section>

      {isDesktop && <FooterTop />}
    </>
  );
};

export default Home;
