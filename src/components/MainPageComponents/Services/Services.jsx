import React from "react";
import { Link } from "react-router-dom";
import OrderButton from "../../GeneralComponents/Buttons/OrderButton/OrderButton";
import styles from "./Services.module.css";
import card1 from "../../../assets/images/card1.webp";
import card2 from "../../../assets/images/card2.webp";
import card3 from "../../../assets/images/card3.webp";

const Services = () => {
  return (
    <>
      <section className={styles.services}>
        <ul className={styles.list}>
          <Link to={""} title="Подробнее">
            <li className={styles.item}>
              <div className={styles.images_card}>
                <img src={card1} alt="img" className={styles.img} />
              </div>
              <div className={styles.text_card}>
                <h4 className={styles.heading_card}>Персональные занятия</h4>
                <p className={styles.description_card}>Онлайн тренировка, которая поможет сделать Вас быстрее на любой трассе</p>
                <Link to="/services/personal-classes" className={styles.btn}>
                  заказать
                </Link>
              </div>
            </li>
          </Link>
          <Link to={""} title="Подробнее">
            <li className={styles.item}>
              <div className={styles.images_card}>
                <img src={card2} alt="img" className={styles.img} />
              </div>
              <div className={styles.text_card}>
                <h4 className={styles.heading_card}>Сетапы</h4>
                <p className={styles.description_card}>Поделимся нашими сетапами или реплеями с телеметрией быстрых кругов</p>
                <Link to="/services/custom-car" className={styles.btn}>
                  заказать
                </Link>
              </div>
            </li>
          </Link>
          <Link to={"/"} title="Подробнее">
            <li className={styles.item}>
              <div className={styles.images_card}>
                <img src={card3} alt="img" className={styles.img} />
              </div>
              <div className={styles.text_card}>
                <h4 className={styles.heading_card}>Ливреи</h4>
                <p className={styles.description_card}>Создадим с нуля или воспроизведём по примерам дизайн гоночного автомобиля</p>
                <Link to="/services/liveries" className={styles.btn}>
                  заказать
                </Link>
              </div>
            </li>
          </Link>
        </ul>
      </section>
    </>
  );
};

export default Services;
