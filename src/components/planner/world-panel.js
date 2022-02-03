import React, { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

const WorldPanel = (props) => {
    const [worldName, setworldName] = useState(props.world.name);

    const handleChange = (event) => {
        if (event.target.name === "world-name-input") {
            setworldName(event.target.value);
        }
    };

    const handleBlur = (event) => {
        if (event.target.name === "world-name-input") {
            axios
                .put(
                    `${process.env.REACT_APP_DOMAIN}/world/update`,
                    { id: props.world.id, name: event.target.value },
                    {
                        withCredentials: true,
                        headers: { "X-CSRF-TOKEN": Cookies.get("csrf_access_token") },
                    }
                )
                .then((response) => {
                    console.log(response);
                })
                .catch((error) => console.log(error.response));
        }
    };

    return (
        <div className="world-wrapper">
            <input
                type="text"
                value={worldName}
                name="world-name-input"
                onChange={handleChange}
                onBlur={handleBlur}
            />
        </div>
    );
};

export default WorldPanel;
