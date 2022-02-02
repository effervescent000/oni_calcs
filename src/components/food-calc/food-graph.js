import React from "react";
import { Canvas } from "reaflow";

import foods from "../../foods";

const FoodGraph = (props) => {
    const { nodes, edges } = props.graphData;

    return (
        <div id="graph-wrapper">
            <Canvas nodes={nodes} />
        </div>
    );
};

export default FoodGraph;
