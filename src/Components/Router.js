/**
 * @Author: Ali
 * @Date:   2018-12-18T09:19:33+01:00
 * @Last modified by:   Ali
 * @Last modified time: 2019-01-12T12:08:51+01:00
 */
import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import App from "../App";
import Recipe from "./Recipe";

const Router = () => (
  <HashRouter>
    <Switch>
      <Route path="/" component={App} exact />
      <Route path="/recipe/:id" component={Recipe} />
    </Switch>
  </HashRouter>
);
export default Router;
