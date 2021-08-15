import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";


import Header from './header'
import Footer from './footer'
import Home from '../pages/home';
import About from '../pages/about';

export default function Layout() {
    return (
        <BrowserRouter>

            <Header/>
            <hr/>
            <Switch>
                            <Route path="/home" component={Home} exact />
                            <Route path="/about" component={About} exact />
                           <Redirect from="/" to="/home" exact />
                            {/*  <Route component={PageNotFound} /> */}
                        </Switch>
            <hr/>
            <Footer/>
        </BrowserRouter>
    )
}
