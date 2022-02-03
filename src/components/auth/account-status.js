import React, { useContext } from "react";
import { UserContext } from "../../user-context";

const AccountStatus = (props) => {
    const { loggedIn, user } = useContext(UserContext);

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
                    <button className="link-button">Login</button>
                </div>
            );
        }
    };

    return renderContent();
};

export default AccountStatus;
