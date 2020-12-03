import React from "react";
import { Switch } from "react-router-dom";
import App from "../App";
import Route from "./Route";
import MyNav from "../components/MyNav";
import ProductPage from "../components/ProductPage/ProductPage";

const Routes = () => {
  return (
    <div style={{ overflowX: "hidden" }}>
      <MyNav />
      <Switch>
        <Route exact path="/" component={App} />
        {/* <Route exact path="/productpage" component={ProductPage} /> */}
        <Route exact path="/productpage/:id" component={ProductPage} />
        <Route exact path="/login" isLoginRoute component={Login} />
      </Switch>
    </div>
  );
};

export default Routes;

const Login = () => {
  return <h1>Login</h1>;
};
