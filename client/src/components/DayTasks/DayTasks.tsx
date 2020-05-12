import React from "react";

import styles from "./styles.module.scss";

const DayTasks = () => {
  return <div className={styles.DayTasks}>
    <div className={styles.DayTasks__header}>
      <h2 className={styles.DayTasks__title}>Мой день</h2>
      <span className={styles.DayTasks__date}>вторник, 12 мая</span>
    </div>
    <div className={styles.DayTasks__list}>
      
    </div>
    <div className={styles.DayTasks__form}>
      <form method="post" action="">
        <input className={styles.DayTasks__input} type="text" name="task" placeholder="Добавить задачу" />
      </form>
    </div>
  </div>
}

export default DayTasks;
