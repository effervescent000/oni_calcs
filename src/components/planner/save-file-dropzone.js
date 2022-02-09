import React, { useState, useCallback, useEffect } from "react";
import axios from "axios";
import { useDropzone } from "react-dropzone";

const SaveFileDropzone = (props) => {
    const [processingData, setProcessingData] = useState(false);

    const { parseSaveGame } = require("oni-save-parser");

    function loadFile(parsedFile) {
        // const fileData = readFileSync(`${fileName}`);
        // return parseSaveGame(fileData.buffer);
        return parseSaveGame(parsedFile, { versionStrictness: "none" });
    }

    const onDrop = useCallback((acceptedFiles) => {
        setProcessingData(true);
        const reader = new FileReader();
        reader.onload = () => {
            const saveData = loadFile(reader.result);
            console.log(saveData);
            let dupes = findDupes(saveData);
            props.setDupes(buildDupes(dupes.gameObjects));
            let worlds = findWorlds(saveData);
            props.setWorlds(buildWorlds(worlds.gameObjects));
            setProcessingData(false);
        };
        reader.readAsArrayBuffer(acceptedFiles[0]);
    }, []);

    const buildWorlds = (worldsRaw) => {
        let worlds = [];
        for (const worldData of worldsRaw) {
            if (worldData.behaviors[2].templateData.isDiscovered) {
                worlds.push({
                    id: worlds.length + 1,
                    name: worldData.behaviors[3].templateData.m_name,
                    type: worldData.behaviors[2].templateData.worldName.split("/")[1],
                    // the point of having this twice is that a user can edit the name, but the type can be used to pull in a picture of the asteroid
                });
            }
        }
        return worlds;
    };

    const buildDupes = (dupesRaw) => {
        let dupes = [];
        for (const dupeData of dupesRaw) {
            let dupe = {
                id: dupes.length,
                name: dupeData.behaviors[14].templateData.name,
                type:
                    dupeData.behaviors[14].templateData.nameStringKey.slice(0, 1) +
                    dupeData.behaviors[14].templateData.nameStringKey.slice(1).toLowerCase(),
                world: 0,
                agriculture: dupeData.behaviors[5].templateData.saveLoadLevels[10].level,
                athletics: dupeData.behaviors[5].templateData.saveLoadLevels[4].level,
                construction: dupeData.behaviors[5].templateData.saveLoadLevels[1].level,
                creativity: dupeData.behaviors[5].templateData.saveLoadLevels[9].level,
                cuisine: dupeData.behaviors[5].templateData.saveLoadLevels[6].level,
                excavation: dupeData.behaviors[5].templateData.saveLoadLevels[2].level,
                husbandry: dupeData.behaviors[5].templateData.saveLoadLevels[11].level,
                machinery: dupeData.behaviors[5].templateData.saveLoadLevels[3].level,
                medicine: dupeData.behaviors[5].templateData.saveLoadLevels[7].level,
                piloting: dupeData.behaviors[5].templateData.saveLoadLevels[0].level,
                rocketry: 0, //rocketry skill not supported by the parser yet
                science: dupeData.behaviors[5].templateData.saveLoadLevels[5].level,
                strength: dupeData.behaviors[5].templateData.saveLoadLevels[8].level,
                availableSkillPoints: "", // idk if i can see this anywhere
            };
            for (const skill of dupeData.behaviors[38].templateData.MasteryBySkillID) {
                dupe = { ...dupe, [skill[0]]: true };
            }
            dupes.push(dupe);
        }
        return dupes;
    };

    const findWorlds = (saveData) => {
        for (const gameObject of saveData.gameObjects) {
            if (gameObject.name === "Asteroid") {
                return gameObject;
            }
        }
    };

    const findDupes = (saveData) => {
        for (const gameObject of saveData.gameObjects) {
            if (gameObject.name === "Minion") {
                return gameObject;
            }
        }
    };

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
    const style = { alignItems: "center" };

    return (
        <div className="upload-wrapper" {...getRootProps({ style })}>
            <input type="button" {...getInputProps} />
            {processingData ? <span>Processing...</span> : <span>Drop a save file here</span>}
            <div />
        </div>
    );
};

export default SaveFileDropzone;
