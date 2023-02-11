import OrderButton from 'components/GeneralComponents/Buttons/OrderButton/OrderButton'
import React from 'react'

import styles from './BannerPersonalClasses.module.css'

const BannerPersonalClasses = () => {
	return (
		<>
			<section className={styles.section}>
				<h2 className={styles.heading}>Персональные занятия</h2>
				<p className={styles.description}>
					Индивидуальный подход к каждому, помощь в освоении трасс или
					исправлении своих ошибок.
				</p>
				<OrderButton link='/' />
			</section>
		</>
	)
}

export default BannerPersonalClasses
