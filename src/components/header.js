import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

const Header = (props) => {
    return (
        <div id="header">
            <Navbar>
                <Container>
                    <Navbar.Brand href="/">ONI Calcs</Navbar.Brand>
                </Container>
                <Container>
                    <Navbar.Collapse>
                        <Nav>
                            <Nav.Link href="/oxygencalc">Oxygen Calc</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;
