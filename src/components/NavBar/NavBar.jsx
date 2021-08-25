import React from 'react'
import { Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './CartWidget';
import './Style.css';


export default function NavBar() {
    return (
        <div>
            <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">Reiwa Izakaya</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#">Menú</Nav.Link>
                    <Nav.Link href="#">Nosotros</Nav.Link>
                    <NavDropdown title="Carta" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Entradas</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Platos de fondo</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Bebidas</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Ver todo</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#">Contacto</Nav.Link>
                </Nav>
                </Navbar.Collapse>
                <CartWidget />
            </Container>
            </Navbar>
        </div>
    )
}
