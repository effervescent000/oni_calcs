import React from "react";

const WorldStats = (props) => {
    const stats = {
        cooks: props.dupes.filter((dupe) => dupe.grilling).length,
        fieldResearchers: props.dupes.filter((dupe) => dupe.field_research).length,
        fullResearchers: props.dupes.filter((dupe) => dupe.data_analysis && dupe.applied_sciences)
            .length,
    };

    return (
        <div className="stats-wrapper">
            <div className="skill-wrapper">
                <div className="stat-wrapper">
                    <span className="label">Cooks</span>
                    <span className="value">{stats.cooks}</span>
                </div>
            </div>
            <div className="skill-wrapper">
                <div className="stat-wrapper">
                    <span className="label">Field Researchers</span>
                    <span className="value">{stats.fieldResearchers}</span>
                </div>
                <div className="stat-wrapper">
                    <span className="label">End-game researchers</span>
                    <span className="value">{stats.fullResearchers}</span>
                </div>
            </div>
        </div>
    );
};

export default WorldStats;
