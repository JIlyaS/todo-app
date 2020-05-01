import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";

import { useHttp } from "../../hooks/http.hooks";

import styles from "./styles.module.scss";

interface IProps {
  isAuthenticated: Boolean
}

const AuthForm = ({isAuthenticated}: IProps) => {
  
  const history = useHistory();

  useEffect(() => {
    if (isAuthenticated) {
      history.push("/");
    }
  }, []);

  const {loading, error, request} = useHttp();

  // Временное решение
  const [form, setForm] = useState({
    email: '',
    password: ''
  });

  // Временное решение
  const changeHandler = (event: any) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const authHandler = async (evt: any) => {
    evt.preventDefault();
    try {
      const data = await request("/api/auth/login", "POST", {...form});
      console.log('Data', data);
    } catch (err) {

    }
  }

  return <div className={styles.AuthForm}>
    <div className={styles.AuthForm__block}>
      <div className={styles.AuthForm__logo_block}>
        <span className={styles.AuthForm__logo}>ToDo</span>
      </div>
      <form action="/api/auth/login" method="post">
        <div className={styles.AuthForm__group}>
          {/* <label className={styles.AuthForm__label} htmlFor="email">Email</label> */}
          <input
            className={styles.AuthForm__input}
            type="text"
            name="email"
            id="email"
            placeholder="Введите ваш email"
            onChange={changeHandler}
          />
        </div>
        <div className={styles.AuthForm__group}>
          {/* <label className={styles.AuthForm__label} htmlFor="password">Пароль</label> */}
          <input
            className={styles.AuthForm__input}
            type="password"
            name="password"
            id="password"
            placeholder="Введите ваш пароль"
            onChange={changeHandler}
          />
        </div>
        <div className={styles.AuthForm__btn_group}>
          <button
            className={styles.AuthForm__btn_submit}
            type="submit"
            onClick={authHandler}
            disabled={loading}
          >
            Войти
          </button>
          <p className={styles.AuthForm__paragraph}>
            Не зарегистрированы? <Link className={styles.AuthForm__account_link} to="/register">Создать аккаунт</Link>
          </p>
        </div>
      </form>
    </div>
  </div>;
}

export default AuthForm;
