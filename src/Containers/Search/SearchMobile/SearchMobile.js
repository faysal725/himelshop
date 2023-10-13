import { Link } from 'react-router-dom';
import './SearchMobile.scss';

const SearchMobile = () => {
    return (
        <div className="container">
            <div className="search-mobile">
                <h6 className="search-mobile-title">Hot Searches</h6>
                <div className="search-mobile-list">
                    <Link to="/" className="search-mobile-list-item">
                        apple
                    </Link>
                    <Link to="/" className="search-mobile-list-item">
                        google
                    </Link>
                    <Link to="/" className="search-mobile-list-item">
                        naomi
                    </Link>
                    <Link to="/" className="search-mobile-list-item">
                        bakeey
                    </Link>
                    <Link to="/" className="search-mobile-list-item">
                        diatone
                    </Link>
                    <Link to="/" className="search-mobile-list-item">
                        hoco
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SearchMobile;
