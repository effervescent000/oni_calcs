import React, { useState, useEffect } from "react";

import PlannerFrame from "./planner-frame";

const PlannerPage = (props) => {
    const [dupes, setDupes] = useState([]);
    const [planets, setPlanets] = useState([]);

    return (
        <div id="planner-wrapper">
            <PlannerFrame dupes={dupes} planets={planets} />
        </div>
    );
};

export default PlannerPage;
