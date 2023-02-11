import Logo1 from 'assets/images/bg-logo1.png'
import Logo2 from 'assets/images/bg-logo2.png'
import Logo3 from 'assets/images/bg-logo3.png'
import photoUser1 from 'assets/images/photoUser1.webp'
import photoUser2 from 'assets/images/photoUser2.webp'
import photoUser3 from 'assets/images/photoUser3.webp'
import photoUser4 from 'assets/images/photoUser4.webp'
import Layout from 'components/GeneralComponents/Layout/Layout'
import React from 'react'

import styles from './BannerInstructors.module.css'

const BannerInstructors = () => {
	return (
		<>
			<Layout>
				<section className={styles.section}>
					<h3 className={styles.heading}>Инструкторы</h3>
					<ul className={styles.list}>
						<li className={styles.item}>
							<div
								className={styles.wrapper_img}
								style={{ backgroundImage: `url(${Logo1})` }}
							>
								<img
									src={photoUser1}
									alt='photoUser'
									className={styles.photo}
								/>
							</div>
							<div className={styles.wrapper_content}>
								<h5 className={styles.name_instructor}>Егор Огородников</h5>
								<ul className={styles.list_text}>
									<li className={styles.item_text}>
										{' '}
										Обладатель PRO лицензии в iRacing
									</li>
									<li className={styles.item_text}>
										{' '}
										Участник мировых LAN-финалов по Forza Motorsport 7, RaceRoom
									</li>
									<li className={styles.item_text}>
										{' '}
										Многократный призер российских чемпионатов
									</li>
								</ul>
							</div>
						</li>
						<li className={styles.item}>
							<div
								className={styles.wrapper_img}
								style={{ backgroundImage: `url(${Logo2})` }}
							>
								{/* <img src={photoUser2} alt="photoUser" className={styles.photo} /> */}
							</div>
							<div className={styles.wrapper_content}>
								{/* <h5 className={styles.name_instructor}>Влад Химичев</h5>
                <ul className={styles.list_text}>
                  <li className={styles.item_text}>Обладатель 9000 рейтинга в IRacing</li>
                  <li className={styles.item_text}>Победитель чемпионата Черноземья по картингу 2016-2019</li>
                  <li className={styles.item_text}>Бронзовый призёр чемпионата ORSRL TCR Championship 2019</li>
                  <li className={styles.item_text}>Чемпион ORSRL V8 Championship 2021</li>
                </ul> */}
							</div>
						</li>
						<li className={styles.item}>
							<div
								className={styles.wrapper_img}
								style={{ backgroundImage: `url(${Logo3})` }}
							>
								<img
									src={photoUser4}
									alt='photoUser'
									className={styles.photo}
								/>
							</div>
							<div className={styles.wrapper_content}>
								<h5 className={styles.name_instructor}>Максим Петров</h5>
								<ul className={styles.list_text}>
									<li className={styles.item_text}>
										Многократный призер любительских турниров
									</li>
									<li className={styles.item_text}>Финалист SMP Challenge</li>
									<li className={styles.item_text}>
										Победитель чемпионата Sonchyk ASUS Championship{' '}
									</li>
								</ul>
							</div>
						</li>
					</ul>
				</section>
			</Layout>
		</>
	)
}

export default BannerInstructors
