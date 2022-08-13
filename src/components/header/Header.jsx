import logo from '../../static/svg/logo.svg';
import './header.css'

const Header = () => {
    return (
        <>
        <header className="header">
            <a href="#" className="header__logo-link">
                <img src={logo} alt="logo" className="header__logo" />
            </a>
            <nav className="header__nav">
                <ul className="header__list">
                    <li className="header__item">
                        <a href="#" className="header__nav-link">УСЛУГИ</a>
                    </li>
                    <li className="header__item">
                        <a href="#" className="header__nav-link">О НАС</a>
                    </li>
                    <li className="header__item">
                        <a href="#" className="header__nav-link">ВОЙТИ</a>
                    </li>
                </ul>
            </nav>
        </header>
        </>
    )
}

export default Header;