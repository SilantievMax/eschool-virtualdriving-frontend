import React from "react";
import simulators1 from "assets/images/simulators1.webp";
import simulators2 from "assets/images/simulators2.webp";
import simulators3 from "assets/images/simulators3.webp";
import styles from "./BannerSimulators.module.css";

const BannerSimulators = () => {
  return (
    <>
      <section className={styles.section}>
        <ul className={styles.list}>
          <li className={styles.item}>
            <img src={simulators1} alt="" className={styles.img} />
          </li>
          <li className={styles.item}>
            <img src={simulators2} alt="" className={styles.img} />
          </li>
          {/* <li className={styles.item}>
            <img src={simulators3} alt="" className={styles.img} />
          </li> */}
        </ul>
      </section>
    </>
  );
};

export default BannerSimulators;
