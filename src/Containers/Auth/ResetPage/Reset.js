import { useEffect, useState } from 'react';

import { AiOutlineEye, AiOutlineEyeInvisible, BsFillLockFill, FiPhone } from 'react-icons/all';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import appleIcon from '../../../assets/images/apple.png';
import facebookIcon from '../../../assets/images/facebook.png';
import googleIcon from '../../../assets/images/search.png';
import { forgetPassword, resetPassword } from '../../../Redux/Auth/authSlice';
import styles from './Reset.module.scss';

const Reset = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [resetState, setResetState] = useState('forget')
    const [formData, setFormData] = useState({
        phone: null,
        otp: null,
        password: '',
        confirmPassword: ''
    })
    const [title, setTitle] = useState('Please enter your phone number')

    const { phone, otp, password, confirmPassword } = formData;

    const dispatch = useDispatch()
    const history = useHistory();

    const { forgetPass, resetPass } = useSelector(state => state.auth)


    useEffect(() => {
        if (forgetPass) {
            setTitle(forgetPass.msg)
            if (forgetPass.code === 200) {
                setResetState('otp');
            }
        } else {
            setTitle('Please enter your phone number')
        }

        if (resetPass) {
            setTitle(resetPass.msg)
            if (resetPass.code === 200 && resetPass.status === 'success') {
                history.push('/login')
            }
        }

    }, [dispatch, forgetPass, resetPass, history]);

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const resetHandler = (e) => {
        e.preventDefault();
        dispatch(forgetPassword(phone));
    }

    const verifyHandler = (e) => {
        e.preventDefault();
        dispatch(resetPassword(formData));
    }

    return (
        <div className="container pt-3">
            <div className={styles.authContainer}>
                <div className={styles.auth}>
                    <div className={styles.authNav}>
                        <Link to="/reset" className={`${styles.authNavItem} ${styles.activeTab}`}>
                            Reset
                        </Link>
                        {/* <Link to="/sign-up" className={`${styles.authNavItem} `}>
                            Register
                        </Link> */}
                    </div>
                    <div className={styles.authTitle}>
                        <h5 className={styles.welcomeTitle}>{title}</h5>
                    </div>
                    {resetState === 'forget' && (
                        <form onSubmit={resetHandler}>
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
                            <div className={styles.inputButton}>
                                <button type="submit">Confirm</button>
                            </div>
                        </form>
                    )}
                    {resetState === 'otp' && (
                        <form onSubmit={verifyHandler}>
                            <div className={styles.inputGroup}>
                                <input
                                    className={styles.input}
                                    type="text"
                                    name="otp"
                                    id="otp"
                                    placeholder="OTP Number"
                                    onChange={onChange}
                                    value={otp}
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
                                    placeholder="Password"
                                    value={password}
                                    onChange={onChange}
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
                            <div className={styles.inputGroup}>
                                <BsFillLockFill className={styles.inputIcon} />
                                <input
                                    className={styles.input}
                                    type={showConfirmPassword ? 'text' : 'password'}
                                    name="confirmPassword"
                                    id="confirmPassword"
                                    placeholder="Confirm Password"
                                    onChange={onChange}
                                    value={confirmPassword}
                                />
                                {showConfirmPassword ? (
                                    <AiOutlineEye
                                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                        className={styles.showPassword}
                                    />
                                ) : (
                                    <AiOutlineEyeInvisible
                                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                        className={styles.showPassword}
                                    />
                                )}
                            </div>
                            <div className={styles.inputButton}>
                                <button type="submit">Reset Password</button>
                            </div>
                        </form>
                    )}
                    {/* <span className={styles.forgetPassword}>Forgot your password?</span> */}
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

export default Reset;
