import React, { useState } from "react";

const DupeCard = (props) => {
    return (
        <div className="dupe-card-wrapper">
            <div className="dupe-image">
                <img
                    src={`${process.env.PUBLIC_URL}/images/dupes/ONI_${props.dupe.type}.jpg`}
                    alt={props.dupe.type}
                />
            </div>
            <div className="dupe-name">{props.dupe.name}</div>
        </div>
    );
};

export default DupeCard;
