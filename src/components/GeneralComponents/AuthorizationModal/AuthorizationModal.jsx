import React from "react";
import styles from "./AuthorizationModal.module.css";

const AuthorizationModal = ({ active, setActive }) => {
  return (
    <>
      <div className={active ? `${styles.modal} ${styles.active} ` : styles.modal} onClick={() => setActive(false)}>
        <div className={styles.modal__content} onClick={(e) => e.stopPropagation()}></div>
      </div>

      {/* <React.Fragment>
        <section className="register">
          <div className="register__images"></div>
          {children}
        </section>
      </React.Fragment> */}
    </>
  );
};

export default AuthorizationModal;
