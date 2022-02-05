import React from "react";

import WorldPanel from "./world-panel";
import DupeCard from "./dupe-card";

const PlannerFrame = (props) => {
    const unassignedDupes = props.dupes.filter((dupe) => dupe.world_id === null);

    const populateUnassignedDupes = () => {
        return unassignedDupes.map((dupe) => {
            return <DupeCard key={dupe.id} dupe={dupe} />;
        });
    };

    const populateWorlds = () => {
        return props.worlds.map((world) => {
            return <WorldPanel key={world.id} world={world} />;
        });
    };

    return (
        <div className="planner-frame">
            <span>Unassigned dupes</span>
            <div className="dupes-wrapper">{populateUnassignedDupes()}</div>

            <div className="worlds-wrapper">{populateWorlds()}</div>
        </div>
    );
};

export default PlannerFrame;
