import React, { useState } from "react";

const OxyCalc = (props) => {
    const [baseDupes, setBaseDupes] = useState(0);
    const [diversLungsDupes, setDiversLungsDupes] = useState(0);
    const [deepDiversLungsDupes, setDeepDiversLungsDupes] = useState(0);
    const [mouthbreatherDupes, setMouthbreatherDupes] = useState(0);

    const [oxygenUsed, setOxygenUsed] = useState(0);
    const [electrolyzersNeeded, setElectrolyzersNeeded] = useState(0);
    const [oxyferns, setOxyferns] = useState(0);

    const updateValues = () => {
        const oxygen =
            baseDupes * 100 +
            diversLungsDupes * 75 +
            deepDiversLungsDupes * 50 +
            mouthbreatherDupes * 200;
        setOxygenUsed(oxygen);
        setElectrolyzersNeeded(((oxygen - 31.3 * oxyferns) / 888).toPrecision(2));
    };

    const handleChange = (event) => {
        if (event.target.name === "base-dupes") {
            setBaseDupes(event.target.value);
        } else if (event.target.name === "divers-lungs") {
            setDiversLungsDupes(event.target.value);
        } else if (event.target.name === "deep-divers-lungs") {
            setDeepDiversLungsDupes(event.target.value);
        } else if (event.target.name === "mouthbreathers") {
            setMouthbreatherDupes(event.target.value);
        } else if (event.target.name === "oxyferns") {
            setOxyferns(event.target.value);
        }
    };

    return (
        <div>
            <div className="form-wrapper">
                <div className="input-wrapper">
                    <span>Regular dupes</span>
                    <input
                        type="text"
                        name="base-dupes"
                        value={baseDupes}
                        onChange={handleChange}
                        onBlur={updateValues}
                    />
                </div>
                <div className="input-wrapper">
                    <span>Diver's Lungs Dupes</span>
                    <input
                        type="text"
                        name="divers-lungs"
                        value={diversLungsDupes}
                        onChange={handleChange}
                        onBlur={updateValues}
                    />
                </div>
                <div className="input-wrapper">
                    <span>Deep Diver's Lungs Dupes</span>
                    <input
                        type="text"
                        name="deep-divers-lungs"
                        value={deepDiversLungsDupes}
                        onChange={handleChange}
                        onBlur={updateValues}
                    />
                </div>
                <div className="input-wrapper">
                    <span>Mouthbreather Dupes</span>
                    <input
                        type="text"
                        name="mouthbreathers"
                        value={mouthbreatherDupes}
                        onChange={handleChange}
                        onBlur={updateValues}
                    />
                </div>
                <div className="input-wrapper">
                    <span>Oxyferns used</span>
                    <input
                        type="text"
                        name="oxyferns"
                        value={oxyferns}
                        onChange={handleChange}
                        onBlur={updateValues}
                    />
                </div>
            </div>

            <div style={{ padding: "1em" }} />

            <div className="output-container">
                <div className="output-wrapper">
                    <span className="label">Oxygen used: </span>{" "}
                    <span className="output">{oxygenUsed}g/s</span>
                </div>
                <div className="output-wrapper">
                    <span className="label">Electrolyzers needed: </span>{" "}
                    <span className="output">{electrolyzersNeeded}</span>
                </div>
            </div>
        </div>
    );
};

export default OxyCalc;
