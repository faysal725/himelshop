import React, { useState } from 'react';
import { HiOutlineMinusSm, HiOutlinePlusSm } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import '../Common.scss';
import styles from './Brands.module.scss';

const Brands = () => {
    const [collapse, setCollapse] = useState(true);

    return (
        <div className={styles.categoryBrands}>
            <div
                className="filterTitle"
                role="button"
                tabIndex="0"
                onClick={() => setCollapse(!collapse)}
            >
                Brands
                {collapse ? <HiOutlineMinusSm /> : <HiOutlinePlusSm />}
            </div>
            {collapse && (
                <>
                    <ul>
                        <li>
                            <a href="/">
                                <img
                                    src="https://imgaz.staticbg.com/brands/20190624205531_208.jpg.webp"
                                    alt=""
                                />
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                <img
                                    src="https://imgaz.staticbg.com/brands/20190623211827_727.jpg.webp"
                                    alt=""
                                />
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                <img
                                    src="https://imgaz.staticbg.com/brands/20190624205531_208.jpg.webp"
                                    alt=""
                                />
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                <img
                                    src="https://imgaz.staticbg.com/brands/20190623211827_727.jpg.webp"
                                    alt=""
                                />
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                <img
                                    src="https://imgaz.staticbg.com/brands/20190624205531_208.jpg.webp"
                                    alt=""
                                />
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                <img
                                    src="https://imgaz.staticbg.com/brands/20190623211827_727.jpg.webp"
                                    alt=""
                                />
                            </a>
                        </li>
                    </ul>
                    <Link className="SeeMore" to="/">
                        See More
                    </Link>
                </>
            )}
        </div>
    );
};

export default Brands;
