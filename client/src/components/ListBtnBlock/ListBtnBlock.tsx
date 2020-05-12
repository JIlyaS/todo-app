import React from "react";
import {Link} from "react-router-dom";

import { IAuthForm } from "../../interfaces";

import styles from "./styles.module.scss";

const ListBtnBlock: React.FC = () => {

  return <div className={styles.ListBtnBlock}>
    <button className={styles.ListBtnBlock__btn} type="button">
      <span className={styles.ListBtnBlock__text}>Создать список</span>
    </button>
  </div>;
}

export default ListBtnBlock;
