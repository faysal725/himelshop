import React from 'react';
import { Link } from 'react-router-dom';

const FiveNavs = () => (
    <div className="container d-md-none">
        <ul className="fiveNavs">
            <li>
                <Link to="/">
                    <i className="nav-icon game-icon" />
                    <span className="navTitle">Game</span>
                </Link>
            </li>
            <li>
                <Link to="/">
                    <i className="nav-icon coupons-icon" />
                    <span className="navTitle">Coupons</span>
                </Link>
            </li>
            <li>
                <Link to="/">
                    <i className="nav-icon saving-icon" />
                    <span className="navTitle">Group By</span>
                </Link>
            </li>
            <li>
                <Link to="/">
                    <i className="nav-icon slash-icon" />
                    <span className="navTitle">Sales</span>
                </Link>
            </li>
            <li>
                <Link to="/">
                    <i className="nav-icon snatch-icon" />
                    <span className="navTitle">Sales</span>
                </Link>
            </li>
        </ul>
    </div>
);

export default FiveNavs;
