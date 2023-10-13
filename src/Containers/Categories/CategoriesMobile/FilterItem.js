import { useEffect, useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';

const FilterItem = ({ filterItem }) => {
    const [show, setShow] = useState(false);
    const [items, setItems] = useState(4);

    const clickHandler = () => {
        setShow(!show);
    };

    useEffect(() => {
        if (show) {
            setItems(filterItem.filters.length);
        } else {
            setItems(4);
        }
    }, [filterItem.filters.length, show]);

    return (
        <div className="sidebarFilterItem">
            <div className="sidebarFilterTitle">
                <h4>Camera</h4>
                <FiChevronDown
                    style={{ transform: `rotate(${show ? '180deg' : '0deg'})` }}
                    onClick={clickHandler}
                />
            </div>
            <div className="sidebarFilters">
                {filterItem.filters.slice(0, items).map((item) => (
                    <div key={item.id} className="item">
                        {item.name}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FilterItem;
