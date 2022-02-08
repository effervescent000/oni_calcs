import React, { useState, useEffect } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import axios from "axios";
import Cookies from "js-cookie";
import { isEqual } from "lodash";

import PlannerFrame from "./planner-frame";
import DupeModal from "./dupe-modal";
import DupeContext from "../../context/dupe-context";
import SaveFileDropzone from "./save-file-dropzone";

const PlannerPage = (props) => {
    const [dupeToEdit, setDupeToEdit] = useState({});
    const [dupes, setDupes] = useState([]);
    const [dupeModalIsOpen, setDupeModalIsOpen] = useState(false);
    const [worlds, setWorlds] = useState([]);

    // useEffect(() => {
    // getWorlds();
    // getDupes();
    // });

    const getDupes = () => {
        axios
            .get(`${process.env.REACT_APP_DOMAIN}/dupe/get`, {
                withCredentials: true,
                headers: { "X-CSRF-TOKEN": Cookies.get("csrf_access_token") },
            })
            .then((response) => {
                if (!isEqual(dupes, response.data)) {
                    setDupes(response.data);
                }
            })
            .catch((error) => console.log(error.response));
    };

    const toggleDupeModal = () => {
        setDupeModalIsOpen(!dupeModalIsOpen);
    };

    const addWorld = () => {
        // axios
        //     .post(
        //         `${process.env.REACT_APP_DOMAIN}/world/add`,
        //         {},
        //         {
        //             withCredentials: true,
        //             headers: { "X-CSRF-TOKEN": Cookies.get("csrf_access_token") },
        //         }
        //     )
        //     .then((response) => {
        //         getWorlds();
        //     })
        //     .catch((error) => console.log(error.response));
        setWorlds([...worlds, { name: "", id: worlds.length + 1 }]);
    };

    // const getWorlds = () => {
    //     axios
    //         .get(`${process.env.REACT_APP_DOMAIN}/world/get`, {
    //             withCredentials: true,
    //             headers: { "X-CSRF-TOKEN": Cookies.get("csrf_access_token") },
    //         })
    //         .then((response) => {
    //             if (!isEqual(response.data, worlds)) {
    //                 setWorlds(response.data);
    //             }
    //         })
    //         .catch((error) => console.log(error.response));
    // };

    const handleOnDragEnd = (result) => {
        // const data = {
        //     dupeId: result.draggableId,
        //     destinationId: result.destination.droppableId,
        // };
        // axios
        //     .put(`${process.env.REACT_APP_DOMAIN}/dupe/world`, data, {
        //         withCredentials: true,
        //         headers: { "X-CSRF-TOKEN": Cookies.get("csrf_access_token") },
        //     })
        //     .then((response) => {
        //         getDupes();
        //     })
        //     .catch((error) => console.log(error.response));
        console.log(result);
        let dupesCopy = [...dupes];
        for (const dupe of dupesCopy) {
            if (parseInt(result.draggableId) === dupe.id) {
                dupe.world = parseInt(result.destination.droppableId);
            }
        }
        setDupes(dupesCopy);
    };

    return (
        <DragDropContext onDragEnd={handleOnDragEnd}>
            <DupeContext.Provider
                value={{
                    dupeModalIsOpen,
                    toggleDupeModal,
                    dupeToEdit,
                    setDupeToEdit,
                    getDupes,
                }}
            >
                <div id="planner-wrapper">
                    <SaveFileDropzone setDupes={setDupes} />
                    <div className="interaction-wrapper">
                        <button onClick={toggleDupeModal}>New dupe</button>
                        <DupeModal
                            isOpen={dupeModalIsOpen}
                            toggle={toggleDupeModal}
                            dupe={dupeToEdit}
                        />
                        <button onClick={addWorld}>New world</button>
                    </div>

                    <PlannerFrame dupes={dupes} worlds={worlds} />
                </div>
            </DupeContext.Provider>
        </DragDropContext>
    );
};

export default PlannerPage;
