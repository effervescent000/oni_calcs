import React from "react";

const WorldStats = (props) => {
    const stats = {
        cooks: props.dupes.filter((dupe) => dupe.Cooking1).length,
        builders: props.dupes.filter((dupe) => dupe.construction > 15).length,
        farmers: props.dupes.filter((dupe) => dupe.Farming2).length,
        ranchers: props.dupes.filter((dupe) => dupe.Ranching1).length,
        fieldResearchers: props.dupes.filter((dupe) => dupe.Researching2).length,
        fullResearchers: props.dupes.filter((dupe) => dupe.data_analysis && dupe.applied_sciences)
            .length,
    };

    return (
        <div className="stats-wrapper">
            <div className="skill-wrapper">
                <div className="stat-wrapper">
                    <span className="label">Farmers</span>
                    <span className="value">{stats.farmers}</span>
                </div>
                <div className="stat-wrapper">
                    <span className="label">Ranchers</span>
                    <span className="value">{stats.ranchers}</span>
                </div>
            </div>
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
