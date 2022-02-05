import React, { useState } from "react";

const DupeCard = (props) => {
    return (
        <div className="dupe-card-wrapper">
            <div className="dupe-name">{props.dupe.name}</div>
        </div>
    );
};

export default DupeCard;
