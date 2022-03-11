import React from "react";
import { Nav, Navbar, NavbarBrand, NavItem, NavLink } from "reactstrap";

import AccountStatus from "./auth/account-status";

const Header = (props) => {
    return (
        <div id="header">
            <div className="left-side">
                <Navbar>
                    <NavbarBrand href="/">ONI Planner</NavbarBrand>
                    <Nav>
                        <NavItem>
                            <NavLink href="/">Planner</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/calcs/oxygen">Oxygen</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/calcs/food">Food</NavLink>
                        </NavItem>
                    </Nav>
                </Navbar>
            </div>
            <div className="right-side">{/* <AccountStatus /> */}</div>
        </div>
    );
};

export default Header;
