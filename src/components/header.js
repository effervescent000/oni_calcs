import React from "react";
import { Nav, Navbar, NavbarBrand, NavItem, NavLink } from "reactstrap";

const Header = (props) => {
    return (
        <div id="header">
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
    );
};

export default Header;
