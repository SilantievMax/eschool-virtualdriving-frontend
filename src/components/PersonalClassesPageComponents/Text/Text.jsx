import React from 'react'

import styles from './Text.module.css'

const Text = () => {
	return (
		<>
			<div className={styles.text}>
				<h2 className={styles.heading}>Персональные занятия</h2>
				<p className={styles.description}>
					Индивидуальный подход к каждому, помощь в освоении трасс или
					исправлении своих ошибок.
				</p>
			</div>
		</>
	)
}

export default Text
