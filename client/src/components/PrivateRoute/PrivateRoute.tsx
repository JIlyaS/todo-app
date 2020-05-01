import React, { ReactNode } from "react";
import { Route, Redirect } from "react-router-dom";

interface IProps {
  children: ReactNode;
  isAuthenticated: Boolean;
  path: string | string[] | undefined;
  exact: boolean | undefined;
}

export default function PrivateRoute({ children, isAuthenticated, ...rest }: IProps) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}