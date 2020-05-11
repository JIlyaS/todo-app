import React from "react";
import { Switch, Route} from "react-router-dom";

import AsideMenu from "../../components/AsideMenu/AsideMenu";
import DayTasks from "../../components/DayTasks/DayTasks";
import FavoriteTasks from "../../components/FavoriteTasks/FavoriteTasks";

import styles from "./styles.module.scss";


const MainLayout = () => {

  return <div className={styles.MainLayout}>
    <div className={styles.MainLayout__menu}>
      <AsideMenu />
    </div>
    <div className={styles.MainLayout__content}>
      <Switch>
        <Route path="/tasks">
          <DayTasks />
        </Route>
        <Route path="/favorite">
          <FavoriteTasks />
        </Route>
      </Switch>
    </div>
  </div>;
}

export default MainLayout;
