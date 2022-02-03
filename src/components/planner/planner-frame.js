import React from "react";

import WorldPanel from "./world-panel";

const PlannerFrame = (props) => {
    const populateData = () => {
        return props.worlds.map((world) => {
            return <WorldPanel key={world.id} world={world} />;
        });
    };

    return <div className="worlds-wrapper">{populateData()}</div>;
};

export default PlannerFrame;
