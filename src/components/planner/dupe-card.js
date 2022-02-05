import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faEdit } from "@fortawesome/free-solid-svg-icons";

import DupeContext from "../../context/dupe-context";

const DupeCard = (props) => {
    const { toggleDupeModal, setDupeToEdit } = useContext(DupeContext);

    const editDupe = () => {
        setDupeToEdit(props.dupe);
        toggleDupeModal();
    };

    return (
        <div className="dupe-card-wrapper">
            <div className="dupe-image">
                <img
                    src={`${process.env.PUBLIC_URL}/images/dupes/ONI_${props.dupe.type}.jpg`}
                    alt={props.dupe.type}
                />
            </div>
            <div className="text-wrapper">
                <div className="dupe-name">{props.dupe.name}</div>
                <div className="buttons">
                    <button className="link-button" onClick={editDupe}>
                        <FontAwesomeIcon icon={faEdit} />
                    </button>
                    <button className="link-button">
                        <FontAwesomeIcon icon={faTrashAlt} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DupeCard;
