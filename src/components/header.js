import React from "react";
import { Nav, Navbar, NavbarBrand, NavItem, NavLink } from "reactstrap";

import AccountStatus from "./auth/account-status";

const Header = (props) => {
    return (
        <div id="header">
            <div className="left-side">
                <Navbar>
                    <NavbarBrand href="/">ONI Calcs</NavbarBrand>
                    <Nav>
                        <NavItem>
                            <NavLink href="/calcs/oxygen">Oxygen</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/calcs/food">Food</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/planner">Planner</NavLink>
                        </NavItem>
                    </Nav>
                </Navbar>
            </div>
            <div className="right-side">
                <AccountStatus />
            </div>
        </div>
    );
};

export default Header;
