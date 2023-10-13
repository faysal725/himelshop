import { FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import './Title.scss';

const Title = ({ Icon, title, color, link, subTitle }) => (
    <div className="title">
        <div className="titleName">
            {Icon && <Icon style={{ color }} className="titleIcon" />}
            <h5>
                {title} {subTitle && <span className="subTitle"> {subTitle} </span>}
            </h5>
        </div>
        {link && (
            <Link to={`/${link}`} className="titleSeeMore">
                <span>See More</span>
                <FiChevronRight className="titleSeeMoreIcon" />
            </Link>
        )}
    </div>
);

export default Title;
