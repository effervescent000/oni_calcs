import React, { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { isEqual } from "lodash";

import PlannerFrame from "./planner-frame";
import DupeModal from "./dupe-modal";

const PlannerPage = (props) => {
    const [dupes, setDupes] = useState([]);
    const [dupeModalIsOpen, setDupeModalIsOpen] = useState(false);
    const [worlds, setWorlds] = useState([]);

    useEffect(() => {
        getWorlds();
        getDupes();
    }, [dupes, worlds]);

    const getDupes = () => {
        axios
            .get(`${process.env.REACT_APP_DOMAIN}/dupe/get`, {
                withCredentials: true,
                headers: { "X-CSRF-TOKEN": Cookies.get("csrf_access_token") },
            })
            .then((response) => {
                if (!isEqual(dupes, response.data)) {
                    setDupes(response.data);
                }
            })
            .catch((error) => console.log(error.response));
    };

    const toggleDupeModal = () => {
        setDupeModalIsOpen(!dupeModalIsOpen);
    };

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
                if (!isEqual(response.data, worlds)) {
                    setWorlds(response.data);
                }
            })
            .catch((error) => console.log(error.response));
    };

    return (
        <div id="planner-wrapper">
            <div className="interaction-wrapper">
                <button onClick={toggleDupeModal}>New dupe</button>
                <DupeModal
                    isOpen={dupeModalIsOpen}
                    toggle={toggleDupeModal}
                    dupe={{}}
                    getDupes={getDupes}
                />
                <button onClick={addWorld}>New world</button>
            </div>

            <PlannerFrame dupes={dupes} worlds={worlds} getDupes={getDupes} />
        </div>
    );
};

export default PlannerPage;
