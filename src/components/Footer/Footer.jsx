import './footer.css'
import { NavLink } from 'react-router-dom'

const Footer = () => {
    return (
        <>
        <footer className="footer">
            <div className="footer__content">
                <NavLink to={'/'} className="footer__politik-link">Политика конфиденциальности</NavLink>
                <span className="footer__copyright">Сайт находится в разработке. Powered by VDES © 2020</span>
            </div> 
        </footer>
        </>
    )
}

export default Footer