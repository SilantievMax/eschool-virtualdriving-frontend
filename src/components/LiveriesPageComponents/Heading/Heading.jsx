import React from "react";
import styles from "./Heading.module.css";

const Heading = () => {
  return (
    <>
      <h3 className={styles.heading}>Ливреи на заказ</h3>
      <p className={styles.discription}>
        Надоели скучные и однообразные ливреи в игре? Хочешь подчеркнуть свою индивидуальность или ездить с фото своей бабушки на двери? Тогда тебе к нам!
        Художники VDES, разработают для тебя уникальный дизайн, с которым именно ты станешь звездой всех трансляций!
      </p>
    </>
  );
};

export default Heading;
