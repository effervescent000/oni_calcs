import React from "react";

const HelpPanel = (props) => {
    return (
        <div className="help-panel-wrapper">
            <div className="header-wrapper">
                <div className="header">Get started</div>
                <div className="controls-wrapper">
                    <button>-</button>
                    <button>x</button>
                </div>
            </div>
            <div className="body-wrapper">
                <p>
                    To begin, drag and drop a save file onto the panel to the
                    left, or click the button to use test data (please give it a
                    moment to process the data). You can also enter your Dupes
                    and world info manually.
                </p>
            </div>
        </div>
    );
};

export default HelpPanel;
