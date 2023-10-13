/* eslint-disable jsx-a11y/label-has-associated-control */
import { useEffect, useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible, BsFillLockFill, FiPhone } from 'react-icons/all';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import appleIcon from '../../../assets/images/apple.png';
import facebookIcon from '../../../assets/images/facebook.png';
import googleIcon from '../../../assets/images/search.png';
import { registerWithPhone, reset, userLogin, verifyOtp } from '../../../Redux/Auth/authSlice';
// import { getVerificationCode } from '../../../redux/ducks/auth';
import styles from '../Login/Login.module.scss';

const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [title, setTitle] = useState('Create Himel Shop Account.')
    const [formData, setFormData] = useState({
        phone: null,
        password: "",
        confirmPassword: "",
        otp: null
    });

    const dispatch = useDispatch();

    const { phone, password, confirmPassword, otp } = formData;

    const { registerReq, verifyOtpInfo } = useSelector(state => state.auth)

    useEffect(() => {
        if (registerReq) {
            setTitle(registerReq.msg)
        }
        if (verifyOtpInfo) {
            if (verifyOtpInfo.code === 200) {
                dispatch(reset());
                dispatch(userLogin(formData))
            }
            setTitle(verifyOtpInfo.msg)
        }
    }, [registerReq, verifyOtpInfo, dispatch, formData])

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const registerHandler = (e) => {
        e.preventDefault();
        if (formData.password.length < 6) {
            setTitle('Password must be at least 6 character')
        }
        else if (formData.password.length === 0 || formData.password !== formData.confirmPassword) {
            setTitle('Incorrect password and confirm password')
        } else {
            dispatch(registerWithPhone(formData.phone));
        }
    }

    const verifyHandler = (e) => {
        e.preventDefault();
        dispatch(verifyOtp(formData));
    }

    return (
        <div className="container pt-3">
            <div className={styles.authContainer}>
                <div className={styles.auth}>
                    <div className={styles.authNav}>
                        <Link to="/login" className={`${styles.authNavItem}`}>
                            Sign In
                        </Link>
                        <Link
                            to="/sign-up"
                            className={`${styles.authNavItem} ${styles.activeTab}`}
                        >
                            Register
                        </Link>
                    </div>
                    <div className={styles.authTitle}>
                        <h5 className={styles.verifyTitle}> {title} </h5>
                    </div>

                    {registerReq && registerReq.status === 'success' ? (
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
                            <div className={styles.inputButton}>
                                <button type="submit">Verify</button>
                            </div>
                        </form>
                    ) : (
                        <form onSubmit={registerHandler}>
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
                                    type="password"
                                    name="confirmPassword"
                                    id="confirmPassword"
                                    placeholder="Confirm Password"
                                    onChange={onChange}
                                    value={confirmPassword}
                                />
                            </div>
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    value=""
                                    id="check"
                                />
                                <label className={`${styles.label} form-check-label`} htmlFor="check">
                                    I agree to Himelshop.com <Link to="/">Terms of Use </Link> and{' '}
                                    <Link to="/"> Privacy Policy </Link>
                                </label>
                            </div>
                            <div className={styles.inputButton}>
                                <button type="submit">Sign Up</button>
                            </div>
                        </form>
                    )}
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
                        Already have an account? <Link to="/login">Login</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
