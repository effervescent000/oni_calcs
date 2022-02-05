// import logo from "./logo.svg";
import "bootstrap/scss/bootstrap.scss";
import "./styles/main.scss";

import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

import Header from "./components/header";
import MainPage from "./components/main-page";
import OxyCalc from "./components/oxy-calc";
import FoodCalcPage from "./components/food-calc/food-calc-page";
import PlannerPage from "./components/planner/planner-page";
import { UserContext } from "./user-context";

function App() {
    const [loggedIn, setLoggedIn] = useState(false);
    const [profile, setProfile] = useState({});
    const [user, setUser] = useState({});

    useEffect(() => {
        if (!loggedIn) {
            axios
                .get(`${process.env.REACT_APP_DOMAIN}/auth/check`, {
                    withCredentials: true,
                    headers: { "X-CSRF-TOKEN": Cookies.get("csrf_access_token") },
                })
                .then((response) => {
                    // console.log(response);
                    if (Object.keys(response.data).length > 0) {
                        toggleLogIn();
                        setUser(response.data);
                    }
                })
                .catch((error) => console.log(error.response));
        }
    });

    const toggleLogIn = () => {
        if (loggedIn) {
            setLoggedIn(false);
        } else {
            setLoggedIn(true);
        }
    };

    return (
        <Router>
            <UserContext.Provider
                value={{ loggedIn, toggleLogIn, profile, setProfile, user, setUser }}
            >
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
                                    <FoodCalcPage />
                                </Route>
                                <Route path="/planner">
                                    <PlannerPage />
                                </Route>
                            </Switch>
                        </div>
                    </div>
                </div>
            </UserContext.Provider>
        </Router>
    );
}

export default App;
