import React, { useContext } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faEdit } from "@fortawesome/free-solid-svg-icons";

import DupeContext from "../../context/dupe-context";

const DupeCard = (props) => {
    const { toggleDupeModal, setDupeToEdit, getDupes } = useContext(DupeContext);

    const editDupe = () => {
        setDupeToEdit(props.dupe);
        console.log(props.dupe);
        toggleDupeModal();
    };

    const deleteDupe = () => {
        axios
            .delete(`${process.env.REACT_APP_DOMAIN}/dupe/delete/${props.dupe.id}`, {
                withCredentials: true,
                headers: { "X-CSRF-TOKEN": Cookies.get("csrf_access_token") },
            })
            .then((response) => {
                getDupes();
            })
            .catch((error) => console.log(error.response));
    };

    return (
        <div className="dupe-card-wrapper">
            <div className="dupe-image">
                <img
                    src={`${process.env.PUBLIC_URL}/images/dupes/ONI_${props.dupe.type}.webp`}
                    alt={props.dupe.type}
                />
            </div>
            <div className="text-wrapper">
                <div className="dupe-name">{props.dupe.name}</div>
                <div className="buttons">
                    <button className="link-button" onClick={editDupe}>
                        <FontAwesomeIcon icon={faEdit} />
                    </button>
                    <button className="link-button" onClick={deleteDupe}>
                        <FontAwesomeIcon icon={faTrashAlt} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DupeCard;
