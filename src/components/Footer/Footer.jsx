import './footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
        <footer className="footer">
            <div className="footer__content">
                <Link to={'/'} className="footer__politik-link">Политика конфиденциальности</Link>
                <span className="footer__copyright">Сайт находится в разработке. Powered by VDES © 2020</span>
            </div> 
        </footer>
        </>
    )
}

export default Footer