import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../static/svg/logo.svg';
import styles from './Header.module.css'

const Header = () => {
    const activeStyles = {
        color: '#ff2121',
    }

    return (
        <>
        <header className={styles.header}>
            <NavLink to={'/'} className={styles.logo_link}>
                <img src={logo} alt="logo" className={styles.logo} />
            </NavLink>
            <nav className={styles.nav}>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <NavLink to={'custom/lessons'} className={styles.nav_link} style={({isActive}) => isActive ? activeStyles : undefined}>ПЕРСОНАЛЬНЫЕ ЗАНЯТИЯ</NavLink>
                    </li>
                    <li className={styles.item}>
                        <NavLink to={'custom/files'} className={styles.nav_link} style={({isActive}) => isActive ? activeStyles : undefined}>СЕТАПЫ, РЕПЛЕИ И ТЕЛЕМЕТРИЯ</NavLink>
                    </li>
                    <li className={styles.item}>
                        <NavLink to={'custom/liveries'} className={styles.nav_link} style={({isActive}) => isActive ? activeStyles : undefined}>ЛИВРЕИ НА ЗАКАЗ</NavLink>
                    </li>
                    <li className={styles.item}>
                        <NavLink to={'about'} className={styles.nav_link} style={({isActive}) => isActive ? activeStyles : undefined}>О НАС</NavLink>
                    </li>
                    <li className={styles.item}>
                        <NavLink to={'authorization/login'} className={styles.nav_link} style={({isActive}) => isActive ? activeStyles : undefined}>ВОЙТИ</NavLink>
                    </li>
                </ul>
                <div class={styles.menu_burger}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </nav>
        </header>
        </>
    )
}

export default Header;