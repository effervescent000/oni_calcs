import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { Formik, Form } from "formik";
import { Modal, ModalBody } from "reactstrap";
import * as Yup from "yup";

import { UserContext } from "../../context/user-context";

const ProfilesModal = (props) => {
    const { setProfile } = useContext(UserContext);

    const [profiles, setProfiles] = useState([]);

    const populateProfiles = () => {
        return profiles.map((profile) => {
            return (
                <div key={profile.id} className="profile-wrapper">
                    <input
                        type="radio"
                        name="is-active-radio"
                        id="is-active-radio"
                        value={profile.id}
                        checked={profile.is_active}
                        onChange={handleChange}
                    />
                    <span>Profile {profile.id}</span>
                    <button name="delete-profile-btn" value={profile.id} onClick={handleClick}>
                        Delete
                    </button>
                </div>
            );
        });
    };

    useEffect(() => {
        getProfiles();
    }, []);

    const handleChange = (event) => {
        if (event.target.name === "is-active-radio") {
            axios
                .put(
                    `${process.env.REACT_APP_DOMAIN}/profile/activate`,
                    { id: event.target.value },
                    {
                        withCredentials: true,
                        headers: { "X-CSRF-TOKEN": Cookies.get("csrf_access_token") },
                    }
                )
                .then((response) => {
                    getProfiles();
                    setProfile(response.data);
                })
                .catch((error) => console.log(error.response));
        }
    };

    const getProfiles = () => {
        axios
            .get(`${process.env.REACT_APP_DOMAIN}/profile/get`, {
                withCredentials: true,
                headers: { "X-CSRF-TOKEN": Cookies.get("csrf_access_token") },
            })
            .then((response) => {
                setProfiles(response.data);
            })
            .catch((error) => console.log(error.response));
    };

    const handleClick = (event) => {
        if (event.target.name === "new-profile-btn") {
            axios
                .post(
                    `${process.env.REACT_APP_DOMAIN}/profile/add`,
                    {},
                    {
                        withCredentials: true,
                        headers: { "X-CSRF-TOKEN": Cookies.get("csrf_access_token") },
                    }
                )
                .then((response) => {
                    getProfiles();
                })
                .catch((error) => console.log(error.response));
        } else if (event.target.name === "delete-profile-btn") {
            axios
                .delete(`${process.env.REACT_APP_DOMAIN}/profile/delete/${event.target.value}`, {
                    withCredentials: true,
                    headers: { "X-CSRF-TOKEN": Cookies.get("csrf_access_token") },
                })
                .then((response) => {
                    getProfiles();
                })
                .catch((error) => console.log(error.response));
        }
    };

    return (
        <Modal isOpen={props.isOpen} toggle={props.toggle}>
            <ModalBody>
                <button name="new-profile-btn" className="link-button" onClick={handleClick}>
                    Create new profile
                </button>
                {populateProfiles()}
            </ModalBody>
        </Modal>
    );
};

export default ProfilesModal;
