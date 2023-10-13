/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useEffect, useState } from 'react';
import { AiOutlineAppstore } from 'react-icons/ai';
import { FiFilter } from 'react-icons/fi';
import { RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';
import { TiThListOutline } from 'react-icons/ti';
import Sidebar from 'react-sidebar';
import ProductList from '../../../Components/Common/Product/ProductList/ProductList';
import ProductWithoutSolid from '../../../Components/Common/Product/ProductWithoutSolid/ProductWithoutSolid';
import './CategoriesMobile.scss';
import FilterItem from './FilterItem';

const filterItem = {
    id: 1,
    name: 'Camera',
    filters: [
        { id: 1, name: '150 Mp' },
        { id: 2, name: '150 Mp' },
        { id: 3, name: '150 Mp' },
        { id: 4, name: '150 Mp' },
        { id: 5, name: '150 Mp' },
        { id: 6, name: '150 Mp' },
    ],
};

const CategoriesMobile = ({ products }) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const onSetSidebarOpen = (open) => {
        setSidebarOpen(open);
    };
    const [isList, setIsList] = useState(false);
    const [isOverlay, setIsOverlay] = useState(false);

    useEffect(() => {
        const filterSection = document.querySelector('#filterSection');
        let scrollPosition = window.pageYOffset;

        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;

            if (scrollPosition > currentScrollPos) {
                filterSection.classList.add('hidden');
            } else {
                filterSection.classList.remove('hidden');
            }
            scrollPosition = currentScrollPos;
        };
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const addOverlay = () => {
        const { body } = document;
        body.classList.add('categoryOverlay');
        body.style.overflow = 'hidden';
        setIsOverlay(true);
    };

    useEffect(() => {
        if (isOverlay) {
            document.body.addEventListener('click', () => {
                document.body.classList.remove('categoryOverlay');
                document.body.style.overflow = 'scroll';
                setIsOverlay(false);
            });
        }
    }, [isOverlay]);

    return (
        <div className="mobileCategoriesWrapper">
            <Sidebar
                sidebar={
                    <div className="sidebarWrapper">
                        <div className="sidebarFilerWrapper">
                            <FilterItem filterItem={filterItem} />
                        </div>
                        <div className="menu-btn">
                            <button type="button" className="first">
                                Reset
                            </button>
                            <button type="button" className="second">
                                Done
                            </button>
                        </div>
                    </div>
                }
                open={sidebarOpen}
                pullRight
                onSetOpen={onSetSidebarOpen}
                styles={{
                    sidebar: { background: 'white', width: '80%', zIndex: 2000, position: 'fixed' },
                    overlay: { zIndex: 222 },
                }}
            />

            <div className="categoriesMobWrapper">
                <div className="filterSection" id="filterSection">
                    <div className="dropdown">
                        <div
                            className="sort"
                            id="mostPopular"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                            onClick={addOverlay}
                        >
                            <span className="sort-text">Most Popular</span>
                            <RiArrowDownSLine />
                        </div>
                        <ul className="dropdown-menu" aria-labelledby="mostPopular">
                            <li>
                                <button className="dropdown-item" type="button">
                                    Action
                                </button>
                            </li>
                            <li>
                                <button className="dropdown-item" type="button">
                                    Another action
                                </button>
                            </li>
                            <li>
                                <button className="dropdown-item" type="button">
                                    Something else here
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div className="price">
                        <span>Price</span>
                        <div className="arrows">
                            <RiArrowUpSLine />
                            <RiArrowDownSLine />
                        </div>
                    </div>
                    <div className="store">
                        {isList && <AiOutlineAppstore onClick={() => setIsList(false)} />}
                        {!isList && <TiThListOutline onClick={() => setIsList(true)} />}
                    </div>
                    <div className="filter" onClick={() => onSetSidebarOpen(true)}>
                        <FiFilter />
                        <span>Filter</span>
                    </div>
                </div>

                <div className="container sibling">
                    {isList && (
                        <div className="row bg-white add-space">
                            {products.map((product) => (
                                <div className="col-12 " key={product.id}>
                                    <ProductList product={product} />
                                </div>
                            ))}
                        </div>
                    )}
                    {!isList && (
                        <div className="row g-2 add-space">
                            {products.map((product) => (
                                <div className="col-6 " key={product.id}>
                                    <ProductWithoutSolid product={product} />
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CategoriesMobile;
