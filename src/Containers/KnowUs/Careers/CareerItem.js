import { Link } from 'react-router-dom';

const CareerItem = () => {
    return (
        <Link to="/careers/senior-manager" className="career-item">
            <h4 className="career-name">Senior Manager</h4>
            <p className="career-Location">Mirpur, Dhaka</p>
        </Link>
    );
};

export default CareerItem;
