import { useState } from 'react';
import { HiOutlineChevronRight } from 'react-icons/hi';
import StickyBox from 'react-sticky-box';
import ProductWithReview from '../../../Components/Common/Product/ProductWithReview/ProductWithReview';
import Brands from './Brands/Brands';
import './Categories.scss';
import Filter from './Filter/Filter';
import filterData from './FilterData.json';
import RelatedCategory from './RelatedCategory/RelatedCategory';

const CategoriesDesktop = ({ products }) => {
    const [focus, setFocus] = useState(false);

    return (
        <>
            <div className="categoriesWrapper d-none d-md-block">
                <div className="container">
                    <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                        <StickyBox offsetTop={10} offsetBottom={10}>
                            <div className="categoryFilter">
                                <div className="categoryFilterLeft">
                                    <RelatedCategory />
                                    <Brands />
                                    {filterData.map((filter) => (
                                        <Filter filter={filter} key={filter.id} />
                                    ))}
                                </div>
                            </div>
                        </StickyBox>
                        <div>
                            <div>
                                <div className="breadcrumbWidget">
                                    <a href="/" className="breadcrumbItem">
                                        Home <HiOutlineChevronRight />
                                    </a>
                                    <a href="/" className="breadcrumbItem">
                                        Electronics <HiOutlineChevronRight />
                                    </a>
                                    <a href="/" className="breadcrumbItem">
                                        Headphones & EarPhones <HiOutlineChevronRight />
                                    </a>
                                </div>
                                <div className="filterLevel">
                                    <div className="blockItem">
                                        <div className="priceBox">
                                            <div className="priceInput">
                                                <span className="blockTitle">Price</span>
                                                <input
                                                    type="text"
                                                    className="priceInput"
                                                    placeholder="min"
                                                    onFocus={() => setFocus(true)}
                                                    onBlur={() => setFocus(false)}
                                                />
                                                -{' '}
                                                <input
                                                    type="text"
                                                    className="priceInput"
                                                    placeholder="max"
                                                    onFocus={() => setFocus(true)}
                                                    onBlur={() => setFocus(false)}
                                                />
                                            </div>
                                            <div
                                                className="priceOk"
                                                style={{ display: `${focus ? 'block' : 'none'}` }}
                                            >
                                                <button
                                                    type="button"
                                                    onClick={() => setFocus(false)}
                                                >
                                                    Ok
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="blockItem">
                                        <span className="filterBox">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                name=""
                                                id="24hour"
                                            />
                                            <label htmlFor="24hour">Ship to 24 hours</label>
                                        </span>
                                    </div>
                                </div>
                                <div className="filterLevel mb-4">
                                    <span className="blockTitle">Sort By</span>
                                    <span className="sortItem">
                                        <a href="/">Popular</a>
                                        <a href="/">Newest</a>
                                        <a href="/">Most Reviews</a>
                                        <a href="/">Price</a>
                                    </span>
                                </div>
                                <div className="row g-3">
                                    {products.map((product) => (
                                        <div className="col-md-4 col-lg-3" key={product.id}>
                                            <ProductWithReview product={product} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CategoriesDesktop;
