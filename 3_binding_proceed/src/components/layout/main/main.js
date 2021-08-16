import React from "react";
import {  Switch, Route, Redirect } from "react-router-dom";

import About from "../../pages/about/about";

import Home from "../../pages/home/home";
import PageNotFound from "../../pages/pagenotfound/pagenotfound";


import "./main.css";

export default function Main() {
  return (
    <div className="main">
      
      <Switch>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Redirect from="/" to="/home" exact />
         <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}
