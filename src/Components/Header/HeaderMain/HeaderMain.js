import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { FiUser } from 'react-icons/fi';
import { RiShoppingCartLine } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import brand from '../../../assets/images/himel-shop.png';
import { logout } from '../../../Redux/Auth/authSlice';
import styles from './HeaderMain.module.scss';

const HeaderMain = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const [profileActive, setProfileActive] = useState(false);

  const logoutHandler = (e) => {
    e.preventDefault();
    dispatch(logout());
  };
  return (
    <div className="row align-items-center">
      <div className="col-lg-2 col-md-3 pe-lg-0">
        <Link to="/" className={styles.headerLogo}>
          <img
            title="Himel Shop"
            className="img-fluid"
            src={brand}
            alt="Himel-shop"
          />
        </Link>
      </div>
      <div className="col-lg-8 col-md-6">
        <form className={styles.headerSearch}>
          <input
            type="text"
            name="search"
            id=""
            className={styles.headerInput}
            placeholder="Search For Products ..."
          />
          <button className={styles.button} type="submit">
            <FaSearch />
          </button>
        </form>
      </div>
      <div className="col-lg-2 col-md-3">
        <div className={styles.headerInfo}>
          <div
            className={styles.user}
            onClick={() => setProfileActive(!profileActive)}
            role="none"
          >
            {user && user.code === 200 ? (
              <>
                <FiUser className={styles.userIcon} />
                {user && user.data && user.data.name && (
                  <div className={styles.userInfo}>
                    <span>Hello</span>
                    <span>John Doe</span>
                  </div>
                )}
                {profileActive && (
                  <div className={styles.profile}>
                    <ul>
                      <Link to="/profile">Profile</Link>
                      <Link to="/" onClick={logoutHandler}>
                        logout
                      </Link>
                    </ul>
                  </div>
                )}
              </>
            ) : (
              <>
                <FiUser className={styles.userIcon} />
                <Link to="/login" className={styles.userInfo}>
                  <span>Hello</span>
                  <span>Sign In</span>
                </Link>
              </>
            )}
          </div>
          <Link to="/shopping-cart" className={styles.cart}>
            <RiShoppingCartLine className={styles.cartIcon} />
            <span className={styles.cartItem}>9+</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeaderMain;
