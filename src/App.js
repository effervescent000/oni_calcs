// import logo from "./logo.svg";
import "./styles/main.scss";

import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/header";
import MainPage from "./components/main-page";
import OxyCalc from "./components/oxy-calc";
import FoodCalc from "./components/food-calc/food-calc";

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
                            <Route path="/calcs/oxygen">
                                <OxyCalc />
                            </Route>
                            <Route path="/calcs/food">
                                <FoodCalc />
                            </Route>
                        </Switch>
                    </div>
                </div>
            </div>
        </Router>
    );
}

export default App;
