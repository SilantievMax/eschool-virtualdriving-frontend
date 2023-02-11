import React from 'react'

import styles from './StagesOfClasses.module.css'

const StagesOfClasses = () => {
	return (
		<>
			<section className={styles.section}>
				<h2 className={styles.heading}>Что стоит знать?</h2>
				<ul className={styles.list}>
					<li className={styles.item}>
						<p className={styles.description}>
							Занятие проходит в{' '}
							<a href='/' className={styles.link}>
								Discord
							</a>{' '}
							1 на 1. Поэтому необходимо присоединиться к нашему серверу.
							Понадобится ПК или другой девайс для просмотра трансляции тренера.
						</p>
					</li>
					<li className={styles.item}>
						<p className={styles.description}>
							Перед занятием установите REC для записи телеметрии. Как
							записывать телеметрию?
						</p>
					</li>
					<li className={styles.item}>
						<p className={styles.description}>
							В стоимость услуги уже входит подготовка тренера перед занятием:
							анализ ошибок на основе данных и запись своего примера.
						</p>
					</li>
					<li className={styles.item}>
						<p className={styles.description}>
							Вы можете перенести или отменить занятие, но не позднее чем за 24
							часа до его начала.
						</p>
					</li>
				</ul>
			</section>
		</>
	)
}

export default StagesOfClasses
