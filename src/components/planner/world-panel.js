import React, { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { Droppable } from "react-beautiful-dnd";

import DupeCard from "./dupe-card";

const WorldPanel = (props) => {
    const [worldName, setworldName] = useState(props.world.name);
    const dupes = props.dupes.filter((dupe) => dupe.world_id === props.world.id);

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

    const renderDupes = () => {
        return dupes.map((dupe) => {
            return (
                <li key={dupe.id}>
                    <DupeCard dupe={dupe} />
                </li>
            );
        });
    };

    return (
        <div className="world-wrapper">
            <Droppable droppableId={`${props.world.id}`}>
                {(provided) => (
                    <ul
                        className="dupes-wrapper"
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                    >
                        <input
                            type="text"
                            value={worldName}
                            name="world-name-input"
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {renderDupes()}
                        {provided.placeholder}
                    </ul>
                )}
            </Droppable>
        </div>
    );
};

export default WorldPanel;
