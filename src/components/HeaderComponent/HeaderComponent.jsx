import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

export const Header = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">МузЛо</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link href="#home">Главная</Nav.Link>
                <Nav.Link href="#products">Товары</Nav.Link>
            </Nav>
        </Navbar>
    );
};