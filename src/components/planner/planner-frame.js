import React from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";

import WorldPanel from "./world-panel";
import DupeCard from "./dupe-card";

const PlannerFrame = (props) => {
    const unassignedDupes = props.dupes.filter((dupe) => dupe.world === 0);

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
            return <WorldPanel key={world.id} world={world} dupes={props.dupes} />;
        });
    };

    return (
        <div className="planner-frame">
            <Droppable droppableId="0">
                {(provided) => (
                    <ul
                        className="unassigned-dupes dupes-drop-wrapper"
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                    >
                        <span>Unassigned dupes</span>
                        <div className="dupes-wrapper">
                            {populateUnassignedDupes()}
                            {provided.placeholder}
                        </div>
                    </ul>
                )}
            </Droppable>

            <div className="worlds-wrapper">{populateWorlds()}</div>
        </div>
    );
};

export default PlannerFrame;
