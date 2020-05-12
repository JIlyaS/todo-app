import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { checkRegister } from "../../action-creator/action-creator";

import { IRegisterForm } from "../../interfaces";
import { useHttp } from "../../hooks/http.hooks";

import styles from "./styles.module.scss";


const RegisterForm: React.FC<IRegisterForm> = ({isAuthenticated, checkRegister}) => {

  const {loading, error, request} = useHttp();

  // Временное решение
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: ''
  });

  // Временное решение
  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const registerHandler = (evt: React.FormEvent) => {
    evt.preventDefault();
 
      // const data = await request("/api/auth/register", "POST", {...form});
      // console.log('Data', data);

      checkRegister(form);
  }

  return <div className={styles.RegisterForm}>
    <div className={styles.RegisterForm__block}>
      <div className={styles.RegisterForm__logo_block}>
        <span className={styles.RegisterForm__logo}>ToDo</span>
      </div>
      <form action="/api/auth/register" method="post" onSubmit={registerHandler}>
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
            // onClick={registerHandler}
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

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators({
    checkRegister
  }, dispatch);
}

export {RegisterForm};

export default connect(null, mapDispatchToProps)(RegisterForm);
