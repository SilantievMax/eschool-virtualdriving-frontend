import LoginForm from 'components/Generic/LoginForm/LoginForm'
import RegisterForm from 'components/Generic/RegisterForm/RegisterForm'
import React, { useState } from 'react'

import styles from './AuthorizationModal.module.css'

const AuthorizationModal = ({ active, setActive }) => {
  const [modal, setModal] = useState(1)

  return (
    <>
      <div
        className={active ? `${styles.modal} ${styles.active} ` : styles.modal}
      >
        <div className={styles.modal__content} onClick={() => setActive(false)}>
          <div className={styles.modal__bg} onClick={e => e.stopPropagation()}>
            {modal === 1 && <LoginForm modal={setModal} />}
            {modal === 2 && <RegisterForm modal={setModal} />}
            <div className={styles.modal__X} onClick={() => setActive(false)}>
              &times;
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AuthorizationModal
