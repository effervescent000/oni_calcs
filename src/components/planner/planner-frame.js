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
        <div className="worlds-wrapper">
            {populateUnassignedDupes()}
            {populateWorlds()}
        </div>
    );
};

export default PlannerFrame;
