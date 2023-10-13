import { HiOutlineChevronRight } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import './Breadcrumb.scss';

const Breadcrumb = ({ links }) => (
    <div className="breadcrumbWidget">
        {links.map((link) => (
            <Link to={link.href} className="breadcrumbItem" key={link.href}>
                {link.name} <HiOutlineChevronRight />
            </Link>
        ))}
    </div>
);

export default Breadcrumb;
