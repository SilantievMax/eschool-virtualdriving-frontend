import { Link } from "react-router-dom";
import Layout from "../Layout/Layout";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <>
      <div className={styles.line}></div>
      <footer className={styles.footer}>
        <Layout>
          <div className={styles.content}>
            <Link to={"/"} className={styles.politik_link}>
              Политика конфиденциальности
            </Link>
            <span className={styles.copyright}>Сайт находится в разработке. Powered by VDES © 2020</span>
          </div>
        </Layout>
      </footer>
    </>
  );
};

export default Footer;
