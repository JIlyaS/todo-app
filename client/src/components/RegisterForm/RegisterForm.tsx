import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";

import styles from "./styles.module.scss";
import { useHttp } from "../../hooks/http.hooks";

interface IProps {
  isAuthenticated: Boolean
}

const RegisterForm = ({isAuthenticated}: IProps) => {

  const {loading, error, request} = useHttp();

  // Временное решение
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: ''
  });

  // Временное решение
  const changeHandler = (event: any) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };
  
  const history = useHistory();

  useEffect(() => {
    if (isAuthenticated) {
      history.push("/");
    }
  }, []);

  // useEffect(() => {
  //   console.log(error.message);
  // }, [error]);

  const registerHandler = async (evt: any) => {
    evt.preventDefault();
    try {
      const data = await request("/api/auth/register", "POST", {...form});
      console.log('Data', data);
    } catch (err) {

    }
  }

  return <div className={styles.RegisterForm}>
    <div className={styles.RegisterForm__block}>
      <div className={styles.RegisterForm__logo_block}>
        <span className={styles.RegisterForm__logo}>ToDo</span>
      </div>
      <form action="/api/auth/register" method="post">
        <div className={styles.RegisterForm__group}>
          <input
            className={styles.RegisterForm__input}
            type="text"
            name="name"
            id="name"
            placeholder="Введите ваше имя"
            onChange={changeHandler}
          />
        </div>
        <div className={styles.RegisterForm__group}>
          <input
            className={styles.RegisterForm__input}
            type="text"
            name="email"
            id="email"
            placeholder="Введите ваш email"
            onChange={changeHandler}
          />
        </div>
        <div className={styles.RegisterForm__group}>
          <input
            className={styles.RegisterForm__input}
            type="password"
            name="password"
            id="password"
            placeholder="Введите ваш пароль"
            onChange={changeHandler}
          />
        </div>
        <div className={styles.RegisterForm__btn_group}>
          <button
            className={styles.RegisterForm__btn_submit}
            type="submit"
            onClick={registerHandler}
            disabled={loading}
          >
            Зарегистрироваться
          </button>
          <p className={styles.RegisterForm__paragraph}>
            Уже зарегистрированы? <Link className={styles.RegisterForm__account_link} to="/login">Войти</Link>
          </p>
        </div>
      </form>
    </div>
  </div>;
}

export default RegisterForm;
