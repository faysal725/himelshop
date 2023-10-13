/* eslint-disable no-param-reassign */

import { useEffect } from 'react';
import './DeskTopNavs.scss';

const DeskTopNavs = () => {
    function $(selector) {
        return document.querySelector(selector);
    }

    useEffect(() => {
        const parent = $('.desktopNavs').parentElement;
        const sideBtn = $('#sideBtn');
        const tabsContainer = $('#tabsContainer');

        // tabs elements
        const desktopOverview = $('#desktopOverview');
        const desktopSpecification = $('#desktopSpecification');
        const desktopQna = $('#desktopQna');
        const desktopReview = $('#desktopReview');

        const offsetTopValue = parent.offsetTop;
        Object.assign(parent.style, { zIndex: 30 });
        sideBtn.style.display = 'none';

        function addPadding(selector, selectElement) {
            $(selector).addEventListener('click', () => {
                selectElement.style.paddingTop = '60px';
            });
        }
        function removePadding(selectElement) {
            selectElement.style.paddingTop = '1.5rem';
        }
        addPadding('#one', desktopOverview);
        addPadding('#two', desktopSpecification);
        addPadding('#three', desktopQna);
        addPadding('#four', desktopReview);

        window.addEventListener('scroll', () => {
            const currentScrollPos = window.pageYOffset;

            if (currentScrollPos > offsetTopValue) {
                sideBtn.style.display = 'flex';
                parent.classList.add('parent-scroll');
                tabsContainer.style.borderBottom = 'none';
            } else {
                sideBtn.style.display = 'none';
                parent.classList.remove('parent-scroll');
                tabsContainer.style.borderBottom = '1px solid #ebedf0';

                // remove padding elements
                removePadding(desktopOverview);
                removePadding(desktopSpecification);
                removePadding(desktopQna);
                removePadding(desktopReview);
            }
        });
    }, []);

    return (
        <div className="desktopNavs mt-3">
            <div className="container" id="tabsContainer">
                <nav id="DesktopTabs" className="navbar">
                    <ul id="desktopTopNavsFixed" className="nav-pills d-flex bg-white">
                        <li>
                            <a className="nav-link active" id="one" href="#desktopOverview">
                                Overview
                            </a>
                        </li>
                        <li>
                            <a className="nav-link" id="two" href="#desktopSpecification">
                                Specification
                            </a>
                        </li>
                        <li>
                            <a className="nav-link" id="three" href="#desktopReview">
                                Review
                            </a>
                        </li>

                        <li>
                            <a className="nav-link" id="four" href="#desktopQna">
                                Q&As
                            </a>
                        </li>
                        <li>
                            <a className="nav-link" id="five" href="#desktopShipment">
                                Shipment
                            </a>
                        </li>
                    </ul>
                    <div className="productAction" id="sideBtn">
                        <button type="button" className="buyNowBtn">
                            Buy Now
                        </button>
                        <button type="button" className="addToCartBtn">
                            Add To Cart
                        </button>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default DeskTopNavs;
