// import logo from "./logo.svg";
import "./styles/main.scss";

import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/header";
import MainPage from "./components/main-page";
import OxyCalc from "./components/oxy-calc";

function App() {
    return (
        <Router>
            <div id="app">
                <Header />
                <div id="page-wrapper">
                    <div className="content-wrapper">
                        <Switch>
                            <Route exact path="/">
                                <MainPage />
                            </Route>
                            <Route path="/oxygencalc">
                                <OxyCalc />
                            </Route>
                        </Switch>
                    </div>
                </div>
            </div>
        </Router>
    );
}

export default App;
