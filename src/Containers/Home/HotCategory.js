import { Link } from 'react-router-dom';
import image from '../../assets/images/product.jpg';
import CategoryItem from '../../Components/CategoryItem/CategoryItem';
import CategoryItemMob from '../../Components/CategoryItem/CategoryItemMob';
import Title from '../../Components/Title/Title';
import styles from './HotCategory.module.scss';

const HotCategory = () => (
    <div className="container">
        <Title title="Hot Categories" />
        <div className="row g-3 d-none d-md-flex">
            <div className="col-md-4">
                <div
                    className={styles.hotCategoryItem}
                    style={{ background: 'linear-gradient( 135deg ,#d9f5f5,#d3e1f9)' }}
                >
                    <div className="mb-3">
                        <h5>Health,Beauty & Hair</h5>
                        <span>Up to 50% off</span>
                    </div>
                    <div className="row g-3">
                        <div className="col-md-7">
                            <div className="h-100">
                                <CategoryItem image={image} />
                            </div>
                        </div>
                        <div className="col-md-5">
                            <CategoryItem />
                            <div className="mt-2">
                                <CategoryItem />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-8">
                <div className="row g-3">
                    <div className="col-md-6">
                        <div className={styles.hotCategoryItem} style={{ background: '#EADAEB' }}>
                            <Link to="/" className={styles.title}>
                                Consumer Electronics
                            </Link>

                            <div className="row g-2">
                                <div className="col-4">
                                    <CategoryItem />
                                </div>
                                <div className="col-4">
                                    <CategoryItem />
                                </div>
                                <div className="col-4">
                                    <CategoryItem />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className={styles.hotCategoryItem} style={{ background: '#D5D5EF' }}>
                            <Link to="/" className={styles.title}>
                                Consumer Electronics
                            </Link>

                            <div className="row g-2">
                                <div className="col-4">
                                    <CategoryItem />
                                </div>
                                <div className="col-4">
                                    <CategoryItem />
                                </div>
                                <div className="col-4">
                                    <CategoryItem />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className={styles.hotCategoryItem} style={{ background: '#D5D5EF' }}>
                            <Link to="/" className={styles.title}>
                                Consumer Electronics
                            </Link>

                            <div className="row g-2">
                                <div className="col-4">
                                    <CategoryItem />
                                </div>
                                <div className="col-4">
                                    <CategoryItem />
                                </div>
                                <div className="col-4">
                                    <CategoryItem />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className={styles.hotCategoryItem} style={{ background: '#DBE4F3' }}>
                            <Link to="/" className={styles.title}>
                                Consumer Electronics
                            </Link>

                            <div className="row g-2">
                                <div className="col-4">
                                    <CategoryItem />
                                </div>
                                <div className="col-4">
                                    <CategoryItem />
                                </div>
                                <div className="col-4">
                                    <CategoryItem />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="row g-2 g-sm-3 d-md-none">
            <div className="col-3">
                <CategoryItemMob />
            </div>
            <div className="col-3">
                <CategoryItemMob />
            </div>
            <div className="col-3">
                <CategoryItemMob />
            </div>
            <div className="col-3">
                <CategoryItemMob />
            </div>
        </div>
    </div>
);

export default HotCategory;
