import logo from 'assets/svg/logo.svg'
import React from 'react'
import { NavLink } from 'react-router-dom'

import styles from './HeaderV2.module.css'

const Header = () => {
	const activeStyles = {
		color: '#e61f26',
		opacity: 1
	}

	return (
		<>
			<header className={styles.header}>
				<div className={styles.header_top}>
					<NavLink to={'/'} className={styles.logo_link}>
						<img src={logo} alt='logo' className={styles.logo} />
					</NavLink>
					<NavLink to={'authorization/login'} className={styles.btn}>
						ВОЙТИ
					</NavLink>
				</div>
				<div className={styles.header_bottom}>
					<nav className={styles.nav}>
						<ul className={styles.list}>
							<li className={styles.item}>
								<NavLink
									to={'services/personal-classes'}
									className={styles.nav_link}
									style={({ isActive }) =>
										isActive ? activeStyles : undefined
									}
								>
									Персональные занятия
								</NavLink>
							</li>
							<li className={styles.item}>
								<NavLink
									to={'services/custom-car'}
									className={styles.nav_link}
									style={({ isActive }) =>
										isActive ? activeStyles : undefined
									}
								>
									Сетапы
								</NavLink>
							</li>
							<li className={styles.item}>
								<NavLink
									to={'services/liveries'}
									className={styles.nav_link}
									style={({ isActive }) =>
										isActive ? activeStyles : undefined
									}
								>
									Ливреи
								</NavLink>
							</li>
							<li className={styles.item}>
								<NavLink
									to={'services/equipment'}
									className={styles.nav_link}
									style={({ isActive }) =>
										isActive ? activeStyles : undefined
									}
								>
									Оборудование
								</NavLink>
							</li>
							<li className={styles.item}>
								<NavLink
									to={'services/coaches'}
									className={styles.nav_link}
									style={({ isActive }) =>
										isActive ? activeStyles : undefined
									}
								>
									Тренеры
								</NavLink>
							</li>
							<li className={styles.item}>
								<NavLink
									to={'about'}
									className={styles.nav_link}
									style={({ isActive }) =>
										isActive ? activeStyles : undefined
									}
								>
									О нас
								</NavLink>
							</li>
						</ul>
					</nav>
				</div>
			</header>
		</>
	)
}

export default Header
