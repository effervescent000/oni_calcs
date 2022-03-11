import "bootstrap/scss/bootstrap.scss";
import "./styles/main.scss";

import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/header";
import OxyCalc from "./components/oxy-calc";
import FoodCalcPage from "./components/food-calc/food-calc-page";
import PlannerPage from "./components/planner/planner-page";
import { UserContext } from "./context/user-context";

function App() {
    const [loggedIn, setLoggedIn] = useState(false);
    const [profile, setProfile] = useState({});
    const [user, setUser] = useState({});

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
                value={{
                    loggedIn,
                    toggleLogIn,
                    profile,
                    setProfile,
                    user,
                    setUser,
                }}
            >
                <div id="app">
                    <Header />
                    <div id="page-wrapper">
                        <div className="content-wrapper">
                            <Switch>
                                <Route exact path="/">
                                    <PlannerPage />
                                </Route>
                                <Route path="/calcs/oxygen">
                                    <OxyCalc />
                                </Route>
                                <Route path="/calcs/food">
                                    <FoodCalcPage />
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
