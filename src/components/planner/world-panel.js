import React, { useState } from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";

import DupeCard from "./dupe-card";
import WorldStats from "./world-stats";

const WorldPanel = ({ world, dupes }) => {
    const [worldName, setworldName] = useState(world.name);
    const worldDupes = dupes.filter((dupe) => dupe.world === world.id);

    const handleChange = (event) => {
        if (event.target.name === "world-name-input") {
            setworldName(event.target.value);
        }
    };

    const renderDupes = () => {
        return worldDupes.map((dupe, index) => {
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
            <Droppable droppableId={`${world.id}`}>
                {(provided) => (
                    <ul
                        className="dupes-drop-wrapper"
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                    >
                        <div className="world-img-wrapper">
                            {world.type ? (
                                <img
                                    src={`${process.env.PUBLIC_URL}/images/worlds/${world.type}.webp`}
                                    alt={world.type}
                                />
                            ) : null}
                        </div>

                        <input
                            type="text"
                            value={worldName}
                            name="world-name-input"
                            onChange={handleChange}
                        />
                        <WorldStats dupes={worldDupes} />
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
