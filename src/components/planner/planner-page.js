import React, { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";

import PlannerFrame from "./planner-frame";

const PlannerPage = (props) => {
    const [dupes, setDupes] = useState([]);
    const [worlds, setWorlds] = useState([]);

    useEffect(() => {
        getWorlds();
    }, []);

    const addDupe = () => {};

    const addWorld = () => {
        axios
            .post(
                `${process.env.REACT_APP_DOMAIN}/world/add`,
                {},
                {
                    withCredentials: true,
                    headers: { "X-CSRF-TOKEN": Cookies.get("csrf_access_token") },
                }
            )
            .then((response) => {
                getWorlds();
            })
            .catch((error) => console.log(error.response));
    };

    const getWorlds = () => {
        axios
            .get(`${process.env.REACT_APP_DOMAIN}/world/get`, {
                withCredentials: true,
                headers: { "X-CSRF-TOKEN": Cookies.get("csrf_access_token") },
            })
            .then((response) => {
                setWorlds(response.data);
            })
            .catch((error) => console.log(error.response));
    };

    return (
        <div id="planner-wrapper">
            <div className="interaction-wrapper">
                <button onClick={addDupe}>New dupe</button>
                <button onClick={addWorld}>New world</button>
            </div>

            <PlannerFrame dupes={dupes} worlds={worlds} />
        </div>
    );
};

export default PlannerPage;
