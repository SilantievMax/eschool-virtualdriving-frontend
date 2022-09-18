import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/svg/logo.svg';
import styles from './Header.module.css'

const Header = () => {
    const activeStyles = {
        color: '#e61f26',
    }

    const isLoading = true;

    return (
        <>
        <header className={styles.header}>
            <NavLink to={'/'} className={styles.logo_link}>
                <img src={logo} alt="logo" className={styles.logo} />
            </NavLink>
            <nav className={styles.nav}>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <NavLink to={'services/personal-classes'} className={styles.nav_link} style={({isActive}) => isActive ? activeStyles : undefined}>Персональные занятия</NavLink>
                    </li>
                    <li className={styles.item}>
                        <NavLink to={'services/custom-car'} className={styles.nav_link} style={({isActive}) => isActive ? activeStyles : undefined}>Сетапы</NavLink>
                    </li>
                    <li className={styles.item}>
                        <NavLink to={'services/liveries'} className={styles.nav_link} style={({isActive}) => isActive ? activeStyles : undefined}>Ливреи</NavLink>
                    </li>
                    <li className={styles.item}>
                        <NavLink to={'services/equipment'} className={styles.nav_link} style={({isActive}) => isActive ? activeStyles : undefined}>Оборудование</NavLink>
                    </li>
                    <li className={styles.item}>
                        <NavLink to={'services/coaches'} className={styles.nav_link} style={({isActive}) => isActive ? activeStyles : undefined}>Тренеры</NavLink>
                    </li>
                    <li className={styles.item}>
                        <NavLink to={'about'} className={styles.nav_link} style={({isActive}) => isActive ? activeStyles : undefined}>О нас</NavLink>
                    </li>
                    <li className={styles.item}>
                        <NavLink to={'authorization/login'} className={styles.nav_link} style={({isActive}) => isActive ? activeStyles : undefined}>Войти</NavLink>
                    </li>
                    {isLoading ? (
                    <li className={styles.item}>
                        <NavLink to={'administrator/statistics'} className={styles.nav_link} style={({isActive}) => isActive ? activeStyles : undefined}>admin</NavLink>
                    </li>
                    ) : ('')}
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