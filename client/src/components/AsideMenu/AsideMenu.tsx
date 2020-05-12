import React from "react";

import UserMenu  from "../UserMenu/UserMenu";
import NavBar from "../NavBar/NavBar";
import { IAuthForm } from "../../interfaces";

import styles from "./styles.module.scss";
import ListBtnBlock from "../ListBtnBlock/ListBtnBlock";

const AsideMenu: React.FC = () => {

  return <div className={styles.AsideMenu}>
    <div className={styles.AsideMenu__logo}>
      ToDo list
    </div>
    <div className={styles.AsideMenu__user}>
      <UserMenu />
      <div className={styles.AsideMenu__search}></div>
    </div>
    <NavBar />
    <ListBtnBlock />
  </div>;
}

export default AsideMenu;