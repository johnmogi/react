routes


import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { Home } from "../home/home";
import { Products } from "../products/products";
import { About } from "../about/about";
import { PageNotFound } from "../page-not-found/page-not-found";

// Routing Installation: 
// npm i react-router-dom @types/react-router-dom


  <BrowserRouter>
                    <header>
                        <Header />
                    </header>

                    <aside>
                        <Menu />
                    </aside>

                    <main>
                        <Switch>
                            <Route path="/home" component={Home} exact />
                            <Route path="/products" component={Products} exact />
                            <Route path="/about" component={About} exact />
                            <Redirect from="/" to="/home" exact />
                            <Route component={PageNotFound} />
                        </Switch>
                    </main>

                    <footer>
                        <Footer />
                    </footer>
                </BrowserRouter>


     <div className="menu">
                <NavLink to="/home" activeClassName="active-route" exact>Home</NavLink>
                <NavLink to="/products" activeClassName="active-route" exact>Products</NavLink>
                <NavLink to="/about" activeClassName="active-route" exact>About</NavLink>
            </div>