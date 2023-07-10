import discord from 'assets/svg/discord.svg'
import logo from 'assets/svg/logo.svg'
import vk from 'assets/svg/vk.svg'
import AuthorizationModal from 'components/Authorization/AuthorizationModal/AuthorizationModal'
import Layout from 'components/Generic/Layout/Layout'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import { selectIsAuth } from 'redux/features/authSlice'

import styles from './Header.module.css'

const NavLinks = () => {
  return (
    <>
      <a href='https://vk.com/virtualdriving' target='_blank'>
        <img src={vk} alt='vk' className={styles.nav_img} />
      </a>
      <a href='https://discord.gg/tuQxX6F' target='_blank'>
        <img src={discord} alt='discord' className={styles.nav_img} />
      </a>
    </>
  )
}

const Header = () => {
  const isAuth = useSelector(selectIsAuth)
  const [modalActive, setModalActive] = useState(false)
  const [isActive, setActive] = useState(false)
  const color = { color: '#E61F26', opacity: 1 }
  const isActiveNav = ({ isActive }) => (isActive ? color : undefined)
  const toggleClassMenu = () => setActive(!isActive)
  console.log('isAuth', isAuth)
  console.log('isActive', isActive)

  useEffect(() => {
    if (isAuth) {
      setModalActive(false)
    }
  }, [isAuth])

  return (
    <>
      <Layout>
        <header className={styles.header}>
          <div className={styles.header_top}>
            <NavLink to={'/'} className={styles.logo_link}>
              <img src={logo} alt='logo' className={styles.logo} />
            </NavLink>
            <nav
              className={`${styles.navTop} ${isActive ? styles.active : ''}`}
            >
              <NavLink to={'/'} className={styles.navTop_link} style={color}>
                VDES академия
              </NavLink>
              {/* <NavLink to={'/'} className={styles.navTop_link}>
                VDES оборудование
              </NavLink>
              <NavLink to={'/'} className={styles.navTop_link}>
                VDES портал
              </NavLink> */}
              <a
                href='https://virtualdriving.ru/shop'
                target='_blank'
                className={styles.navTop_link}
              >
                VDES магазин
              </a>
              {!isAuth ? (
                <span
                  className={styles.btn}
                  onClick={() => setModalActive(true)}
                >
                  ВОЙТИ
                </span>
              ) : (
                <NavLink to={'administrator/statistics'} className={styles.btn}>
                  Личный кабинет
                </NavLink>
              )}
              <div className={styles.nav__linkInBurger}>
                <NavLinks />
              </div>
            </nav>
            <div onClick={toggleClassMenu} className={styles.burger}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div className={styles.header_bottom}>
            <nav className={styles.navBottom}>
              <NavLink
                to={'services/personal-classes'}
                className={styles.navBottom_link}
                style={isActiveNav}
              >
                Персональные занятия
              </NavLink>
              <NavLink
                to={'services/custom-car'}
                className={styles.navBottom_link}
                style={isActiveNav}
              >
                Сетапы
              </NavLink>
              <NavLink
                to={'services/liveries'}
                className={styles.navBottom_link}
                style={isActiveNav}
              >
                Ливреи
              </NavLink>
              {/* <NavLink
                to={'services/coaches'}
                className={styles.navBottom_link}
                style={isActiveNav}
              >
                Тренеры
              </NavLink>
              <NavLink
                to={'about'}
                className={styles.navBottom_link}
                style={isActiveNav}
              >
                О нас
              </NavLink> */}
            </nav>
            <div className={styles.nav__link}>
              <NavLinks />
            </div>
          </div>
        </header>
      </Layout>
      {isAuth || (
        <AuthorizationModal active={modalActive} setActive={setModalActive} />
      )}
    </>
  )
}

export default Header
