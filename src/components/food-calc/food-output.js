import React, { useState, useEffect } from "react";

import FoodGraph from "./food-graph";

const FoodOutput = (props) => {
    const foods = require("../../foods.json");
    const [foodData, setFoodData] = useState([]);
    const [graphData, setGraphData] = useState({ nodes: [], edges: [] });
    console.log("selectedFood", props.selectedFood);

    useEffect(() => {
        createDataNodes();
    }, []);

    const createDataNodes = () => {
        let nodes = [
            {
                id: "root",
                icon: {
                    height: 30,
                    width: 30,
                    url: props.selectedFood.url,
                },
            },
        ];
        let edges = [];
        // for (const ingredientString of props.selectedFood.ingredients) {
        //     const ingredientObject = foods[ingredientString];
        //     const subNode = {
        //         id: `${ingredientObject.label}-${nodes.length}`,
        //         icon: {
        //             url: ingredientObject.url,
        //         },
        //     };
        //     console.log("subNode", subNode);
        //     edges = [
        //         ...edges,
        //         { id: `root-${subNode.id}`, from: "root", target: subNode.id, to: subNode.id },
        //     ];
        //     // edges.push({ id: `root-${subNode.id}`, from: "root", to: subNode.id });
        //     [nodes, edges] = createSubNodes(nodes, edges, ingredientObject, subNode);
        // }
        // console.log("Nodes", nodes);
        // console.log("Edges", edges);
        // setGraphData({ nodes: nodes, edges: edges });

        let content = [
            {
                id: "root",
                position: { x: 0, y: 0 },
                data: { label: `${props.selectedFood.kcal}` },
            },
        ];
    };

    const createSubNodes = (nodes, edges, ingredient, parentNode) => {
        return [nodes, edges];
    };

    return (
        <div className="output-wrapper">
            {graphData.edges ? <FoodGraph graphData={graphData} /> : null}
        </div>
    );
};

export default FoodOutput;
