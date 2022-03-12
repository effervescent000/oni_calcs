import React, { useState } from "react";
import { Collapse } from "reactstrap";

const HelpPanel = (props) => {
    const [display, setDisplay] = useState(true);
    const [collapse, setCollapse] = useState(true);

    const toggleDisplay = () => {
        setDisplay(!display);
    };

    if (!display) {
        return (
            <div className="help-panel-wrapper">
                <span onClick={toggleDisplay}>?</span>
            </div>
        );
    }

    return (
        <div className="help-panel-wrapper">
            <div className="header-wrapper">
                <div className="header">Get started</div>
                <div className="controls-wrapper">
                    <button onClick={() => setCollapse(!collapse)}>-</button>
                    <button onClick={toggleDisplay}>x</button>
                </div>
            </div>
            <Collapse isOpen={collapse}>
                <div className="body-wrapper">
                    <p>
                        To begin, drag and drop a save file onto the panel to the left, or click the
                        button to use test data (please give it a moment to process the data). You
                        can also enter your Dupes and world info manually.
                    </p>
                    <p>
                        Drag dupes onto the world cards to move them. You can also drag dupes from
                        one world to another.
                    </p>
                </div>
            </Collapse>
        </div>
    );
};

export default HelpPanel;
