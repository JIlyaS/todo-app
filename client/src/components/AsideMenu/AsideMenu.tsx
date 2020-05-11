import React from "react";

import NavBar from "../NavBar/NavBar";
import { IAuthForm } from "../../interfaces";

import styles from "./styles.module.scss";

const AsideMenu: React.FC = () => {

  return <div className={styles.AsideMenu}>
    <div className={styles.AsideMenu__logo}>
      <span className={styles.AsideMenu__logo}>ToDo</span>
    </div>
    <div className={styles.AsideMenu__user}>
      <button type="button">
        <span>Илья Колмаков</span>
      </button>
    </div>
    <NavBar />
  </div>;
}

// const mapDispatchToProps = (dispatch: any) => {
//   return bindActionCreators({
//     checkLogin
//   }, dispatch);
// }

// export {AuthForm};

// export default connect(null, mapDispatchToProps)(AuthForm);

export default AsideMenu;

