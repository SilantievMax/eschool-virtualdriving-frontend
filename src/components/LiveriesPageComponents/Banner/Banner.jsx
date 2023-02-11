import React from 'react'

import styles from './Banner.module.css'

const Banner = ({ banner }) => {
	return (
		<>
			<div className={styles.img}>
				<img src={banner} alt='banner' />
			</div>
		</>
	)
}

export default Banner
