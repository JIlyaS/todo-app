import React from "react";
import {Link} from "react-router-dom";

import { IAuthForm } from "../../interfaces";

import styles from "./styles.module.scss";

const NavBar: React.FC = () => {

  return <ul className={styles.NavBar}>
    <li className={styles.NavBar__item}>
      <Link to="/daytasks">Мой день</Link>
    </li>
    <li className={styles.NavBar__item}>
      <Link to="/favorite">Важно</Link>
    </li>
    <li className={styles.NavBar__item}>
      <Link to="/plan">Запланировано</Link>
    </li>
    <li className={styles.NavBar__item}>
      <Link to="/tasks">Задачи</Link>
    </li>
  </ul>;
}

// const mapDispatchToProps = (dispatch: any) => {
//   return bindActionCreators({
//     checkLogin
//   }, dispatch);
// }

// export {AuthForm};

// export default connect(null, mapDispatchToProps)(AuthForm);

export default NavBar;
