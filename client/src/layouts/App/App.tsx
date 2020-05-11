import React, {useEffect} from "react";
import {Route, Switch, Redirect} from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";


import MainLayout from "../MainLayout/MainLayout";
import AuthForm from "../../components/AuthForm/AuthForm";
import RegisterForm from "../../components/RegisterForm/RegisterForm";
import {getLogin} from "../../action-creator/action-creator";
import withPrivateRoute from "../../hocs/withPrivateRoute";

const App: React.FC = (props: any) => {

  const {login, isAuthenticated} = props;

  const userData = JSON.parse(localStorage.getItem('userData') || '{}');

  const isAuth = userData && !!userData.token;

  useEffect(() => {
    if (userData && userData.token) {
      login(userData);
    }
  }, []);

  if (isAuth) {
    return <Switch>
      <Route path="/" component={MainLayout}></Route>
    </Switch>;
  } else {
    const AuthFormWrapped = withPrivateRoute(AuthForm, isAuthenticated, `/`);
    const RegisterFormWrapper = withPrivateRoute(RegisterForm, isAuthenticated, `/`); 
    const MainLayoutWrapper = withPrivateRoute(MainLayout, !isAuthenticated, `/login`);

    return <Switch>
      <Route path="/" component={MainLayoutWrapper} exact></Route>
      <Route path="/login" component={AuthFormWrapped}></Route>
      <Route path="/register" component={RegisterFormWrapper}></Route>
      <Redirect to="/login"></Redirect>
    </Switch>;
  }
}

const mapStateToProps = (state: any) => {
  const {authReducer} = state;

  return {
    token: authReducer.token,
    userId: authReducer.userId,
    isAuthenticated: authReducer.isAuthenticated,
  };
}

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators({
    login: getLogin
  }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
