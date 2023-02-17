import partners1 from 'assets/images/partners1.webp'
import partners2 from 'assets/images/partners2.webp'
import Layout from 'components/Generic/Layout/Layout'
import React from 'react'

import styles from './BannerPartners.module.css'

const BannerPartners = () => {
  return (
    <>
      <section className={styles.section}>
        <Layout>
          <ul className={styles.list}>
            <li className={styles.item}>
              <h3 className={styles.heading}>Наши партнеры:</h3>
            </li>
            <li className={styles.item}>
              <img
                src={partners1}
                alt='partners'
                className={`${styles.img} ${styles.img_1}`}
              />
            </li>
            <li className={styles.item}>
              <img
                src={partners2}
                alt='partners'
                className={`${styles.img} ${styles.img_2}`}
              />
            </li>
          </ul>
        </Layout>
      </section>
    </>
  )
}

export default BannerPartners
