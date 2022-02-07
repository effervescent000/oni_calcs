import React, { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { Droppable, Draggable } from "react-beautiful-dnd";

import DupeCard from "./dupe-card";
import WorldStats from "./world-stats";

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
        return dupes.map((dupe, index) => {
            return (
                <Draggable key={dupe.id} draggableId={`${dupe.id}`} index={index}>
                    {(provided) => (
                        <li
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                        >
                            <DupeCard dupe={dupe} />
                        </li>
                    )}
                </Draggable>
            );
        });
    };

    return (
        <div className="world-wrapper">
            <Droppable droppableId={`${props.world.id}`}>
                {(provided) => (
                    <ul
                        className="dupes-drop-wrapper"
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
                        <WorldStats dupes={dupes} />
                        <div className="dupes-wrapper">
                            {renderDupes()}
                            {provided.placeholder}
                        </div>
                    </ul>
                )}
            </Droppable>
        </div>
    );
};

export default WorldPanel;
