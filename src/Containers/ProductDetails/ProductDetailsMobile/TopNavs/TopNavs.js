import React, { useEffect } from 'react';
import './TopNavs.scss';

const TopNavs = () => {
    useEffect(() => {
        const topNav = document.getElementById('productDetails');
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            if (currentScrollPos > 50) {
                topNav.style.display = 'block';
            } else {
                topNav.style.display = 'none';
            }
        };
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav id="productDetails" className="navbar ">
            <ul className="top-navs nav-pills">
                <li>
                    <a className="nav-link" href="#overview">
                        Overview
                    </a>
                </li>
                <li>
                    <a className="nav-link" href="#description">
                        Description
                    </a>
                </li>
                <li>
                    <a className="nav-link" href="#recommendation">
                        Recommendation
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default TopNavs;
