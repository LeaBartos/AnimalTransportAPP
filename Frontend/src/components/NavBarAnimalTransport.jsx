import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { PRODUKCIJA, RoutesNames } from "../constants";
import { useNavigate } from "react-router-dom";

export default function NavBarAnimalTransport() {
    const navigate = useNavigate();

    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="/">Animal Transport APP</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link onClick={() => navigate(RoutesNames.HOME)}>Početna</Nav.Link>
                        <Nav.Link href={PRODUKCIJA + "/swagger"} target="_blank">
                            Swagger
                        </Nav.Link>
                        <NavDropdown title="Programi" id="basic-nav-dropdown">
                            <NavDropdown.Item onClick={() => navigate(RoutesNames.NARUCITELJ_PREGLED)}>Naručitelji</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
