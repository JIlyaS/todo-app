import React from "react";
import {Route, Switch, Redirect} from "react-router-dom";
import AuthForm from "../../components/AuthForm/AuthForm";
import MainLayout from "../MainLayout/MainLayout";
import PrivateRoute from "../../components/PrivateRoute/PrivateRoute";
import RegisterForm from "../../components/RegisterForm/RegisterForm";

const App: React.FC = () => {

  const isAuthenticated = false;

  return <div>
    <Switch>
      <PrivateRoute path="/" isAuthenticated={isAuthenticated} exact>
        <MainLayout />
      </PrivateRoute>
      <Route path="/login">
        <AuthForm isAuthenticated={isAuthenticated} />
      </Route>
      <Route path="/register">
        <RegisterForm isAuthenticated={isAuthenticated} />
      </Route>
      <Redirect to="/" />
    </Switch>
  </div>;
}

export default App;
