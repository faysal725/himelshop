import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import CategoryItemMob from '../../../Components/CategoryItem/CategoryItemMob';

const CategoriesItem = () => {
    const [collapse, setCollapse] = useState(true);

    return (
        <div className="mobCategoriesItem">
            <div className="mobCategoriesTitle">
                <Link to="/"> Office Furniture </Link>
                <FaChevronDown
                    style={{
                        transition: 'all 0.3s',
                        transform: `rotate(${collapse ? '180deg' : '0deg'})`,
                    }}
                    onClick={() => setCollapse(!collapse)}
                />
            </div>
            {collapse && (
                <div className="row mb-3 g-2 me-1">
                    <div className="col-4">
                        <CategoryItemMob />
                    </div>
                    <div className="col-4">
                        <CategoryItemMob />
                    </div>
                    <div className="col-4">
                        <CategoryItemMob />
                    </div>
                    <div className="col-4">
                        <CategoryItemMob />
                    </div>
                    <div className="col-4">
                        <CategoryItemMob />
                    </div>
                </div>
            )}
        </div>
    );
};

export default CategoriesItem;
