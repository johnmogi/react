import React from "react";
import { Route, Switch } from "react-router";
import About from "../../pages/about/about";

import Home from "../../pages/home/home";

import "./main.css";

export default function Main() {
  return (
    <div className="main">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="about">
          <About />
        </Route>
      </Switch>
    </div>
  );
}
