import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.css'
import logo from '../../static/svg/logo.svg';

const Header = () => {
    const activeStyles = {
        color: '#ff2121',
    }

    return (
        <>
        <header className="header">
            <NavLink to={'/'} className="header__logo-link">
                <img src={logo} alt="logo" className="header__logo" />
            </NavLink>
            <nav className="header__nav">
                <ul className="header__list">
                    <li className="header__item">
                        <NavLink to={'custom/lessons'} className="header__nav-link" style={({isActive}) => isActive ? activeStyles : undefined}>ПЕРСОНАЛЬНЫЕ ЗАНЯТИЯ</NavLink>
                    </li>
                    <li className="header__item">
                        <NavLink to={'custom/files'} className="header__nav-link" style={({isActive}) => isActive ? activeStyles : undefined}>СЕТАПЫ, РЕПЛЕИ И ТЕЛЕМЕТРИЯ</NavLink>
                    </li>
                    <li className="header__item">
                        <NavLink to={'custom/liveries'} className="header__nav-link" style={({isActive}) => isActive ? activeStyles : undefined}>ЛИВРЕИ НА ЗАКАЗ</NavLink>
                    </li>
                    <li className="header__item">
                        <NavLink to={'about'} className="header__nav-link" style={({isActive}) => isActive ? activeStyles : undefined}>О НАС</NavLink>
                    </li>
                    <li className="header__item">
                        <NavLink to={'authorization/login'} className="header__nav-link" style={({isActive}) => isActive ? activeStyles : undefined}>ВОЙТИ</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
        </>
    )
}

export default Header;