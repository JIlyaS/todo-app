import * as React from 'react';
import {Route, Redirect} from 'react-router-dom';

const withPrivateRoute = (Component: any, isAuthenticated: Boolean, path: any) => {
  class WithPrivateRoute extends React.PureComponent {
    render() {

      return <Route
        {...this.props}
        render={
          (props) => isAuthenticated ? (
            <Redirect to={path} />
          ) : (
            <Component {...props} />
          )
        }
      />;
    }
  }

  return WithPrivateRoute;
};

export default withPrivateRoute;