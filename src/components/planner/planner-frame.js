import React from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";

import WorldPanel from "./world-panel";
import DupeCard from "./dupe-card";

const PlannerFrame = (props) => {
    const unassignedDupes = props.dupes.filter((dupe) => dupe.world_id === null);

    const populateUnassignedDupes = () => {
        return unassignedDupes.map((dupe, index) => {
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

    const populateWorlds = () => {
        return props.worlds.map((world) => {
            return (
                <li key={world.id}>
                    <WorldPanel world={world} dupes={props.dupes} />
                </li>
            );
        });
    };

    return (
        <div className="planner-frame">
            <Droppable droppableId="0">
                {(provided) => (
                    <ul
                        className="dupes-wrapper"
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                    >
                        <span>Unassigned dupes</span>
                        {populateUnassignedDupes()}
                        {provided.placeholder}
                    </ul>
                )}
            </Droppable>

            <div className="worlds-wrapper">{populateWorlds()}</div>
        </div>
    );
};

export default PlannerFrame;
