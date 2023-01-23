import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../../assets/svg/logo.svg";
import AuthorizationModal from "../AuthorizationModal/AuthorizationModal";
import Layout from "../Layout/Layout";
import styles from "./HeaderV3.module.css";

const HeaderV3 = () => {
  const [modalActive, setModalActive] = useState(false);
  const color = { color: "#E61F26", opacity: 1 };
  const isActiveNav = ({ isActive }) => (isActive ? color : undefined);

  return (
    <>
      <Layout>
        <header className={styles.header}>
          <div className={styles.header_top}>
            <NavLink to={"/"} className={styles.logo_link}>
              <img src={logo} alt="logo" className={styles.logo} />
            </NavLink>
            <nav className={styles.navTop}>
              <NavLink to={"/"} className={styles.navTop_link} style={color}>
                VDES академия
              </NavLink>
              <NavLink to={"/"} className={styles.navTop_link}>
                VDES оборудование
              </NavLink>
              <NavLink to={"/"} className={styles.navTop_link}>
                VDES портал
              </NavLink>
              <span className={styles.btn} onClick={() => setModalActive(true)}>
                ВОЙТИ
              </span>
            </nav>
          </div>
          <div className={styles.header_bottom}>
            <nav className={styles.navBottom}>
              <NavLink to={"services/personal-classes"} className={styles.navBottom_link} style={isActiveNav}>
                Персональные занятия
              </NavLink>
              <NavLink to={"services/custom-car"} className={styles.navBottom_link} style={isActiveNav}>
                Сетапы
              </NavLink>
              <NavLink to={"services/liveries"} className={styles.navBottom_link} style={isActiveNav}>
                Ливреи
              </NavLink>
              <NavLink to={"services/coaches"} className={styles.navBottom_link} style={isActiveNav}>
                Тренеры
              </NavLink>
              <NavLink to={"about"} className={styles.navBottom_link} style={isActiveNav}>
                О нас
              </NavLink>
            </nav>
          </div>
        </header>
      </Layout>
      <AuthorizationModal active={modalActive} setActive={setModalActive} />
    </>
  );
};

export default HeaderV3;
