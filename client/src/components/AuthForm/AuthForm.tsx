import React from "react";
import styles from "./styles.module.scss";

const AuthForm = () => {
  return <div className={styles.AuthForm}>
    <div className={styles.AuthForm__block}>
      <div className={styles.AuthForm__logo_block}>
        <span className={styles.AuthForm__logo}>ToDo</span>
      </div>
      <form action="/api/auth/login" method="post">
        <div className={styles.AuthForm__group}>
          {/* <label className={styles.AuthForm__label} htmlFor="email">Email</label> */}
          <input className={styles.AuthForm__input} type="text" name="email" id="email" placeholder="Введите ваш email" />
        </div>
        <div className={styles.AuthForm__group}>
          {/* <label className={styles.AuthForm__label} htmlFor="password">Пароль</label> */}
          <input className={styles.AuthForm__input} type="password" name="password" id="password" placeholder="Введите ваш пароль" />
        </div>
        <div className={styles.AuthForm__btn_group}>
          <button className={styles.AuthForm__btn_submit} type="submit">Войти</button>
          <p className={styles.AuthForm__paragraph}>
            Не зарегистрированы? <a className={styles.AuthForm__account_link} href="#">Создать аккаунт</a>
          </p>
        </div>
      </form>
    </div>
  </div>;
}

export default AuthForm;
