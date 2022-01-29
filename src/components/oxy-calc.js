import React, { useState } from "react";

const OxyCalc = (props) => {
    const [baseDupes, setBaseDupes] = useState(0);
    const [diversLungsDupes, setDiversLungsDupes] = useState(0);
    const [deepDiversLungsDupes, setDeepDiversLungsDupes] = useState(0);
    const [mouthbreatherDupes, setMouthbreatherDupes] = useState(0);
    const [electrolyzerEfficiency, setElectrolyzerEfficiency] = useState(100);

    const [oxygenUsed, setOxygenUsed] = useState(0);
    const [electrolyzersNeeded, setElectrolyzersNeeded] = useState(0);
    const [oxyferns, setOxyferns] = useState(0);
    const [waterRequired, setWaterRequired] = useState(0);

    const updateValues = () => {
        const oxygen =
            baseDupes * 100 +
            diversLungsDupes * 75 +
            deepDiversLungsDupes * 50 +
            mouthbreatherDupes * 200;
        setOxygenUsed(oxygen);
        const electrolyzers = (
            (oxygen - 31.3 * oxyferns) /
            888 /
            (electrolyzerEfficiency / 100)
        ).toPrecision(2);
        setElectrolyzersNeeded(electrolyzers);
        setWaterRequired(electrolyzers * 600);
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
        } else if (event.target.name === "efficiency") {
            setElectrolyzerEfficiency(event.target.value);
        }
    };

    return (
        <div className="calc-wrapper">
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
                <div className="input-wrapper">
                    <span>Electrolyzer Efficiency</span>
                    <input
                        type="text"
                        name="efficiency"
                        value={electrolyzerEfficiency}
                        onChange={handleChange}
                        onBlur={updateValues}
                    />
                </div>
            </div>

            <div style={{ padding: "1em" }} />

            <div className="output-container">
                <div className="output-wrapper">
                    <span className="label">Oxygen used: </span>{" "}
                    <span
                        className="output"
                        style={parseFloat(oxygenUsed) > 0 ? { color: "#afb3f7" } : null}
                    >
                        {oxygenUsed} g/s
                    </span>
                </div>
                <div className="output-wrapper">
                    <span className="label">Electrolyzers needed: </span>{" "}
                    <span
                        className="output"
                        style={parseFloat(electrolyzersNeeded) > 0 ? { color: "#afb3f7" } : null}
                    >
                        {electrolyzersNeeded}
                    </span>
                </div>
                <div className="output-wrapper">
                    <span className="label">Water required per cycle: </span>{" "}
                    <span
                        className="output"
                        style={parseFloat(waterRequired) > 0 ? { color: "#afb3f7" } : null}
                    >
                        {waterRequired} kg
                    </span>
                </div>
            </div>
        </div>
    );
};

export default OxyCalc;
