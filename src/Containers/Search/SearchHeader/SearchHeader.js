import { GoSearch } from 'react-icons/go';
import { HiArrowLeft } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import './SearchHeader.scss';

const SearchHeader = () => {
    return (
        <div className="search-header">
            <div className="search-header-arrow">
                <Link className="search-header-arrow-link" to="/">
                    <HiArrowLeft />
                </Link>
            </div>
            <div className="search-header-box">
                <input type="text" name="" id="" placeholder="Search Himel Shop" />
            </div>
            <div className="search-header-button">
                <GoSearch className="search-icon" />
            </div>
        </div>
    );
};

export default SearchHeader;
