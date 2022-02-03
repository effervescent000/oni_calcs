import React, { useContext, useState } from "react";
import { UserContext } from "../../user-context";
import LoginModal from "./login-modal";

import SignupModal from "./signup-modal";

const AccountStatus = (props) => {
    const { loggedIn, user } = useContext(UserContext);
    const [signupModal, setSignupModal] = useState(false);
    const [loginModal, setLoginModal] = useState(false);

    const toggleSignupModal = () => {
        setSignupModal(!signupModal);
    };

    const toggleLoginModal = () => {
        setLoginModal(!loginModal);
    };

    const renderContent = () => {
        if (loggedIn) {
            return (
                <div className="account-status">
                    <span className="greeting">Hi, {user.name}!</span>
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
