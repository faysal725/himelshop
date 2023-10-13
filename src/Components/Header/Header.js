import styles from './Header.module.scss';
import HeaderMain from './HeaderMain/HeaderMain';
import HeaderMenu from './HeaderMenu/HeaderMenu';
import HeaderTop from './HeaderTop/HeaderTop';

const Header = () => (
    <header className={`${styles.header} d-none d-md-block`}>
        <div className="container">
            <HeaderTop />
            <HeaderMain />
            <HeaderMenu />
        </div>
    </header>
);

export default Header;
