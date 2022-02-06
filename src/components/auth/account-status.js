import React, { useContext, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { UserContext } from "../../context/user-context";

import SignupModal from "./signup-modal";
import LoginModal from "./login-modal";
import ProfilesModal from "./profiles-modal";

const AccountStatus = (props) => {
    const { loggedIn, user, toggleLogIn, setUser } = useContext(UserContext);
    const [signupModal, setSignupModal] = useState(false);
    const [loginModal, setLoginModal] = useState(false);
    const [profilesModal, setProfilesModal] = useState(false);

    const toggleSignupModal = () => {
        setSignupModal(!signupModal);
    };

    const toggleLoginModal = () => {
        setLoginModal(!loginModal);
    };

    const toggleProfilesModal = () => {
        setProfilesModal(!profilesModal);
    };

    const handleLogout = () => {
        axios
            .delete(`${process.env.REACT_APP_DOMAIN}/auth/logout`, {
                withCredentials: true,
                headers: { "X-CSRF-TOKEN": Cookies.get("csrf_access_token") },
            })
            .then((response) => {
                toggleLogIn();
                setUser({});
            })
            .catch((error) => console.log(error.response));
    };

    const renderContent = () => {
        if (loggedIn) {
            return (
                <div className="account-status">
                    <span className="greeting">Hi, {user.username}!</span>
                    <button className="link-button" onClick={toggleProfilesModal}>
                        Manage profiles
                    </button>
                    <ProfilesModal isOpen={profilesModal} toggle={toggleProfilesModal} />
                    <button className="link-button" onClick={handleLogout}>
                        Logout
                    </button>
                </div>
            );
        } else {
            return (
                <div className="account-status">
                    <button className="link-button" onClick={toggleSignupModal}>
                        Signup
                    </button>
                    <SignupModal isOpen={signupModal} toggle={toggleSignupModal} />
                    <button className="link-button" onClick={toggleLoginModal}>
                        Login
                    </button>
                    <LoginModal isOpen={loginModal} toggle={toggleLoginModal} />
                </div>
            );
        }
    };

    return renderContent();
};

export default AccountStatus;
