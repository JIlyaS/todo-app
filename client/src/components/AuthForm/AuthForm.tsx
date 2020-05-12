import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { checkLogin } from "../../action-creator/action-creator";

import { IAuthForm } from "../../interfaces";
import { useHttp } from "../../hooks/http.hooks";

import styles from "./styles.module.scss";

const AuthForm: React.FC<IAuthForm> = ({isAuthenticated, checkLogin}) => { // {isAuthenticated}: IProps

  const {loading, error, request} = useHttp();

  // Временное решение
  const [form, setForm] = useState({
    email: '',
    password: ''
  });

  // useState<string>('')

  // Временное решение
  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const authHandler = (evt: React.FormEvent) => {
    evt.preventDefault();
 
    // const data = await request("/api/auth/login", "POST", {...form});
    // console.log('Data', data);

    checkLogin(form);
  }

  return <div className={styles.AuthForm}>
    <div className={styles.AuthForm__block}>
      <div className={styles.AuthForm__logo_block}>
        <span className={styles.AuthForm__logo}>ToDo</span>
      </div>
      <form action="/api/auth/login" method="post" onSubmit={authHandler}>
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

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators({
    checkLogin
  }, dispatch);
}

export {AuthForm};

export default connect(null, mapDispatchToProps)(AuthForm);
