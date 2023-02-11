import React from 'react'

import styles from './BackgroundForContents.module.css'

const Background = ({ children }) => {
	return (
		<>
			<React.Fragment>
				<section className={styles.background}>{children}</section>
			</React.Fragment>
		</>
	)
}

export default Background
