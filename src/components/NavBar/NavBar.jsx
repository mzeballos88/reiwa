import React from 'react'
import { NavLink } from 'react-router-dom';
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
                <NavLink to="/" style={{textDecoration: 'none'}}>
                    <Navbar.Brand href="#">Reiwa Izakaya</Navbar.Brand>
                </NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#">Menú</Nav.Link>
                    <Nav.Link href="#">Nosotros</Nav.Link>
                    <NavDropdown title="Carta" id="basic-nav-dropdown">
                        <NavLink to="/categoria/entrada" style={{textDecoration: 'none'}}>
                            Entradas
                        </NavLink>
                        <br/>
                        <NavLink to="/categoria/fondo" style={{textDecoration: 'none'}} >
                            Platos de fondo
                        </NavLink>
                        <br/>
                        <NavLink to="/categoria/bebida" style={{textDecoration: 'none'}}>
                            Bebidas
                        </NavLink>                    
                    <NavDropdown.Divider />
                    <NavLink to="/" style={{textDecoration: 'none'}}>
                            Ver todo
                    </NavLink>   
                    </NavDropdown>  
                </Nav>
                </Navbar.Collapse>
                <NavLink to="/cart">
                    <CartWidget />
                </NavLink>
            </Container>
            </Navbar>
        </div>
    )
}
