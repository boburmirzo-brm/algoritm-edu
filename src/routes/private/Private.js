import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect, useLocation } from "react-router-dom";

const Private = (props) => {
    const authState = useSelector(state => state.authLogin);

    const location = useLocation();
  return authState.isAuthenticated  ? (
    <Route {...props} />
  ) : (
    <Redirect
      to={{
        pathname: "/login",
        state: {
          from: location.pathname,
        },
      }}
    />
  );
};

export default Private;
