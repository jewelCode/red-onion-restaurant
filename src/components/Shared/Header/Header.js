import React from 'react';
import { Button, Container, Nav, Navbar} from 'react-bootstrap';
import logo from '../../../resources/logo2.png'
import './Header.css';
const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand href="#home">
                    <img
                        src={logo}
                        height="40"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                        </Nav>
                        <Nav>
                        <Nav.Link href="#deets">Login</Nav.Link>
                        <Button variant="danger">Sign Up</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;