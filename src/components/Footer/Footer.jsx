import styles from './Footer.module.css'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
        <footer className={styles.footer}>
            <div className={styles.content}>
                <Link to={'/'} className={styles.politik_link}>Политика конфиденциальности</Link>
                <span className={styles.copyright}>Сайт находится в разработке. Powered by VDES © 2020</span>
            </div> 
        </footer>
        </>
    )
}

export default Footer;