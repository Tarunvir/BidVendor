import React from "react";
import { Route, Redirect } from "react-router-dom";

function RouteWrapper({
  component: Component,
  isPrivate,
  isLoginRoute,
  ...rest
}) {
  const  isAuthenticated = false;
  if (isPrivate && !isAuthenticated) {
    return <Redirect to="/login" />;
  }

  /**
   * Redirect user to Main page if he tries to access a non private route
   * (SignIn or SignUp) after being authenticated.
   */

  if (isLoginRoute && isAuthenticated) {
    return <Redirect to="/" />;
  }

  /**
   * If not included on both previous cases, redirect user to the desired route.
   */
  return <Route {...rest} component={Component} />;
}



export default(RouteWrapper);
