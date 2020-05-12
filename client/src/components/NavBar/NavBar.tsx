import React from "react";
import {Link} from "react-router-dom";
import classnames from "classnames";

import { IAuthForm } from "../../interfaces";

import { ReactComponent as Sun } from './icons/sun-icon.svg';
import { ReactComponent as Star } from './icons/star-icon.svg';
import { ReactComponent as Calendar } from './icons/calendar-icon.svg';      
import { ReactComponent as Your } from './icons/your-icon.svg';
import { ReactComponent as Home } from './icons/home-icon.svg';
import styles from "./styles.module.scss";

const NavBar: React.FC = () => {

  return <ul className={styles.NavBar}>
    <li className={styles.NavBar__item}>
      <Link className={styles.NavBar__link} to="/daytasks">
        <Sun />
        <span className={styles.NavBar__text}>Мой день</span>
      </Link>
    </li>
    <li className={styles.NavBar__item}>
      <Link className={styles.NavBar__link} to="/favorite">
        <Star />
        <span className={styles.NavBar__text}>Важно</span>
      </Link>
    </li>
    <li className={styles.NavBar__item}>
      <Link className={styles.NavBar__link} to="/plan">
        <Calendar />
        <span className={styles.NavBar__text}>Запланировано</span>
      </Link>
    </li>
    <li className={styles.NavBar__item}>
      <Link className={styles.NavBar__link} to="/your">
        <Your />
        <span className={styles.NavBar__text}>Назначенные вам</span>
      </Link>
    </li>
    <li className={styles.NavBar__item}>
      <Link className={styles.NavBar__link} to="/tasks">
        <Home />
        <span className={styles.NavBar__text}>Задачи</span>
      </Link>
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
