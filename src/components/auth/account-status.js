import React, { useContext, useState } from "react";
import { UserContext } from "../../context/user-context";

import SignupModal from "./signup-modal";
import LoginModal from "./login-modal";
import ProfilesModal from "./profiles-modal";

const AccountStatus = (props) => {
    const { loggedIn, user } = useContext(UserContext);
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

    const renderContent = () => {
        if (loggedIn) {
            return (
                <div className="account-status">
                    <span className="greeting">Hi, {user.username}!</span>
                    <button className="link-button" onClick={toggleProfilesModal}>
                        Manage profiles
                    </button>
                    <ProfilesModal isOpen={profilesModal} toggle={toggleProfilesModal} />
                    <button className="link-button">Logout</button>
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
