import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../static/svg/logo.svg';
import './header.css'

const Header = () => {
    return (
        <>
        <header className="header">
            <NavLink to={'/'} className="header__logo-link">
                <img src={logo} alt="logo" className="header__logo" />
            </NavLink>
            <nav className="header__nav">
                <ul className="header__list">
                    <li className="header__item">
                        <NavLink to={'/'} className="header__nav-link">УСЛУГИ</NavLink>
                    </li>
                    <li className="header__item">
                        <NavLink to={'/about'} className="header__nav-link">О НАС</NavLink>
                    </li>
                    <li className="header__item">
                        <NavLink to={'/authorization'} className="header__nav-link">ВОЙТИ</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
        </>
    )
}

export default Header;