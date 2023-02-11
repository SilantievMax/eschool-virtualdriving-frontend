import React from 'react'

import styles from './BtnForInfoCoaches.module.css'

const BtnForInfoCoaches = () => {
	return (
		<>
			<ul className={styles.list}>
				<li className={styles.item}>
					<button className={styles.btn}>Записаться к тренеру</button>
				</li>
				<li className='item'>
					<button className={styles.btn}>Записаться к тренеру</button>
				</li>
				<li className='item'>
					<button className={styles.btn}>Записаться к тренеру</button>
				</li>
				<li className='item'>
					<button className={styles.btn}>Записаться к тренеру</button>
				</li>
			</ul>
		</>
	)
}

export default BtnForInfoCoaches
