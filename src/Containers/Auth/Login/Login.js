import { useEffect, useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible, BsFillLockFill, FiPhone } from 'react-icons/all';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import appleIcon from '../../../assets/images/apple.png';
import facebookIcon from '../../../assets/images/facebook.png';
import googleIcon from '../../../assets/images/search.png';
import { reset, userLogin } from '../../../Redux/Auth/authSlice';
import styles from './Login.module.scss';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        phone: null,
        password: ''
    })
    const [title, setTitle] = useState('')

    const { phone, password } = formData;

    const dispatch = useDispatch();

    const { user } = useSelector(state => state.auth);


    useEffect(() => {
        if (!user || user.code === 401) {
            setTitle('Welcome to HimelShop! Please login.');
        } else {
            setTitle(user.msg);
        }
    }, [user]);

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const loginHandler = (e) => {
        e.preventDefault();
        dispatch(reset());
        dispatch(userLogin(formData));
    }

    return (
        <div className="container pt-3">
            <div className={styles.authContainer}>
                <div className={styles.auth}>
                    <div className={styles.authNav}>
                        <Link to="/login" className={`${styles.authNavItem} ${styles.activeTab}`}>
                            Sign In
                        </Link>
                        <Link to="/sign-up" className={`${styles.authNavItem} `}>
                            Register
                        </Link>
                    </div>
                    <div className={styles.authTitle}>
                        <h5 className={styles.welcomeTitle}>{title}</h5>
                    </div>
                    <form onSubmit={loginHandler}>
                        <div className={styles.inputGroup}>
                            <FiPhone className={styles.inputIcon} />
                            <input
                                className={styles.input}
                                type="tel"
                                name="phone"
                                id="phone"
                                value={phone}
                                placeholder="Phone Number"
                                onChange={onChange}
                                autoFocus
                            />
                        </div>
                        <div className={styles.inputGroup}>
                            <BsFillLockFill className={styles.inputIcon} />
                            <input
                                className={styles.input}
                                type={showPassword ? 'text' : 'password'}
                                name="password"
                                id="password"
                                value={password}
                                onChange={onChange}
                                placeholder="Password"
                            />
                            {showPassword ? (
                                <AiOutlineEye
                                    onClick={() => setShowPassword(!showPassword)}
                                    className={styles.showPassword}
                                />
                            ) : (
                                <AiOutlineEyeInvisible
                                    onClick={() => setShowPassword(!showPassword)}
                                    className={styles.showPassword}
                                />
                            )}
                        </div>
                        <div className={styles.inputButton}>
                            <button type="submit">Login</button>
                        </div>
                    </form>
                    <Link to='/reset' className={styles.forgetPassword} >Forgot your password?</Link>
                    <h5 className={styles.loginWithSocial}>Login With Social Account</h5>
                    <div className={styles.authWith}>
                        <button type="button">
                            <img className="img-fluid" src={facebookIcon} alt="" />
                        </button>
                        <button type="button">
                            <img
                                style={{ width: '26px' }}
                                className="img-fluid"
                                src={googleIcon}
                                alt=""
                            />
                        </button>
                        <button type="button">
                            <img
                                style={{ width: '27px' }}
                                className="img-fluid"
                                src={appleIcon}
                                alt=""
                            />
                        </button>
                    </div>
                    <div className={styles.link}>
                        Don't have any account? <Link to="/sign-up">Sign Up</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
