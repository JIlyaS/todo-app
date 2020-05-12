import React from "react";
import { Route, Redirect } from "react-router-dom";

import AsideMenu from "../../components/AsideMenu/AsideMenu";
import DayTasks from "../../components/DayTasks/DayTasks";
import FavoriteTasks from "../../components/FavoriteTasks/FavoriteTasks";

import styles from "./styles.module.scss";


const MainLayout = () => {

  return <div className={styles.MainLayout}>
    <div className={styles.MainLayout__menu}>
      <AsideMenu />
    </div>
    <main className={styles.MainLayout__content}>
        <Route path="/daytasks" component={DayTasks}>
        </Route>
        <Route path="/favorite" component={FavoriteTasks}>
        </Route>
        <Route path="/plan">
          
        </Route>
        <Route path="/tasks">
          
        </Route>
        <Redirect to="/daytasks" />
    </main>
  </div>;
}

export default MainLayout;
