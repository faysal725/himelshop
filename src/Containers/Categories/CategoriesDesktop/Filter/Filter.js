import React, { useState } from 'react';
import { HiOutlineMinusSm, HiOutlinePlusSm } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import '../Common.scss';
import './Filter.scss';

const Filter = ({ filter }) => {
    const [collapse, setCollapse] = useState(filter.collapse);

    return (
        <div className="filter">
            <div
                role="button"
                tabIndex="0"
                onClick={() => setCollapse(!collapse)}
                className="filterTitle"
            >
                {filter.title}
                {collapse ? <HiOutlineMinusSm /> : <HiOutlinePlusSm />}
            </div>
            {collapse && (
                <>
                    <ul>
                        {filter.filter.map((item) => (
                            <li key={item.id}>
                                <span className="filterBox">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        name=""
                                        id={item.id}
                                    />
                                    <label htmlFor={item.id}>
                                        {item.name}
                                        <i>({item.total})</i>
                                    </label>
                                </span>
                            </li>
                        ))}
                    </ul>
                    <Link className="SeeMore" to="/">
                        See More
                    </Link>
                </>
            )}
        </div>
    );
};

export default Filter;
