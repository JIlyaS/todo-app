import React from "react";

import { IRegisterForm } from "../../interfaces";

import styles from "./styles.module.scss";

const UserMenu: React.FC = () => {

  return <div className={styles.UserMenu}>
    <button className={styles.UserMenu__btn}>
      {/* <img className={styles.UserMenu__icon} src="#" /> */}
      {/* alt="Иконка пользователя" */}
      <span className={styles.UserMenu__username}>Илья Колмаков</span>
    </button>
  </div>;
}

export {UserMenu};

export default UserMenu;