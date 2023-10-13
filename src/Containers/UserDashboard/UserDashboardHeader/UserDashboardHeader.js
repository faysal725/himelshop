import { HiArrowLeft } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import image from '../../../assets/images/person.jpeg';
import './UserDashboardHeader.scss';

const UserDashboardHeader = () => {
    return (
        <div className="user-dashboard-header">
            <div className="user-dashboard-header-wrapper">
                <div className="header-label">
                    <Link to="/">
                        <HiArrowLeft
                            style={{ fontSize: '25px', color: '#fff', marginRight: '8px' }}
                        />
                    </Link>
                    <Link to="/user-profile" style={{ color: '#fff' }}>
                        Dashboard
                    </Link>
                </div>
                <div className="user-section">
                    <div className="username">Sujon Hossain</div>
                    <div className="user-img">
                        <img src={image} alt="Not working" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserDashboardHeader;
